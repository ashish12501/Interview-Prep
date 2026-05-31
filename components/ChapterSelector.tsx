"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Chapter } from "@/lib/questions";

interface ChapterSelectorProps {
  chapters: Chapter[];
  activeChapterId: string;
  onChapterChange: (chapterId: string) => void;
}

export function ChapterSelector({
  chapters,
  activeChapterId,
  onChapterChange,
}: ChapterSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeChapter = chapters.find((ch) => ch.id === activeChapterId);

  return (
    <div className="relative">
      {/* Hamburger Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 border-slate-600 text-slate-800 hover:text-slate-200 hover:border-slate-500 hover:bg-slate-800"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <div className="flex items-center gap-2">
          <span className="font-medium">
            {activeChapter?.name || "Chapters"}
          </span>
          <span className="hidden rounded-full bg-slate-800 px-2 py-0.5 text-xs text-slate-400 sm:inline">
            {chapters.length} chapters
          </span>
        </div>
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-slate-700 bg-slate-900 shadow-lg">
          <div className="p-2">
            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase text-slate-500">
                Select Chapter
              </p>
              <p className="mt-1 text-xs text-slate-400">
                {chapters.length} chapters ·{" "}
                {chapters.reduce(
                  (total, chapter) => total + chapter.questions.length,
                  0,
                )}{" "}
                questions
              </p>
            </div>
            <div className="space-y-1">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => {
                    onChapterChange(chapter.id);
                    setIsOpen(false);
                  }}
                  className={`w-full rounded px-3 py-2 text-left text-sm transition-colors ${
                    activeChapterId === chapter.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{chapter.name}</span>
                    <span className="text-xs text-slate-400">
                      {chapter.questions.length}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Close overlay when clicking outside */}
      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
