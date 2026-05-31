interface MetricsBarProps {
  total: number;
  knowCount: number;
  partialCount: number;
  dontKnowCount: number;
}

export function MetricsBar({
  total,
  knowCount,
  partialCount,
  dontKnowCount,
}: MetricsBarProps) {
  const getPercentage = (count: number) => {
    return total > 0 ? (count / total) * 100 : 0;
  };

  const knowPercentage = getPercentage(knowCount);
  const partialPercentage = getPercentage(partialCount);
  const dontKnowPercentage = getPercentage(dontKnowCount);

  return (
    <div className="space-y-4">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg bg-slate-800 p-4">
          <div className="text-3xl font-bold text-white">{total}</div>
          <div className="text-sm text-slate-400">Total</div>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <div className="text-3xl font-bold text-green-500">{knowCount}</div>
          <div className="text-sm text-slate-400">Know it</div>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <div className="text-3xl font-bold text-amber-500">
            {partialCount}
          </div>
          <div className="text-sm text-slate-400">Partial</div>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <div className="text-3xl font-bold text-red-500">{dontKnowCount}</div>
          <div className="text-sm text-slate-400">Don&apos;t know</div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1 overflow-hidden rounded-full bg-slate-700">
        <div className="flex h-full">
          {knowPercentage > 0 && (
            <div
              className="bg-green-500 transition-all"
              style={{ width: `${knowPercentage}%` }}
            />
          )}
          {partialPercentage > 0 && (
            <div
              className="bg-amber-500 transition-all"
              style={{ width: `${partialPercentage}%` }}
            />
          )}
          {dontKnowPercentage > 0 && (
            <div
              className="bg-red-500 transition-all"
              style={{ width: `${dontKnowPercentage}%` }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
