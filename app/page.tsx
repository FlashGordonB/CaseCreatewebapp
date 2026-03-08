import Link from "next/link";
import { FeatureHighlights } from "@/components/feature-highlights";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#dcfce7_0,_#f4f6fb_42%,_#f4f6fb_100%)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-10 sm:px-10">
        <header className="mb-16 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.18em] text-brand uppercase">
            ResinCase Studio
          </span>
          <Link
            href="/select-model"
            className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
          >
            Start Build
          </Link>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-brand/30 bg-brand-soft px-4 py-1 text-xs font-semibold tracking-[0.12em] text-brand uppercase">
              Custom Resin Printed Cases & Film
            </p>
            <h1 className="text-4xl leading-tight font-bold text-slate-900 sm:text-6xl">
              Turn Your Favorite Image Into a Premium Phone Case.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              We print ultra-detailed HD artwork directly onto protective cases
              and film using a resin process built for vivid color and clean
              depth.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/select-model"
                className="rounded-full bg-brand px-8 py-3 text-base font-semibold text-white transition hover:bg-teal-700"
              >
                Discover Now
              </Link>
              <span className="text-sm text-slate-500">
                Local demo flow, ready for ecommerce expansion
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm">
            <div className="rounded-2xl border border-dashed border-brand/40 bg-gradient-to-b from-teal-100 to-white p-8">
              <h2 className="text-lg font-semibold text-slate-900">
                HD Resin Print Preview
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Placeholder mock area for future live case mockups and image
                upload previews.
              </p>
              <div className="mt-6 h-44 rounded-xl border border-border bg-white/80" />
            </div>
          </div>
        </section>

        <FeatureHighlights />
      </div>
    </main>
  );
}
