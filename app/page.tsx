import Link from "next/link";
import { FeatureHighlights } from "@/components/feature-highlights";
import { StorefrontShell } from "@/components/storefront-shell";
import {
  collectionFilters,
  collectionSteps,
  showcaseCards,
} from "@/lib/storefront-content";

export default function HomePage() {
  return (
    <StorefrontShell>
      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-8 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pt-12">
          <div className="rounded-[36px] border border-border bg-surface-strong p-7 shadow-[0_28px_70px_rgba(75,85,68,0.08)] sm:p-10">
            <p className="inline-flex rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-brand uppercase">
              Personalizable Cases
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-tight font-semibold text-slate-900 sm:text-6xl">
              Create a custom case with the feel of a curated collection.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Browse finishes, choose your phone, and move through customization with a softer editorial storefront inspired by modern accessory brands.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/select-model"
                className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#2b413b] sm:text-base"
              >
                Shop Personalized Cases
              </Link>
              <span className="text-sm text-slate-500">
                Cream surfaces, sage accents, and collection-first merchandising
              </span>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[36px] border border-border bg-[#e7ddd0] p-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                How it works
              </p>
              <div className="mt-6 grid gap-4">
                {collectionSteps.map((step) => (
                  <div
                    key={step.id}
                    className="rounded-[24px] border border-white/70 bg-white/70 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-2xl text-brand">{step.id}</span>
                      <p className="text-base font-semibold text-slate-900">
                        {step.title}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pt-4 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            {collectionFilters.map((filter, index) => (
              <span
                key={filter}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  index === 0
                    ? "border-brand bg-brand text-white"
                    : "border-border bg-white/70 text-slate-600"
                }`}
              >
                {filter}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-4 pt-8 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                Featured collection
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
                Best-loved customization styles
              </h2>
            </div>
            <Link href="/select-model" className="hidden text-sm font-semibold text-brand sm:block">
              View all
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {showcaseCards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-[30px] border border-border bg-surface-strong p-5 shadow-[0_18px_40px_rgba(75,85,68,0.08)]"
              >
                <div
                  className={`flex h-60 items-end rounded-[24px] p-5 ${
                    index % 4 === 0
                      ? "bg-[#ddd6c7]"
                      : index % 4 === 1
                        ? "bg-[#d8e5dc]"
                        : index % 4 === 2
                          ? "bg-[#d9e5ea]"
                          : "bg-[#efe5d8]"
                  }`}
                >
                  <div className="w-full rounded-[22px] border border-white/60 bg-white/70 p-4 backdrop-blur">
                    <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                      {card.tone}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">Custom print preview</p>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{card.copy}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{card.price}</p>
                </div>
                <Link
                  href="/select-model"
                  className="mt-5 inline-flex rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
                >
                  Customize
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pt-6 sm:px-8 lg:px-10">
          <div className="rounded-[36px] border border-border bg-[#efe5d6] p-7 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
                  Design direction
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900 sm:text-4xl">
                  Built to feel like a Pelacase-inspired collection page
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  The landing page now prioritizes collection browsing, soft merchandising cards, and a clearer visual path into the custom flow instead of a generic product configurator.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {collectionSteps.slice(0, 2).map((step) => (
                  <div key={step.id} className="rounded-[24px] border border-white/70 bg-white/75 p-5">
                    <p className="font-serif text-2xl text-brand">{step.id}</p>
                    <p className="mt-3 text-base font-semibold text-slate-900">{step.title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FeatureHighlights />
        </section>
      </main>
    </StorefrontShell>
  );
}
