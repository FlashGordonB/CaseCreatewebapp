import Link from "next/link";
import { redirect } from "next/navigation";
import { CaseSelectionForm } from "@/components/case-selection-form";
import { isCaseTypeKey, isValidPhoneModel, getSingleParam } from "@/lib/selection";

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
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/select-model" className="hover:text-brand">
            Select Model
          </Link>
          <span className="px-2">/</span>
          <span>Select Case</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Select Case Style
          </h1>
          <p className="mt-3 text-slate-600">
            Choose a case type and color when available, then continue to review
            your custom configuration.
          </p>
        </header>

        <CaseSelectionForm
          model={modelParam}
          initialCaseType={initialCaseType}
          initialColor={colorParam}
        />
      </div>
    </main>
  );
}
