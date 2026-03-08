const features = [
  {
    title: "Vibrant print quality",
    copy: "Resin HD printing delivers sharp detail and rich color depth.",
  },
  {
    title: "Custom look",
    copy: "Personalize every case with artwork that fits your style.",
  },
  {
    title: "Multiple case styles",
    copy: "Choose clear, translucent, or silicon protection profiles.",
  },
  {
    title: "Film and case options",
    copy: "Built for both printed films and full custom case shells.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="mt-18">
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
        Built to make custom products look premium
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-border bg-surface p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {feature.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
