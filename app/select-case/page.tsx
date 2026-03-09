import Link from "next/link";
import { redirect } from "next/navigation";
import { CaseSelectionForm } from "@/components/case-selection-form";
import { StorefrontShell } from "@/components/storefront-shell";
import { getSingleParam, isCaseTypeKey, isValidPhoneModel } from "@/lib/selection";

type SelectCasePageProps = {
  searchParams: Promise<{
    model?: string | string[];
    caseType?: string | string[];
    color?: string | string[];
  }>;
};

export default async function SelectCasePage({ searchParams }: SelectCasePageProps) {
  const params = await searchParams;
  const modelParam = getSingleParam(params.model);

  if (!isValidPhoneModel(modelParam)) {
    redirect("/select-model");
  }

  const caseTypeParam = getSingleParam(params.caseType);
  const colorParam = getSingleParam(params.color)?.toLowerCase();
  const initialCaseType = isCaseTypeKey(caseTypeParam) ? caseTypeParam : undefined;

  return (
    <StorefrontShell>
      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
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
            Select Case
          </span>
        </nav>

        <header className="mb-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Personalized collection
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-slate-900 sm:text-5xl">
              Select case style
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Now choose the finish that frames your custom art. Colors appear only when the selected case style supports them.
            </p>
          </div>
          <div className="rounded-[28px] border border-border bg-[#f0e7d8] p-5">
            <p className="text-sm font-semibold text-slate-900">Current device</p>
            <p className="mt-2 text-lg font-semibold text-brand">{modelParam}</p>
          </div>
        </header>

        <CaseSelectionForm
          model={modelParam}
          initialCaseType={initialCaseType}
          initialColor={colorParam}
        />
      </main>
    </StorefrontShell>
  );
}
