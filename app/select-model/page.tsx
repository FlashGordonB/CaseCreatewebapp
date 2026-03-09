import Link from "next/link";
import { PhoneModelSelector } from "@/components/phone-model-selector";
import { StorefrontShell } from "@/components/storefront-shell";

export default function SelectModelPage() {
  return (
    <StorefrontShell>
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span>/</span>
          <span className="rounded-full border border-border bg-white/60 px-3 py-1">
            Select Model
          </span>
        </nav>

        <header className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Personalized collection
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-900 sm:text-5xl">
              Pick your phone model
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Start by selecting your device family, then narrow to the exact model before choosing the case finish and previewing the design flow.
            </p>
          </div>
          <div className="rounded-[28px] border border-border bg-[#f0e7d8] p-5">
            <p className="text-sm font-semibold text-slate-900">Why this comes first</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The Pelacase-style experience still needs a product-first foundation. Selecting the shell early makes the rest of the merchandising feel intentional.
            </p>
          </div>
        </header>

        <PhoneModelSelector />
      </main>
    </StorefrontShell>
  );
}
