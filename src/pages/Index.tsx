import { useState } from "react";
import { ArrowUpRight, Check, Leaf, Menu, Moon, Sparkles, Timer, Waves, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#rituals", label: "Rituals" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

const teams = ["Northwind", "Halcyon", "Field & Co.", "Juniper", "Oakline", "Meridian", "Saltbox", "Lumen"];

const rituals = [
  {
    icon: Timer,
    title: "Deep-work blocks",
    desc: "Aura guards two quiet hours a day and moves meetings out of the way for you.",
  },
  {
    icon: Waves,
    title: "Calm notifications",
    desc: "Messages arrive in three gentle batches instead of a steady drip all day.",
  },
  {
    icon: Moon,
    title: "Evening wind-down",
    desc: "A short end-of-day note captures what's done, so tomorrow starts clear.",
  },
  {
    icon: Leaf,
    title: "Team rhythm",
    desc: "See when your team is focused or free, without anyone tracking minutes.",
  },
];

const steps = [
  { n: "01", title: "Connect your calendar", desc: "Aura reads your week and finds the quiet gaps." },
  { n: "02", title: "Pick your rituals", desc: "Choose the habits you want. Start with one." },
  { n: "03", title: "Let it run", desc: "Aura adjusts each week as your schedule changes." },
];

const plans = [
  {
    name: "Solo",
    price: "0",
    note: "For one person finding their rhythm.",
    perks: ["Deep-work blocks", "Calm notifications", "Weekly reflection"],
    featured: false,
  },
  {
    name: "Studio",
    price: "9",
    note: "Per person, per month. For teams up to 50.",
    perks: ["Everything in Solo", "Team rhythm view", "Shared quiet hours", "Priority support"],
    featured: true,
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="sun h-7 w-7 rounded-full" aria-hidden />
          <span className="font-display text-2xl font-medium tracking-tight">aura</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button size="sm" className="rounded-full px-5">
            Try Aura free
          </Button>
        </nav>
        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border px-5 py-5 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <Button className="rounded-full">Try Aura free</Button>
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="top" className="relative overflow-hidden">
    <div className="grain pointer-events-none absolute inset-0" aria-hidden />
    <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.2fr_1fr] md:pt-24">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 text-primary" /> New: shared quiet hours for teams
        </p>
        <h1 className="font-display text-5xl font-light leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Work with the
          <em className="block font-medium italic text-primary">calm of a sunrise.</em>
        </h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Aura shapes your week around focus, not noise. Fewer pings, protected deep work, and a team that
          finally has room to think.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button size="lg" className="rounded-full px-7">
            Start your first ritual <ArrowUpRight className="ml-1 h-4 w-4" />
          </Button>
          <a href="#how" className="text-sm font-medium underline decoration-primary/40 underline-offset-4">
            See how it works
          </a>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="sun absolute inset-[12%] rounded-full shadow-[0_40px_120px_-30px_hsl(14_72%_48%/0.6)]" />
        <div className="absolute inset-x-0 bottom-[18%] h-px bg-foreground/20" />
        <div className="absolute bottom-[6%] left-[4%] w-56 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Today</p>
          <p className="mt-1 font-display text-2xl">2h 40m focused</p>
          <div className="mt-3 h-2 rounded-full bg-muted">
            <div className="h-2 w-3/4 rounded-full bg-accent" />
          </div>
        </div>
        <div className="absolute right-[2%] top-[8%] rounded-full border border-border bg-card px-4 py-2 text-sm shadow-lg">
          🔕 14 pings held
        </div>
      </div>
    </div>
  </section>
);

const Teams = () => (
  <section className="border-y border-border bg-secondary/60 py-6" aria-label="Teams using Aura">
    <div className="overflow-hidden">
      <div className="marquee flex w-max gap-14 pr-14">
        {[...teams, ...teams].map((t, i) => (
          <span key={i} className="font-display text-xl italic text-muted-foreground">
            {t}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const Rituals = () => (
  <section id="rituals" className="mx-auto max-w-6xl px-5 py-24">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Rituals</p>
      <h2 className="mt-3 font-display text-4xl font-light leading-tight sm:text-5xl">
        Small habits that give your days back.
      </h2>
    </div>
    <div className="mt-14 grid gap-5 sm:grid-cols-2">
      {rituals.map(({ icon: Icon, title, desc }) => (
        <article
          key={title}
          className="group rounded-[var(--radius)] border border-border bg-card p-8 transition-shadow hover:shadow-lg"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="mt-6 font-display text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{desc}</p>
        </article>
      ))}
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="bg-foreground py-24 text-background">
    <div className="mx-auto max-w-6xl px-5">
      <h2 className="max-w-xl font-display text-4xl font-light leading-tight sm:text-5xl">
        Three steps. <em className="italic text-primary">No new habits to remember.</em>
      </h2>
      <ol className="mt-14 grid gap-10 md:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="border-t border-background/20 pt-6">
            <span className="font-display text-5xl font-light text-primary">{s.n}</span>
            <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-background/70">{s.desc}</p>
          </li>
        ))}
      </ol>
      <figure className="mt-20 max-w-3xl">
        <blockquote className="font-display text-2xl font-light leading-snug sm:text-3xl">
          “We cut meeting hours by a third in the first month, and nobody had to change how they work.”
        </blockquote>
        <figcaption className="mt-5 text-sm text-background/60">Priya N., Head of Design at Halcyon</figcaption>
      </figure>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
    <div className="text-center">
      <h2 className="font-display text-4xl font-light sm:text-5xl">Simple, honest pricing.</h2>
      <p className="mt-3 text-muted-foreground">Free for one. Fair for teams.</p>
    </div>
    <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`rounded-[var(--radius)] border p-8 ${
            p.featured ? "border-primary bg-card shadow-xl" : "border-border bg-secondary/50"
          }`}
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display text-2xl">{p.name}</h3>
            {p.featured && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most loved
              </span>
            )}
          </div>
          <p className="mt-6 font-display text-5xl font-light">
            ${p.price}
            <span className="text-base text-muted-foreground">/mo</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
          <ul className="mt-8 space-y-3">
            {p.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-accent" /> {perk}
              </li>
            ))}
          </ul>
          <Button variant={p.featured ? "default" : "outline"} className="mt-8 w-full rounded-full">
            {p.featured ? "Start a 14-day trial" : "Get started"}
          </Button>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-[var(--radius)] bg-primary px-8 py-14 text-center text-primary-foreground">
        <h2 className="font-display text-3xl font-light sm:text-4xl">Give your team a quieter week.</h2>
        <Button size="lg" variant="secondary" className="mt-8 rounded-full px-8">
          Try Aura free
        </Button>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <span className="flex items-center gap-2">
          <span className="sun h-4 w-4 rounded-full" aria-hidden /> © {new Date().getFullYear()} Aura Studio
        </span>
        <span>QA branch: aura-landing-changes · remake v2</span>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main>
      <Hero />
      <Teams />
      <Rituals />
      <HowItWorks />
      <Pricing />
    </main>
    <Footer />
  </div>
);

export default Index;
