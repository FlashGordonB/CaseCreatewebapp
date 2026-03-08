"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { phoneBrands, phoneModelsByBrand, type PhoneBrand } from "@/lib/product-options";

export function PhoneModelSelector() {
  const router = useRouter();
  const [brand, setBrand] = useState<PhoneBrand | "">("");
  const [model, setModel] = useState<string>("");

  const modelsForBrand = useMemo(() => {
    if (!brand) return [];
    return phoneModelsByBrand[brand];
  }, [brand]);

  const onBrandChange = (value: string) => {
    setBrand(value as PhoneBrand | "");
    setModel("");
  };

  const onContinue = () => {
    if (!model) return;
    router.push(`/select-case?model=${encodeURIComponent(model)}`);
  };

  return (
    <section className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Phone Brand</span>
          <select
            value={brand}
            onChange={(event) => onBrandChange(event.target.value)}
            className="h-11 rounded-xl border border-border bg-white px-3 text-slate-800 outline-none transition focus:border-brand"
          >
            <option value="">Select a brand</option>
            {phoneBrands.map((phoneBrand) => (
              <option key={phoneBrand} value={phoneBrand}>
                {phoneBrand}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Phone Model</span>
          <select
            value={model}
            onChange={(event) => setModel(event.target.value)}
            disabled={!brand}
            className="h-11 rounded-xl border border-border bg-white px-3 text-slate-800 outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:bg-slate-100"
          >
            <option value="">
              {brand ? "Select a model" : "Select brand first"}
            </option>
            {modelsForBrand.map((phoneModel) => (
              <option key={phoneModel} value={phoneModel}>
                {phoneModel}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <p className="text-sm text-slate-500">
          Choose brand and model to continue to case type selection.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-border px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={onContinue}
            disabled={!model}
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition enabled:hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
