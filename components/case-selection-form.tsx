"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  caseTypeOptions,
  type CaseTypeKey,
  type PhoneModel,
} from "@/lib/product-options";

type CaseSelectionFormProps = {
  model: PhoneModel;
  initialCaseType?: CaseTypeKey;
  initialColor?: string;
};

const colorClasses: Record<string, string> = {
  black: "bg-slate-900",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  green: "bg-green-600",
  white: "bg-white",
};

export function CaseSelectionForm({
  model,
  initialCaseType,
  initialColor,
}: CaseSelectionFormProps) {
  const router = useRouter();
  const [caseType, setCaseType] = useState<CaseTypeKey | undefined>(
    initialCaseType,
  );
  const [color, setColor] = useState<string | undefined>(
    initialColor?.toLowerCase(),
  );

  const availableColors = useMemo(() => {
    if (!caseType) return [];
    return caseTypeOptions[caseType].colors;
  }, [caseType]);

  const canContinue = useMemo(() => {
    if (!caseType) return false;
    if (caseTypeOptions[caseType].colors.length === 0) return true;
    return Boolean(color && availableColors.includes(color));
  }, [availableColors, caseType, color]);

  const onCaseTypeSelect = (nextType: CaseTypeKey) => {
    setCaseType(nextType);
    if (caseTypeOptions[nextType].colors.length === 0) {
      setColor(undefined);
      return;
    }

    if (!color || !caseTypeOptions[nextType].colors.includes(color)) {
      setColor(undefined);
    }
  };

  const goToSummary = () => {
    if (!caseType) return;
    const params = new URLSearchParams();
    params.set("model", model);
    params.set("caseType", caseType);
    if (color && caseTypeOptions[caseType].colors.includes(color)) {
      params.set("color", color);
    }
    router.push(`/summary?${params.toString()}`);
  };

  return (
    <div className="rounded-[32px] border border-border bg-surface-strong p-6 shadow-[0_24px_50px_rgba(75,85,68,0.08)] sm:p-8">
      <div className="mb-8 grid gap-5 rounded-[28px] bg-[#ece2d3] p-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            Step 2
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
            Select your case finish
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Your selected shell is ready. Choose the finish that best suits the style of your custom artwork.
          </p>
        </div>
        <div className="rounded-[24px] border border-white/70 bg-white/75 p-5">
          <p className="text-sm text-slate-500">Selected Model</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{model}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-slate-900">Choose Case Type</h2>
        <span className="rounded-full border border-border bg-[#f7f1e7] px-4 py-2 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
          Personalized collection
        </span>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {Object.values(caseTypeOptions).map((option) => {
          const selected = caseType === option.key;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => onCaseTypeSelect(option.key)}
              className={`rounded-[28px] border p-5 text-left transition ${
                selected
                  ? "border-brand bg-brand-soft"
                  : "border-border bg-white hover:border-brand/60"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[#f3ebde] px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">
                  {option.key}
                </span>
                <span className="text-sm font-semibold text-slate-500">
                  From $45
                </span>
              </div>
              <p className="text-base font-semibold text-slate-900">
                {option.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>

      {availableColors.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-slate-900">
            Choose Color
          </h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {availableColors.map((colorName) => {
              const selected = color === colorName;
              return (
                <button
                  key={colorName}
                  type="button"
                  onClick={() => setColor(colorName)}
                  className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium capitalize transition ${
                    selected
                      ? "border-brand bg-brand-soft text-brand"
                      : "border-border bg-white text-slate-700 hover:border-brand/60"
                  }`}
                >
                  <span
                    className={`h-4 w-4 rounded-full border border-slate-300 ${colorClasses[colorName]}`}
                  />
                  {colorName}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <p className="text-sm text-slate-500">
          Continue once your finish and optional color are selected.
        </p>
        <button
          type="button"
          onClick={goToSummary}
          disabled={!canContinue}
          className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition enabled:hover:bg-[#2b413b] disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          Continue to Summary
        </button>
      </div>
    </div>
  );
}
