"use client";

import { Button } from "@/components/ui/button";

export type FilterType = "all" | "know" | "partial" | "dont-know" | "unmarked" | "important";

interface FilterSectionProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onReset: (chapterId: string) => void;
  currentChapterId: string;
  chapterName: string;
}

export function FilterSection({
  activeFilter,
  onFilterChange,
  onReset,
  currentChapterId,
  chapterName,
}: FilterSectionProps) {
  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Know it", value: "know" },
    { label: "Partial", value: "partial" },
    { label: "Don't know", value: "dont-know" },
    { label: "Unmarked", value: "unmarked" },
    { label: "Important", value: "important" },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm text-slate-400">Show:</span>
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => onFilterChange(filter.value)}
              className={
                activeFilter === filter.value
                  ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                  : "border-slate-600 text-slate-500 hover:border-slate-500"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onReset(currentChapterId)}
        className="border-slate-600 text-slate-500 hover:border-slate-500"
      >
        Reset {chapterName}
      </Button>
    </div>
  );
}
