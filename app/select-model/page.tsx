import Link from "next/link";
import { PhoneModelSelector } from "@/components/phone-model-selector";

export default function SelectModelPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-10">
        <nav className="mb-8 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <span className="px-2">/</span>
          <span>Select Model</span>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Pick Your Phone Model
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Start by selecting a phone brand, then pick a model from that
            brand to match fitment before case style and resin print
            customization.
          </p>
        </header>

        <PhoneModelSelector />
      </div>
    </main>
  );
}
