import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const products = [
  {
    emoji: "🧩",
    name: "SaaS Blocks Kit",
    tag: "Next.js 15",
    tagColor: "indigo",
    price: "$29",
    description:
      "10 production-ready landing page sections. shadcn/ui, Tailwind CSS v4, dark mode.",
    ctaLabel: "Get it →",
    ctaHref: "https://sekmenahmet.gumroad.com/l/gsngbn",
    demoHref: "https://saas-blocks-kit.vercel.app",
    badge: "NEW",
    badgeColor: "accent",
    comingSoon: false,
  },
  {
    emoji: "🚀",
    name: "Next.js SaaS Starter",
    tag: "Next.js 15",
    tagColor: "indigo",
    price: "$20",
    description:
      "Full-stack SaaS boilerplate. NextAuth v5, Stripe, Prisma, Resend, Tailwind.",
    ctaLabel: "Get it →",
    ctaHref: "https://sekmenahmet.gumroad.com/l/dweyo",
    demoHref: null,
    badge: null,
    badgeColor: null,
    comingSoon: false,
  },
  {
    emoji: "📊",
    name: "Admin Dashboard Starter",
    tag: "Next.js 15",
    tagColor: "indigo",
    price: "$25",
    description:
      "Admin dashboard with Recharts, TanStack Table, NextAuth v5, Prisma. 20 seeded users.",
    ctaLabel: "Get it →",
    ctaHref: "https://sekmenahmet.gumroad.com/l/jgvpc",
    demoHref: null,
    badge: null,
    badgeColor: null,
    comingSoon: false,
  },
  {
    emoji: "⚡",
    name: "Cursor Rules Pack",
    tag: "AI / Cursor",
    tagColor: "violet",
    price: "$19",
    description:
      "Production .cursorrules for Next.js 15 + TypeScript + Tailwind. 25 prompts included.",
    ctaLabel: "Get it →",
    ctaHref: "https://sekmenahmet.gumroad.com/l/lcilun",
    demoHref: null,
    badge: null,
    badgeColor: null,
    comingSoon: false,
  },
  {
    emoji: "🎓",
    name: "Scholar OS",
    tag: "Notion",
    tagColor: "green",
    price: "$10",
    description:
      "Complete academic system in Notion. 9 databases: courses, exams, SRS, habits & more.",
    ctaLabel: "Get it →",
    ctaHref: "https://sekmenahmet.gumroad.com/l/kbcwrn",
    demoHref: null,
    badge: null,
    badgeColor: null,
    comingSoon: false,
  },
  {
    emoji: "💼",
    name: "Freelance CRM",
    tag: "Notion",
    tagColor: "green",
    price: "Coming soon",
    description:
      "Full freelance business OS. Clients, projects, invoices, time tracking & tasks.",
    ctaLabel: "Notify me →",
    ctaHref: "mailto:sekmenahmet04@gmail.com",
    demoHref: null,
    badge: "SOON",
    badgeColor: "soon",
    comingSoon: true,
  },
] as const;

const tagStyles = {
  indigo: "bg-indigo-100 text-indigo-700 border border-indigo-200",
  violet: "bg-violet-100 text-violet-700 border border-violet-200",
  green: "bg-emerald-100 text-emerald-700 border border-emerald-200",
} as const;

const badgeStyles = {
  accent:
    "bg-[#ef7f4f]/10 text-[#ef7f4f] border border-[#ef7f4f]/30",
  soon: "bg-amber-100 text-amber-700 border border-amber-200",
} as const;

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--ink)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-heading text-base font-semibold tracking-tight text-[var(--ink)]">
            Ahmet Sekmen
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/SekmenAhmet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://portfolio.ahmetsekmen.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs font-medium text-[var(--ink)] shadow-sm transition-all hover:bg-white hover:shadow"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-[var(--muted)] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            Developer &amp; Indie Maker
          </div>
          <h1 className="font-heading mx-auto max-w-2xl text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
            Tools built for developers,{" "}
            <span style={{ color: "var(--accent)" }}>by a developer.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-[var(--muted)] sm:text-lg">
            Production-ready templates, boilerplates and systems to ship faster.
          </p>
        </section>

        {/* Products */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="font-heading mb-10 text-xl font-semibold text-[var(--ink)]">
            Products
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className={`group relative flex flex-col rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01]${p.comingSoon ? " opacity-75" : ""}`}
              >
                {p.badge && p.badgeColor && (
                  <span
                    className={`absolute right-4 top-4 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wider ${badgeStyles[p.badgeColor]}`}
                  >
                    {p.badge}
                  </span>
                )}

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{p.emoji}</span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${tagStyles[p.tagColor]}`}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-heading mb-2 text-base font-semibold text-[var(--ink)]">
                  {p.name}
                </h3>

                <p
                  className={`mb-3 text-2xl font-bold${p.comingSoon ? " text-[var(--muted)]" : " text-[var(--ink)]"}`}
                >
                  {p.price}
                </p>

                <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {p.description}
                </p>

                <div className="flex flex-col gap-2">
                  <a
                    href={p.ctaHref}
                    target={p.ctaHref.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      p.ctaHref.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={`flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-all${p.comingSoon ? " border border-black/10 bg-white text-[var(--muted)] hover:bg-white/80" : " bg-[var(--accent)] text-white hover:opacity-90 shadow-sm"}`}
                  >
                    {p.ctaLabel}
                  </a>
                  {p.demoHref && (
                    <a
                      href={p.demoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 text-xs text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
                    >
                      <ExternalLink size={12} />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/10 bg-white/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-[var(--muted)] sm:flex-row">
          <span>Built with Next.js &amp; Tailwind</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/SekmenAhmet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--ink)]"
            >
              GitHub
            </a>
            <a
              href="https://sekmenahmet.gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--ink)]"
            >
              Gumroad
            </a>
            <a
              href="https://ko-fi.com/ahmetsekmen"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[var(--ink)]"
            >
              Ko-fi
            </a>
          </div>
          <span>© 2026 Ahmet Sekmen</span>
        </div>
      </footer>
    </div>
  );
}
