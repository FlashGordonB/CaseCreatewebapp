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
    <section className="rounded-[32px] border border-border bg-surface-strong p-6 shadow-[0_24px_50px_rgba(75,85,68,0.08)] sm:p-8">
      <div className="mb-8 grid gap-5 rounded-[28px] bg-[#eee6d8] p-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase">
            Step 1
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-slate-900">
            Find your device
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Start with the exact phone shell. The rest of the customization flow updates from this choice.
          </p>
        </div>
        <div className="rounded-[24px] border border-white/70 bg-white/70 p-5">
          <p className="text-sm font-semibold text-slate-900">Collection note</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Popular fits are grouped by brand to keep the shopping flow closer to a product filter sidebar.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-700">Phone Brand</span>
          <select
            value={brand}
            onChange={(event) => onBrandChange(event.target.value)}
            className="h-[52px] rounded-full border border-border bg-white px-5 text-slate-800 outline-none transition focus:border-brand"
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
            className="h-[52px] rounded-full border border-border bg-white px-5 text-slate-800 outline-none transition focus:border-brand disabled:cursor-not-allowed disabled:bg-slate-100"
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

      <div className="mt-8 rounded-[28px] border border-border bg-[#f7f1e7] p-5">
        <div className="flex flex-wrap gap-2">
          {brand &&
            phoneModelsByBrand[brand].slice(0, 6).map((phoneModel) => (
              <span
                key={phoneModel}
                className={`rounded-full border px-3 py-2 text-xs ${
                  model === phoneModel
                    ? "border-brand bg-brand text-white"
                    : "border-border bg-white text-slate-600"
                }`}
              >
                {phoneModel}
              </span>
            ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        <p className="text-sm text-slate-500">
          Choose brand and model to continue to the finish selection.
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="rounded-full border border-border bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand hover:text-brand"
          >
            Back
          </Link>
          <button
            type="button"
            onClick={onContinue}
            disabled={!model}
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition enabled:hover:bg-[#2b413b] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
}
