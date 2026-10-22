type QuantitySelectorProps = {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  value,
  onIncrease,
  onDecrease
}: QuantitySelectorProps) {
  return (
    <div className="inline-flex items-center gap-4 rounded-full border border-slate-200 bg-slate-100 px-3 py-2">
      <button
        type="button"
        onClick={onDecrease}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-medium text-slate-700"
      >
        −
      </button>

      <span className="min-w-6 text-center text-sm font-bold text-slate-900">{value}</span>

      <button
        type="button"
        onClick={onIncrease}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-medium text-slate-700"
      >
        +
      </button>
    </div>
  );
}
