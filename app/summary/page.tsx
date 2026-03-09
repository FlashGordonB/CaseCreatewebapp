import Link from "next/link";
import { redirect } from "next/navigation";
import { StorefrontShell } from "@/components/storefront-shell";
import { caseTypeOptions } from "@/lib/product-options";
import {
  getSingleParam,
  isCaseTypeKey,
  isValidColor,
  isValidPhoneModel,
} from "@/lib/selection";

type SummaryPageProps = {
  searchParams: Promise<{
    model?: string | string[];
    caseType?: string | string[];
    color?: string | string[];
  }>;
};

export default async function SummaryPage({ searchParams }: SummaryPageProps) {
  const params = await searchParams;
  const model = getSingleParam(params.model);
  const caseTypeRaw = getSingleParam(params.caseType);
  const colorRaw = getSingleParam(params.color)?.toLowerCase();

  if (!isValidPhoneModel(model)) {
    redirect("/select-model");
  }

  if (!isCaseTypeKey(caseTypeRaw)) {
    redirect(`/select-case?model=${encodeURIComponent(model)}`);
  }

  const selectedCase = caseTypeOptions[caseTypeRaw];
  const requiresColor = selectedCase.colors.length > 0;

  if (requiresColor && !isValidColor(caseTypeRaw, colorRaw)) {
    redirect(
      `/select-case?model=${encodeURIComponent(model)}&caseType=${caseTypeRaw}`,
    );
  }

  return (
    <StorefrontShell>
      <main className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 lg:px-10">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span>/</span>
          <Link href="/select-model" className="hover:text-brand">
            Select Model
          </Link>
          <span>/</span>
          <span className="rounded-full border border-border bg-white/60 px-3 py-1">
            Summary
          </span>
        </nav>

        <header className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Step 3
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-900 sm:text-5xl">
              Configuration summary
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Review the shell and finish before continuing into artwork upload and final layout.
            </p>
          </div>
          <div className="rounded-[28px] border border-border bg-[#f0e7d8] p-5">
            <p className="text-sm font-semibold text-slate-900">Ready for next step</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The next stage can introduce image upload, crop tools, and live mockups while keeping this same storefront language.
            </p>
          </div>
        </header>

        <section className="rounded-[32px] border border-border bg-surface-strong p-6 shadow-[0_24px_50px_rgba(75,85,68,0.08)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Your custom configuration
              </h2>
              <div className="rounded-[24px] border border-border bg-[#f7f1e7] p-5">
                <p className="text-sm text-slate-500">Phone Model</p>
                <p className="mt-2 text-base font-semibold text-slate-900">{model}</p>
              </div>
              <div className="rounded-[24px] border border-border bg-[#f7f1e7] p-5">
                <p className="text-sm text-slate-500">Case Type</p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {selectedCase.label}
                </p>
              </div>
              {requiresColor && (
                <div className="rounded-[24px] border border-border bg-[#f7f1e7] p-5">
                  <p className="text-sm text-slate-500">Color</p>
                  <p className="mt-2 text-base font-semibold capitalize text-slate-900">
                    {colorRaw}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-[28px] border border-border bg-[#e8ddd0] p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Product Preview
              </h3>
              <div className="mt-4 flex h-56 items-end rounded-[24px] bg-white/70 p-5">
                <div className="w-full rounded-[22px] border border-white/70 bg-brand-soft p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                    Mock preview
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {selectedCase.label}
                    {colorRaw ? ` / ${colorRaw}` : ""} for {model}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Image upload and live print layout tools are the next step. This page now presents them inside a more merchandise-driven summary card.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <Link
              href={`/select-case?model=${encodeURIComponent(model)}`}
              className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
            >
              Edit Selection
            </Link>
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b413b]"
            >
              Continue to Design Upload
            </button>
          </div>
        </section>
      </main>
    </StorefrontShell>
  );
}
