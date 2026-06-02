"use client";

import { useState } from "react";
import { MetricsBar } from "@/components/MetricsBar";
import { FilterSection, FilterType } from "@/components/FilterSection";
import { QuestionsList } from "@/components/QuestionsList";
import { ChapterSelector } from "@/components/ChapterSelector";
import { useProgress } from "@/lib/useProgress";
import { chapters } from "@/lib/questions";

export default function Page() {
  const [filter, setFilter] = useState<FilterType>("all");
  const [activeChapterId, setActiveChapterId] = useState(chapters[0]?.id || "");
  const {
    isLoaded,
    setAnswer,
    getAnswer,
    isImportant,
    toggleImportant,
    resetChapter,
    getMetrics,
  } = useProgress();

  const activeChapter = chapters.find((ch) => ch.id === activeChapterId);
  const metrics = getMetrics(activeChapterId);
  const totalChapters = chapters.length;
  const totalQuestions = chapters.reduce(
    (sum, chapter) => sum + chapter.questions.length,
    0,
  );

  if (!isLoaded) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <div className="flex items-center justify-center py-12">
          <p className="text-slate-400">Loading...</p>
        </div>
      </main>
    );
  }

  const handleReset = () => {
    if (
      window.confirm(
        `Are you sure you want to reset all answers for ${activeChapter?.name}? This cannot be undone.`,
      )
    ) {
      resetChapter(activeChapterId);
      setFilter("all");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header with Chapter Selector */}
        <div className="flex flex-col gap-4 xl:flex-row items-start justify-between">
          <div className="space-y-3">
            <div>
              <h1 className="text-3xl font-bold">Interview Practice</h1>
              <p className="mt-1 text-slate-400">
                {activeChapter?.name
                  ? `${activeChapter.name} - Test your knowledge`
                  : "Select a chapter to begin"}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
                {totalChapters} chapter{totalChapters === 1 ? "" : "s"}{" "}
                available
              </span>
              <span className="rounded-full bg-slate-900 px-3 py-1 border border-slate-700">
                {totalQuestions} total question{totalQuestions === 1 ? "" : "s"}
              </span>
              {totalChapters > 1 && (
                <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-300">
                  Switch chapters using the menu
                </span>
              )}
            </div>
          </div>
          <ChapterSelector
            chapters={chapters}
            activeChapterId={activeChapterId}
            onChapterChange={setActiveChapterId}
          />
        </div>

        {/* Metrics Bar */}
        <MetricsBar
          total={metrics.total}
          knowCount={metrics.knowCount}
          partialCount={metrics.partialCount}
          dontKnowCount={metrics.dontKnowCount}
        />

        {/* Filter Section */}
        <FilterSection
          activeFilter={filter}
          onFilterChange={setFilter}
          onReset={handleReset}
          currentChapterId={activeChapterId}
          chapterName={activeChapter?.name || "Chapter"}
        />

        {/* Questions List */}
        {activeChapter && (
          <QuestionsList
            questions={activeChapter.questions}
            filter={filter}
            onAnswer={setAnswer}
            getAnswer={getAnswer}
            isImportant={isImportant}
            onToggleImportant={toggleImportant}
          />
        )}
      </div>
    </main>
  );
}
