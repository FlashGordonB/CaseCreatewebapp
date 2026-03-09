import Link from "next/link";

type StorefrontShellProps = {
  children: React.ReactNode;
};

const navItems = [
  "Custom Cases",
  "Personalization",
  "MagSafe",
  "Best Sellers",
  "About",
];

export function StorefrontShell({ children }: StorefrontShellProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-brand px-4 py-2 text-center text-[11px] font-medium tracking-[0.22em] text-white uppercase sm:text-xs">
        Free shipping on personalized cases over $55
      </div>
      <div className="border-b border-border bg-brand-accent/55 px-4 py-2 text-center text-xs text-brand sm:text-sm">
        Upload your artwork, choose your case, and preview your custom build in minutes.
      </div>

      <header className="border-b border-border bg-surface-strong/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex flex-col">
              <span className="font-serif text-3xl leading-none font-semibold text-brand">
                CaseCreate
              </span>
              <span className="mt-1 text-[10px] tracking-[0.28em] text-slate-500 uppercase">
                Personalized collection
              </span>
            </Link>
            <div className="hidden items-center gap-3 text-xs text-slate-500 md:flex">
              <span>Compostable-inspired palette</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>Built for custom print previews</span>
            </div>
            <Link
              href="/select-model"
              className="rounded-full border border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2b413b]"
            >
              Start Customizing
            </Link>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            {navItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border bg-white/60 px-4 py-2 transition hover:border-brand/50 hover:text-brand"
              >
                {item}
              </span>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="mt-20 border-t border-border bg-[#ece3d3]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
          <div>
            <p className="font-serif text-2xl font-semibold text-brand">CaseCreate</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              A local storefront prototype for personalized phone cases with a collection-first shopping experience.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Shop Flow
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-700">
              <Link href="/select-model">Select model</Link>
              <Link href="/select-case">Choose case type</Link>
              <Link href="/summary">Review summary</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] text-slate-500 uppercase">
              Promise
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Clean product browsing, tactile card layouts, and a softer editorial look aligned to modern DTC accessory stores.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
