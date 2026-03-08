import Link from "next/link";
import { redirect } from "next/navigation";
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
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/select-model" className="hover:text-brand">
            Select Model
          </Link>
          <span className="px-2">/</span>
          <span>Summary</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Configuration Summary
          </h1>
          <p className="mt-3 text-slate-600">
            Review your selected product setup before continuing to artwork and
            design upload.
          </p>
        </header>

        <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-slate-900">
                Your Custom Configuration
              </h2>
              <div className="rounded-2xl border border-border bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Phone Model</p>
                <p className="text-base font-semibold text-slate-900">{model}</p>
              </div>
              <div className="rounded-2xl border border-border bg-slate-50 p-4">
                <p className="text-sm text-slate-500">Case Type</p>
                <p className="text-base font-semibold text-slate-900">
                  {selectedCase.label}
                </p>
              </div>
              {requiresColor && (
                <div className="rounded-2xl border border-border bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Color</p>
                  <p className="text-base font-semibold capitalize text-slate-900">
                    {colorRaw}
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-dashed border-brand/40 bg-gradient-to-b from-teal-100 to-white p-5">
              <h3 className="text-base font-semibold text-slate-900">
                Product Preview (Mock)
              </h3>
              <div className="mt-3 h-44 rounded-xl border border-border bg-white/85" />
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Image upload and live print layout tools are the next step and
                will be added in future iterations.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
            <Link
              href={`/select-case?model=${encodeURIComponent(model)}`}
              className="rounded-full border border-border px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
            >
              Edit Selection
            </Link>
            <button
              type="button"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Continue to Design Upload
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
