"use client";

import { useState, useEffect, useCallback } from "react";
import { chapters } from "./questions";

export type AnswerStatus = "know" | "partial" | "dont-know" | null;

interface ProgressData {
  [questionId: string]: AnswerStatus;
}

interface ImportantData {
  [questionId: string]: boolean;
}

interface ProgressMetrics {
  total: number;
  knowCount: number;
  partialCount: number;
  dontKnowCount: number;
  unmarkedCount: number;
}

const STORAGE_KEY = "interview-practice-progress";
const IMPORTANT_STORAGE_KEY = "interview-practice-important";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>({});
  const [important, setImportant] = useState<ImportantData>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const storedImportant = localStorage.getItem(IMPORTANT_STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress from localStorage", e);
      }
    }
    if (storedImportant) {
      try {
        setImportant(JSON.parse(storedImportant));
      } catch (e) {
        console.error("Failed to parse important from localStorage", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isLoaded]);

  // Persist important to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(IMPORTANT_STORAGE_KEY, JSON.stringify(important));
    }
  }, [important, isLoaded]);

  const setAnswer = useCallback((questionId: string, status: AnswerStatus) => {
    setProgress((prev) => ({
      ...prev,
      [questionId]: status,
    }));
  }, []);

  const getAnswer = useCallback(
    (questionId: string): AnswerStatus => {
      return progress[questionId] || null;
    },
    [progress],
  );

  const isImportant = useCallback(
    (questionId: string): boolean => {
      return important[questionId] || false;
    },
    [important],
  );

  const toggleImportant = useCallback((questionId: string) => {
    setImportant((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  const resetAll = useCallback(() => {
    setProgress({});
  }, []);

  const resetChapter = useCallback((chapterId: string) => {
    const chapter = chapters.find((ch) => ch.id === chapterId);
    if (!chapter) return;

    const chapterQuestionIds = new Set(chapter.questions.map((q) => q.id));
    setProgress((prev) => {
      const updated = { ...prev };
      chapterQuestionIds.forEach((id) => {
        delete updated[id];
      });
      return updated;
    });
  }, []);

  const getMetrics = useCallback(
    (chapterId?: string): ProgressMetrics => {
      let totalQuestions = 0;
      let chapterQuestionIds: Set<string> = new Set();

      if (chapterId) {
        const chapter = chapters.find((ch) => ch.id === chapterId);
        totalQuestions = chapter?.questions.length || 0;
        chapterQuestionIds = new Set(chapter?.questions.map((q) => q.id) || []);
      } else {
        totalQuestions = chapters.reduce(
          (sum, ch) => sum + ch.questions.length,
          0,
        );
        chapters.forEach((ch) => {
          ch.questions.forEach((q) => chapterQuestionIds.add(q.id));
        });
      }

      // Filter progress by chapter questions only
      const chapterProgress = Object.entries(progress)
        .filter(([questionId]) => chapterQuestionIds.has(questionId))
        .map(([, status]) => status);

      const knowCount = chapterProgress.filter((s) => s === "know").length;
      const partialCount = chapterProgress.filter(
        (s) => s === "partial",
      ).length;
      const dontKnowCount = chapterProgress.filter(
        (s) => s === "dont-know",
      ).length;
      const unmarkedCount =
        totalQuestions - knowCount - partialCount - dontKnowCount;

      return {
        total: totalQuestions,
        knowCount,
        partialCount,
        dontKnowCount,
        unmarkedCount,
      };
    },
    [progress],
  );

  return {
    progress,
    important,
    isLoaded,
    setAnswer,
    getAnswer,
    isImportant,
    toggleImportant,
    resetAll,
    resetChapter,
    getMetrics,
  };
}
