type SectionTitleProps = {
  eyebrow: string;
  title: string;
  action?: string;
  actionHref?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  action,
  actionHref = '/produtos'
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-900">{title}</h2>
      </div>

      {action && (
        <a href={actionHref} className="text-sm font-bold text-primary">
          {action}
        </a>
      )}
    </div>
  );
}
