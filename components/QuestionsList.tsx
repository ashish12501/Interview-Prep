"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Question } from "@/lib/questions";
import { FilterType } from "./FilterSection";
import { AnswerStatus } from "@/lib/useProgress";

interface QuestionsListProps {
  questions: Question[];
  filter: FilterType;
  onAnswer: (questionId: string, status: AnswerStatus) => void;
  getAnswer: (questionId: string) => AnswerStatus;
}

export function QuestionsList({
  questions,
  filter,
  onAnswer,
  getAnswer,
}: QuestionsListProps) {
  const [expandedAnswers, setExpandedAnswers] = useState<
    Record<string, boolean>
  >({});

  const toggleAnswer = (questionId: string) => {
    setExpandedAnswers((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  // Filter questions based on selected filter
  const filteredQuestions = questions.filter((q) => {
    const answer = getAnswer(q.id);
    if (filter === "all") return true;
    if (filter === "know") return answer === "know";
    if (filter === "partial") return answer === "partial";
    if (filter === "dont-know") return answer === "dont-know";
    if (filter === "unmarked") return answer === null;
    return true;
  });

  // Group questions by category
  const groupedQuestions = filteredQuestions.reduce(
    (acc, question) => {
      if (!acc[question.category]) {
        acc[question.category] = [];
      }
      acc[question.category].push(question);
      return acc;
    },
    {} as Record<string, Question[]>,
  );

  // Calculate category stats
  const getCategoryStats = (categoryQuestions: Question[]) => {
    const know = categoryQuestions.filter(
      (q) => getAnswer(q.id) === "know",
    ).length;
    const partial = categoryQuestions.filter(
      (q) => getAnswer(q.id) === "partial",
    ).length;
    const dontKnow = categoryQuestions.filter(
      (q) => getAnswer(q.id) === "dont-know",
    ).length;
    return { know, partial, dontKnow };
  };

  if (filteredQuestions.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-400">No questions to display</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => {
        const stats = getCategoryStats(categoryQuestions);
        return (
          <div key={category}>
            {/* Category Header */}
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                {category}
              </h2>
              <p className="text-xs text-slate-500">
                {stats.know} know · {stats.partial} partial · {stats.dontKnow}{" "}
                don&apos;t know
              </p>
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {categoryQuestions.map((question) => {
                const answer = getAnswer(question.id);
                const isExpanded = expandedAnswers[question.id];
                return (
                  <div
                    key={question.id}
                    className="rounded-lg border border-slate-700 bg-slate-900 px-6 py-4"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1 break-words">
                        <p className="text-slate-100">{question.question}</p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap justify-end gap-2">
                        <Button
                          size="sm"
                          variant={answer === "know" ? "default" : "outline"}
                          onClick={() => onAnswer(question.id, "know")}
                          className={
                            answer === "know"
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : "border-slate-600 text-slate-400 hover:border-slate-500"
                          }
                        >
                          Know it
                        </Button>

                        <Button
                          size="sm"
                          variant={answer === "partial" ? "default" : "outline"}
                          onClick={() => onAnswer(question.id, "partial")}
                          className={
                            answer === "partial"
                              ? "bg-amber-600 hover:bg-amber-700 text-white"
                              : "border-slate-600 text-slate-400 hover:border-slate-500"
                          }
                        >
                          Partial
                        </Button>

                        <Button
                          size="sm"
                          variant={
                            answer === "dont-know" ? "default" : "outline"
                          }
                          onClick={() => onAnswer(question.id, "dont-know")}
                          className={
                            answer === "dont-know"
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "border-slate-600 text-slate-400 hover:border-slate-500"
                          }
                        >
                          Don&apos;t know
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => toggleAnswer(question.id)}
                          className={
                            isExpanded
                              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                              : "border-slate-600 text-slate-400 hover:border-slate-500"
                          }
                        >
                          {isExpanded ? "Hide" : "Answer"}
                        </Button>
                      </div>
                    </div>

                    {/* Answer Dropdown */}
                    {isExpanded && (
                      <div className="mt-4 rounded-md bg-slate-800 p-4 border-l-4 border-blue-500">
                        <p className="text-slate-200 leading-relaxed">
                          {question.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
