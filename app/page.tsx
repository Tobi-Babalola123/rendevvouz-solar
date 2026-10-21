"use client";

import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Star,
  Sun,
  Wrench,
  X,
  Zap,
} from "lucide-react";

/* ---------- Content ---------- */

const PHONE = "+234 (0) 123 456 7890";
const PHONE_HREF = "tel:+2341234567890";
const EMAIL = "info@rendezvous-solar.com";

const NAV = [
  ["Home", "home"],
  ["Services", "services"],
  ["Projects", "projects"],
  ["Testimonials", "testimonials"],
  ["Contact", "quote"],
] as const;

const STATS = [
  ["100+", "Projects completed"],
  ["7+", "Years experience"],
  ["95%", "Customer satisfaction"],
];

const WHY = [
  {
    icon: Shield,
    title: "Certified experts",
    desc: "Highly trained and certified solar professionals.",
  },
  {
    icon: Zap,
    title: "Quality equipment",
    desc: "Premium solar panels and equipment suppliers.",
  },
  {
    icon: Clock,
    title: "Warranty protection",
    desc: "10-year warranty on all installations.",
  },
  {
    icon: Phone,
    title: "Ongoing support",
    desc: "24/7 customer support and maintenance.",
  },
];

const SERVICES = [
  {
    icon: Sun,
    title: "Solar panel installation",
    desc: "Professional installation of high-efficiency solar panels for your home or business.",
  },
  {
    icon: Zap,
    title: "Inverter installation",
    desc: "Advanced inverter systems to convert solar energy efficiently.",
  },
  {
    icon: BatteryCharging,
    title: "Battery storage solutions",
    desc: "Store energy for use during the night or on cloudy days.",
  },
  {
    icon: Building2,
    title: "Commercial solar systems",
    desc: "Large-scale solar solutions for businesses and industrial facilities.",
  },
  {
    icon: ClipboardCheck,
    title: "Energy audits",
    desc: "Comprehensive assessment of your energy needs and usage.",
  },
  {
    icon: Wrench,
    title: "Solar maintenance",
    desc: "Regular maintenance and support for optimal performance.",
  },
];

const PROJECTS = [
  {
    title: "Residential Solar Installation",
    location: "Lekki, Lagos",
    capacity: "5kW system",
    img: "/project-lekki.png",
  },
  {
    title: "Commercial Solar Installation",
    location: "Ikeja, Lagos",
    capacity: "25kW system",
    img: "/project-ikeja.png",
  },
  {
    title: "School Solar Project",
    location: "Ogun State",
    capacity: "15kW system",
    img: "/project-ogun.png",
  },
];

const STEPS = [
  { title: "Consultation", desc: "Discuss your energy needs and goals." },
  {
    title: "Site assessment",
    desc: "Professional evaluation of your property.",
  },
  { title: "Installation", desc: "Expert installation by a certified team." },
  { title: "Ongoing support", desc: "Continuous monitoring and maintenance." },
];

const TESTIMONIALS = [
  {
    name: "Chioma Adeyemi",
    location: "Lagos",
    text: "Rendezvous Solar transformed my home. My electricity bills have reduced by 80% and the installation was smooth and professional.",
  },
  {
    name: "Tunde Okonkwo",
    location: "Abuja",
    text: "Excellent service and quality installation. The team was professional, punctual, and the system works perfectly.",
  },
  {
    name: "Amara Nwosu",
    location: "Port Harcourt",
    text: "Best decision for my business. The commercial system installed by Rendezvous has been reliable and cost-effective.",
  },
  {
    name: "Seun Adebayo",
    location: "Lagos",
    text: "Outstanding customer service and technical expertise. They answered all my questions and provided great support.",
  },
  {
    name: "Ife Olayinka",
    location: "Ibadan",
    text: "Professional team, quality products, and excellent warranty support. Highly recommended for solar installations.",
  },
  {
    name: "Kunle Ademiluyi",
    location: "Lagos",
    text: "Rendezvous Solar provided complete transparency in pricing and excellent after-sales support. Very satisfied.",
  },
];

const AREAS = ["Lagos", "Ogun", "Ibadan", "Abuja", "Port Harcourt"];

/* ---------- Shared styles and helpers ---------- */

const WRAP = "mx-auto w-full max-w-7xl px-5 sm:px-8";
const SECTION = "relative scroll-mt-16 py-20 sm:py-28";
const H2 =
  "m-0 mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl";
const INPUT =
  "mt-2 block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-base text-white placeholder:text-slate-400 transition-colors hover:border-white/30 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/30";

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`m-0 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
        dark ? "text-amber-300" : "text-slate-500"
      }`}
    >
      <span aria-hidden="true" className="h-px w-9 bg-amber-400" />
      {children}
    </p>
  );
}

// Fades content up once it scrolls into view; no extra dependencies.
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        on ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const year = new Date().getFullYear();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className={`${WRAP} flex h-16 items-center justify-between`}>
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white no-underline"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-amber-400 text-slate-950">
              <Zap size={18} aria-hidden="true" />
            </span>
            <span className="font-semibold tracking-tight">
              Rendezvous Solar
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {NAV.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-slate-300 no-underline transition-colors hover:text-amber-300"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#quote"
            className="hidden items-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 no-underline transition-colors hover:bg-amber-300 md:inline-flex"
          >
            Get free quote
          </a>

          <button
            type="button"
            className="-mr-2 p-2 text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="border-t border-white/10 bg-slate-950 md:hidden"
          >
            <nav className={`${WRAP} grid gap-1 py-4`} aria-label="Mobile">
              {NAV.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-slate-200 no-underline hover:bg-white/5"
                >
                  {label}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-amber-400 px-5 py-3.5 text-center text-sm font-bold text-slate-950 no-underline"
              >
                Get free quote
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative isolate overflow-hidden bg-slate-950 text-white"
        >
          <Image
            src="/hero-solar.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover object-[70%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.92)_30%,rgba(2,6,23,0.6)_62%,rgba(2,6,23,0.35)_100%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_90%_0%,rgba(251,191,36,0.22),transparent_70%)]"
          />

          <div className={`${WRAP} pb-20 pt-36 sm:pt-44 lg:pb-28`}>
            <Reveal className="max-w-3xl">
              <Eyebrow dark>Solar energy solutions</Eyebrow>
              <h1 className="m-0 mt-6 text-balance text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight">
                Power your home &amp; business with reliable solar energy.
              </h1>
              <p className="m-0 mt-7 max-w-xl text-lg leading-8 text-slate-300">
                Professional solar installations, inverter systems, battery
                storage and energy consulting, trusted by homes and businesses
                across Lagos and beyond.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#quote"
                  className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 no-underline shadow-[0_18px_40px_-16px_rgba(251,191,36,0.6)] transition-colors hover:bg-amber-300"
                >
                  Get free quote
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </a>
                <a
                  href="#projects"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-bold text-white no-underline backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  View projects
                </a>
              </div>

              <ul className="m-0 mt-12 flex max-w-2xl list-none flex-wrap gap-x-8 gap-y-3 border-t border-white/15 p-0 pt-6">
                {[
                  "Serving Nigeria since 2018",
                  "Certified installers",
                  "Residential & commercial projects",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2.5 text-sm font-medium text-slate-200"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      aria-hidden="true"
                      className="shrink-0 text-amber-400"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Stats strip */}
          <div className="border-t border-white/10 bg-slate-950/55 backdrop-blur-md">
            <ul
              className={`${WRAP} m-0 grid list-none grid-cols-3 divide-x divide-white/10 p-0`}
            >
              {STATS.map(([value, label]) => (
                <li
                  key={label}
                  className="px-3 py-7 text-center sm:px-8 sm:py-9"
                >
                  <p className="m-0 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {value}
                  </p>
                  <p className="m-0 mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why choose us */}
        <section
          className={`${SECTION} bg-white`}
          aria-labelledby="why-heading"
        >
          <div
            className={`${WRAP} grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}
          >
            <Reveal>
              <Eyebrow>Why Rendezvous Solar</Eyebrow>
              <h2 id="why-heading" className={H2}>
                Solar done properly, from first call to final check.
              </h2>
            </Reveal>
            <Reveal>
              <ul className="m-0 grid list-none gap-x-12 gap-y-10 p-0 sm:grid-cols-2">
                {WHY.map(({ icon: Icon, title, desc }) => (
                  <li
                    key={title}
                    className="relative border-t border-slate-200 pt-7 before:absolute before:left-0 before:top-[-1px] before:h-px before:w-10 before:bg-amber-400 before:content-['']"
                  >
                    <span
                      aria-hidden="true"
                      className="grid size-12 place-items-center rounded-full border border-slate-200 bg-slate-50 text-amber-600"
                    >
                      <Icon size={22} strokeWidth={1.7} />
                    </span>
                    <h3 className="m-0 mt-5 text-lg font-semibold tracking-tight">
                      {title}
                    </h3>
                    <p className="m-0 mt-2 max-w-sm text-base leading-7 text-slate-600">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className={`${SECTION} bg-slate-50`}
          aria-labelledby="services-heading"
        >
          <div className={WRAP}>
            <Reveal className="max-w-3xl">
              <Eyebrow>What we do</Eyebrow>
              <h2 id="services-heading" className={H2}>
                Our services
              </h2>
            </Reveal>
            <Reveal>
              <ul className="m-0 mt-12 grid list-none gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 p-0 md:grid-cols-2 lg:grid-cols-3">
                {SERVICES.map(({ icon: Icon, title, desc }) => (
                  <li
                    key={title}
                    className="group relative bg-white p-7 transition-colors hover:bg-slate-950 sm:p-9"
                  >
                    <div className="flex items-start justify-between">
                      <span
                        aria-hidden="true"
                        className="grid size-12 place-items-center rounded-full bg-amber-100 text-amber-700 transition-colors group-hover:bg-amber-400 group-hover:text-slate-950"
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="text-slate-400 transition-colors group-hover:text-amber-300"
                      />
                    </div>
                    <h3 className="m-0 mt-7 text-xl font-semibold tracking-tight">
                      <a
                        href="#quote"
                        className="text-slate-950 no-underline after:absolute after:inset-0 after:content-[''] group-hover:text-white"
                      >
                        {title}
                        <span className="sr-only">: request a quote</span>
                      </a>
                    </h3>
                    <p className="m-0 mt-3 text-base leading-7 text-slate-600 transition-colors group-hover:text-slate-300">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className={`${SECTION} bg-white`}
          aria-labelledby="projects-heading"
        >
          <div className={WRAP}>
            <Reveal className="max-w-3xl">
              <Eyebrow>Our work</Eyebrow>
              <h2 id="projects-heading" className={H2}>
                Featured projects
              </h2>
            </Reveal>
            <Reveal>
              <ul className="m-0 mt-12 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p) => (
                  <li
                    key={p.title}
                    className="group relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-slate-950 shadow-[0_24px_50px_-30px_rgba(2,6,23,0.6)]"
                  >
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.92),rgba(2,6,23,0.15)_55%,transparent)]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/15"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <span
                        aria-hidden="true"
                        className="mb-4 block h-px w-10 bg-amber-400 transition-all duration-500 group-hover:w-16"
                      />
                      <h3 className="m-0 text-xl font-semibold tracking-tight text-white">
                        {p.title}
                      </h3>
                      <p className="m-0 mt-4 flex flex-wrap gap-2 text-xs font-semibold text-white">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                          <MapPin
                            size={13}
                            aria-hidden="true"
                            className="text-amber-300"
                          />
                          {p.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                          <Zap
                            size={13}
                            aria-hidden="true"
                            className="text-amber-300"
                          />
                          {p.capacity}
                        </span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section
          className={`${SECTION} overflow-hidden bg-slate-950 text-white`}
          aria-labelledby="how-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(45%_55%_at_100%_0%,rgba(251,191,36,0.14),transparent_70%)]"
          />
          <div className={`${WRAP} relative`}>
            <Reveal className="max-w-3xl">
              <Eyebrow dark>The process</Eyebrow>
              <h2 id="how-heading" className={H2}>
                How it works
              </h2>
            </Reveal>
            <Reveal>
              <ol className="m-0 mt-14 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {STEPS.map((s, i) => (
                  <li
                    key={s.title}
                    className="relative border-t border-white/15 pt-7 before:absolute before:left-0 before:top-[-1px] before:h-px before:w-10 before:bg-amber-400 before:content-['']"
                  >
                    <span
                      aria-hidden="true"
                      className="block text-5xl font-semibold leading-none tracking-tight text-amber-400"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="m-0 mt-6 text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="m-0 mt-2 max-w-xs text-base leading-7 text-slate-300">
                      {s.desc}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className={`${SECTION} bg-slate-50`}
          aria-labelledby="testimonials-heading"
        >
          <div className={WRAP}>
            <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <Eyebrow>Customer stories</Eyebrow>
                <h2 id="testimonials-heading" className={H2}>
                  What our customers say
                </h2>
              </div>
              <div className="flex items-center gap-5 border-t border-slate-200 pt-6 lg:border-t-0 lg:pt-0">
                <p className="m-0 text-5xl font-semibold tracking-tight">
                  4.9<span className="text-2xl text-slate-400">/5</span>
                </p>
                <div>
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="m-0 mt-1 text-sm text-slate-600">
                    Based on 100+ customer reviews
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <ul className="m-0 mt-12 grid list-none gap-5 p-0 md:grid-cols-2 lg:grid-cols-3">
                {TESTIMONIALS.map((t) => (
                  <li
                    key={t.name}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7"
                  >
                    <div
                      className="flex gap-0.5"
                      role="img"
                      aria-label="5 out of 5 stars"
                    >
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <blockquote className="m-0 mt-5 flex-1 text-base leading-7 text-slate-700">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <div className="mt-7 flex items-center gap-3 border-t border-slate-100 pt-5">
                      <span
                        aria-hidden="true"
                        className="grid size-10 place-items-center rounded-full bg-slate-950 text-xs font-bold text-amber-300"
                      >
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="m-0 text-sm font-semibold">{t.name}</p>
                        <p className="m-0 text-sm text-slate-500">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Quote form */}
        <section
          id="quote"
          className={`${SECTION} overflow-hidden bg-slate-950 text-white`}
          aria-labelledby="quote-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(45%_50%_at_0%_100%,rgba(251,191,36,0.16),transparent_70%)]"
          />
          <div
            className={`${WRAP} relative grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20`}
          >
            <Reveal>
              <Eyebrow dark>Free assessment</Eyebrow>
              <h2 id="quote-heading" className={H2}>
                Get my free solar assessment.
              </h2>
              <p className="m-0 mt-6 max-w-md text-lg leading-8 text-slate-300">
                Tell us about your property and monthly electricity cost, and
                we&rsquo;ll help you work out the right system.
              </p>
              <div className="mt-10 grid gap-5 border-t border-white/10 pt-8">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 text-white no-underline hover:text-amber-300"
                >
                  <Phone
                    size={20}
                    aria-hidden="true"
                    className="text-amber-400"
                  />
                  <span className="text-lg font-medium">{PHONE}</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 text-white no-underline hover:text-amber-300"
                >
                  <Mail
                    size={20}
                    aria-hidden="true"
                    className="text-amber-400"
                  />
                  <span className="text-lg font-medium">{EMAIL}</span>
                </a>
              </div>
            </Reveal>

            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 backdrop-blur-sm sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-24 bg-amber-400"
                />
                <div className="grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      name: "name",
                      label: "Full name",
                      type: "text",
                      auto: "name",
                    },
                    {
                      name: "email",
                      label: "Email address",
                      type: "email",
                      auto: "email",
                    },
                    {
                      name: "phone",
                      label: "Phone number",
                      type: "tel",
                      auto: "tel",
                    },
                    {
                      name: "location",
                      label: "Location",
                      type: "text",
                      auto: "address-level2",
                    },
                  ].map((f) => (
                    <label
                      key={f.name}
                      className="block text-sm font-semibold text-slate-200"
                    >
                      {f.label}
                      <input
                        className={INPUT}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.auto}
                        required
                      />
                    </label>
                  ))}

                  <label className="block text-sm font-semibold text-slate-200">
                    Property type
                    <span className="relative mt-2 block">
                      <select
                        name="propertyType"
                        required
                        defaultValue=""
                        className={`${INPUT} mt-0 appearance-none pr-11 invalid:text-slate-400 [&_option]:bg-white [&_option]:text-slate-950`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                      </select>
                      <ChevronDown
                        size={18}
                        aria-hidden="true"
                        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-300"
                      />
                    </span>
                  </label>

                  <label className="block text-sm font-semibold text-slate-200">
                    Monthly electricity cost (₦)
                    <input
                      className={INPUT}
                      name="monthlyCost"
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 150,000"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_40px_-16px_rgba(251,191,36,0.6)] transition-colors hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
                >
                  Get my free solar assessment
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </button>

                {sent && (
                  <p
                    role="status"
                    className="m-0 mt-5 rounded-xl border border-amber-400/30 bg-amber-400/10 p-4 text-sm leading-6 text-white"
                  >
                    Your details are complete, but this preview form does not
                    send data yet. Please call{" "}
                    <a
                      href={PHONE_HREF}
                      className="font-bold text-amber-300 underline underline-offset-2"
                    >
                      {PHONE}
                    </a>{" "}
                    to continue your request.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </section>

        {/* Service areas */}
        <section
          className={`${SECTION} bg-white`}
          aria-labelledby="areas-heading"
        >
          <div
            className={`${WRAP} grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20`}
          >
            <Reveal>
              <Eyebrow>Where we work</Eyebrow>
              <h2 id="areas-heading" className={H2}>
                Service areas
              </h2>
            </Reveal>
            <Reveal>
              <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                {AREAS.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50 px-6 py-3.5 text-base font-semibold"
                  >
                    <MapPin
                      size={17}
                      aria-hidden="true"
                      className="text-amber-600"
                    />
                    {area}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Final CTA */}
        <section
          className="relative isolate overflow-hidden bg-amber-400 py-20 text-slate-950 sm:py-24"
          aria-labelledby="cta-heading"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(60%_90%_at_10%_0%,rgba(255,255,255,0.4),transparent_60%)]"
          />
          <Zap
            aria-hidden="true"
            strokeWidth={1}
            className="pointer-events-none absolute -right-6 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rotate-12 text-slate-950/10"
          />
          <div
            className={`${WRAP} flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between`}
          >
            <Reveal className="max-w-3xl">
              <h2
                id="cta-heading"
                className="m-0 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
              >
                Ready to reduce your electricity bills?
              </h2>
              <p className="m-0 mt-6 max-w-xl text-lg leading-8 text-slate-900/80">
                Join homes and businesses that have switched to solar and cut
                their electricity costs.
              </p>
            </Reveal>
            <Reveal className="shrink-0">
              <a
                href="#quote"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-slate-950 px-9 py-4 text-sm font-bold text-white no-underline shadow-[0_18px_40px_-18px_rgba(2,6,23,0.7)] transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-400"
              >
                Request a free quote
                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300">
        <div
          className={`${WRAP} grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_0.8fr]`}
        >
          <div>
            <a
              href="#home"
              className="flex items-center gap-2.5 text-white no-underline"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-amber-400 text-slate-950">
                <Zap size={18} aria-hidden="true" />
              </span>
              <span className="font-semibold tracking-tight">
                Rendezvous Solar
              </span>
            </a>
            <p className="m-0 mt-6 max-w-xs text-sm leading-7 text-slate-400">
              Professional solar energy solutions for Nigeria.
            </p>
          </div>

          <div>
            <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Quick links
            </h2>
            <ul className="m-0 mt-5 grid list-none gap-1 p-0 text-sm">
              {NAV.slice(0, 4).map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-block py-1.5 font-medium text-slate-200 no-underline transition-colors hover:text-amber-300"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </h2>
            <ul className="m-0 mt-5 grid list-none gap-3 p-0 text-sm">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-3 text-slate-200 no-underline hover:text-amber-300"
                >
                  <Phone
                    size={16}
                    aria-hidden="true"
                    className="text-amber-400"
                  />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-slate-200 no-underline hover:text-amber-300"
                >
                  <Mail
                    size={16}
                    aria-hidden="true"
                    className="text-amber-400"
                  />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Follow us
            </h2>
            <ul className="m-0 mt-5 flex list-none gap-3 p-0">
              {[
                ["Facebook", FaFacebookF],
                ["Twitter", FaTwitter],
                ["LinkedIn", FaLinkedinIn],
                ["Instagram", FaInstagram],
              ].map(([label, Icon]) => {
                const I = Icon as typeof FaFacebookF;
                return (
                  <li key={label as string}>
                    <a
                      href="#"
                      aria-label={label as string}
                      className="grid size-10 place-items-center rounded-full border border-white/20 text-slate-200 transition-colors hover:border-amber-400 hover:bg-amber-400 hover:text-slate-950"
                    >
                      <I size={14} aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div
            className={`${WRAP} flex flex-col gap-3 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between`}
          >
            <p className="m-0">
              &copy; {year} Rendezvous Solar. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-slate-400 no-underline hover:text-amber-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-400 no-underline hover:text-amber-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
