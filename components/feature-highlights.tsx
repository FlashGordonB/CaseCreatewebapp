const features = [
  {
    title: "Editorial layout",
    copy: "A calmer collection page rhythm with rounded cards and softer color blocking.",
  },
  {
    title: "Guided customization",
    copy: "The step flow stays prominent without losing the feel of browsing a product collection.",
  },
  {
    title: "Merchandising cues",
    copy: "Badges, swatches, pricing, and callouts mimic a direct-to-consumer case shop.",
  },
  {
    title: "Premium tone",
    copy: "Serif headings, cream surfaces, and sage accents replace the generic app feel.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="mt-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase">
            Why it feels closer
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
            A softer storefront instead of a plain configurator
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          The visual system now leans on collection merchandising patterns so the customizer feels like part of a real ecommerce brand.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map((feature, index) => (
          <article
            key={feature.title}
            className="rounded-[28px] border border-border bg-surface-strong p-6 shadow-[0_18px_40px_rgba(75,85,68,0.08)]"
          >
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {feature.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
