"use client";

import { useState } from "react";
import {
  Menu,
  X,
  User,
  ArrowRight,
  ShieldCheck,
  Target,
  Award,
  Lightbulb,
  Handshake,
  Package,
  Users,
  Clock,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

const FONT_DISPLAY = "'Big Shoulders Display', sans-serif";
const FONT_SANS = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.5 8.75h3.9V21H3.5V8.75zM10 8.75h3.74v1.68h.05c.52-.94 1.8-1.93 3.7-1.93 3.96 0 4.69 2.53 4.69 5.82V21h-3.9v-5.85c0-1.4-.03-3.19-1.95-3.19-1.96 0-2.26 1.5-2.26 3.09V21H10V8.75z" />
    </svg>
  );
}

const values = [
  { icon: ShieldCheck, title: "Trust", text: "Every supplier and professional on COV.GH is verified before they can list a product or service." },
  { icon: Target, title: "Transparency", text: "Clear pricing, honest reviews, and no hidden fees between buyers and suppliers." },
  { icon: Lightbulb, title: "Innovation", text: "We keep building simpler ways for Ghanaians to find and book what they actually need." },
  { icon: Handshake, title: "Community", text: "Growing local businesses by connecting them directly with the customers looking for them." },
];

const stats = [
  { number: "500+", label: "Verified Suppliers", icon: ShieldCheck },
  { number: "1,000+", label: "Products Listed", icon: Package },
  { number: "50+", label: "Professional Partners", icon: Users },
  { number: "24/7", label: "Platform Support", icon: Clock },
];

const team = [
  { name: "Team Member", role: "Founder & CEO" },
  { name: "Team Member", role: "Head of Operations" },
  { name: "Team Member", role: "Head of Partnerships" },
  { name: "Team Member", role: "Lead Engineer" },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-[#F6F4EE] text-[#0E2233]" style={{ fontFamily: FONT_SANS }}>

        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E2233]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-[76px]">
            <div className="flex items-baseline gap-2.5">
              <a href="/" style={{ fontFamily: FONT_DISPLAY }} className="text-2xl font-bold text-[#F6F4EE]">
                COV<span className="text-[#A2793D]">.GH</span>
              </a>
              <span style={{ fontFamily: FONT_MONO }} className="border-l border-white/25 pl-2.5 text-[10.5px] tracking-wide text-[#A2793D]">
                GHANA
              </span>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              <a href="/#home" className="text-[15px] text-white/80 hover:text-white transition">Home</a>
              <a href="/#categories" className="text-[15px] text-white/80 hover:text-white transition">Categories</a>
              <a href="/about" className="text-[15px] text-white transition">About Us</a>
              <a href="/#contact" className="text-[15px] text-white/80 hover:text-white transition">Contact</a>
            </nav>

            <div className="hidden items-center gap-3.5 md:flex">
              <a href="/login" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <User size={17} />
                Login
              </a>
              <a
                href="/login?mode=signup"
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
              >
                Sign Up
              </a>
              <a
                href="/#home"
                className="rounded-full bg-[#A2793D] px-5 py-2.5 text-sm font-semibold text-[#0E2233] hover:bg-[#8A6530] hover:text-white transition"
              >
                Book Consultation
              </a>
            </div>

            <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/10 bg-[#0E2233] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-4 text-white/85">
                <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="/#categories" onClick={() => setMenuOpen(false)}>Categories</a>
                <a href="/about" onClick={() => setMenuOpen(false)} className="text-white">About Us</a>
                <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                <hr className="border-white/10" />
                <a href="/login" onClick={() => setMenuOpen(false)} className="text-left font-medium">Login</a>
                <a
                  href="/login?mode=signup"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-white/40 py-3 text-center font-semibold"
                >
                  Sign Up
                </a>
              </div>
            </div>
          )}
        </header>

        {/* ================= HERO ================= */}
        <section className="border-b border-[#C9C3B4]">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 lg:pt-24 lg:pb-20">
            <span style={{ fontFamily: FONT_MONO }} className="mb-5 block text-[12.5px] tracking-wide text-[#0F565C]">
              ABOUT COV.GH
            </span>
            <h1
              style={{ fontFamily: FONT_DISPLAY }}
              className="max-w-[18ch] text-[42px] font-bold leading-[0.98] text-[#0E2233] md:text-[58px]"
            >
              Connecting Ghana to the suppliers and professionals it can trust.
            </h1>
            <p className="mt-6 max-w-[58ch] text-lg text-[#46545F]">
              COV.GH is a marketplace built for Ghana — a single place where
              individuals, businesses and organizations can find verified
              medical equipment, energy solutions, healthcare services and
              professional suppliers, without guesswork.
            </p>
          </div>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-2 items-start">
            <div>
              <span style={{ fontFamily: FONT_MONO }} className="mb-3 block text-[12.5px] text-[#8A6530]">
                OUR STORY
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold leading-tight md:text-[40px]">
                Built because finding a trusted supplier shouldn't be this hard.
              </h2>
              <p className="mt-6 text-[#46545F]">
                Too many people across Ghana were relying on word-of-mouth,
                unverified listings, or slow referral chains just to find
                reliable medical equipment, energy solutions or a qualified
                professional. COV.GH started as an answer to that: a single
                platform where every supplier is checked before they can
                list, and every buyer can book a consultation directly.
              </p>
              <p className="mt-4 text-[#46545F]">
                Today, that means hospitals, clinics, businesses and
                individuals across all of Ghana's regions can search,
                compare and book with confidence — while suppliers get
                access to customers actively looking for what they offer.
              </p>
            </div>

            <div className="border border-[#C9C3B4] bg-white rounded-2xl overflow-hidden">
              <div className="bg-[#0E2233] px-6 py-3.5" style={{ fontFamily: FONT_DISPLAY }}>
                <span className="text-lg text-[#F6F4EE]">Our mission</span>
              </div>
              <div className="p-8">
                <Target size={36} className="text-[#A2793D]" />
                <p className="mt-6 text-[#46545F]">
                  To connect individuals, businesses and organizations
                  across Ghana with verified suppliers, quality products and
                  professional services — making trusted commerce simple,
                  transparent and accessible to everyone.
                </p>
                <a href="/#vision" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0F565C] hover:text-[#17747C]">
                  Read our full vision <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR VALUES ================= */}
        <section className="bg-[#EDE9DF] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
              <div>
                <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                  What we stand for
                </h2>
                <p className="mt-2 max-w-xl text-[#46545F]">
                  The principles behind every feature we build.
                </p>
              </div>
              <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
                SEC. 01 — VALUES
              </span>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="rounded-2xl border border-[#C9C3B4] bg-white p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FBF3E6] text-[#A2793D]">
                      <Icon size={22} />
                    </div>
                    <h3 style={{ fontFamily: FONT_DISPLAY }} className="mt-5 text-[20px] font-bold text-[#0E2233]">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] text-[#46545F]">{value.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= STATS — same bordered icon-card pattern as homepage ================= */}
        <div className="border-b border-[#C9C3B4] bg-[#0E2233]">
          <div className="mx-auto max-w-7xl px-6 py-5">
            <div className="grid grid-cols-2 divide-x divide-white/15 overflow-hidden rounded-2xl border border-white/15 md:grid-cols-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex flex-col items-center gap-1.5 px-4 py-4 text-center">
                    <Icon size={18} className="text-[#A2793D]" />
                    <div style={{ fontFamily: FONT_DISPLAY }} className="text-[20px] font-bold text-white">
                      {stat.number}
                    </div>
                    <span className="text-[11.5px] text-white/60">{stat.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= TEAM ================= */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
              <div>
                <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                  The team
                </h2>
                <p className="mt-2 max-w-xl text-[#46545F]">
                  The people behind COV.GH.
                </p>
              </div>
              <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
                SEC. 02 — TEAM
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name + member.role} className="rounded-2xl border border-[#C9C3B4] bg-white overflow-hidden">
                  <div className="aspect-square bg-[#F6F4EE] flex items-center justify-center text-[12px] text-[#7C8B92]">
                    [ team photo ]
                  </div>
                  <div className="p-5">
                    <h3 style={{ fontFamily: FONT_DISPLAY }} className="text-[18px] font-bold text-[#0E2233]">
                      {member.name}
                    </h3>
                    <p className="text-[13.5px] text-[#7C8B92]">{member.role}</p>
                    <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0F565C] hover:text-[#17747C]">
                      <LinkedinIcon size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="border-t-4 border-[#A2793D] bg-[#0E2233] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <CalendarDays size={38} className="mx-auto text-[#A2793D]" />
            <h2 style={{ fontFamily: FONT_DISPLAY }} className="mt-5 text-[32px] font-bold text-[#F6F4EE] md:text-[42px]">
              Want to work with us?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/65">
              Whether you're looking for a supplier or want to list your
              business on COV.GH, we're ready to talk.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a href="/#home" className="rounded-full bg-[#A2793D] px-7 py-3.5 font-semibold text-white hover:bg-[#8A6530] transition">
                Book Consultation
              </a>
              <a href="/login?mode=signup" className="rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                Become a Supplier
              </a>
            </div>
          </div>
        </section>

        {/* ================= FOOTER — same 4-column pattern as homepage ================= */}
        <footer className="border-t-4 border-[#A2793D] bg-[#0E2233] pt-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
              <div>
                <span style={{ fontFamily: FONT_DISPLAY }} className="text-xl font-bold text-white">
                  COV<span className="text-[#A2793D]">.GH</span>
                </span>
                <p className="mt-1 text-[13px] text-white/50">Connecting Opportunities. Building Possibilities.</p>
                <div className="mt-6 space-y-3 text-[14px] text-white/70">
                  <a href="tel:+233000000000" className="flex items-center gap-2.5 hover:text-white">
                    <Phone size={15} className="text-[#A2793D]" /> +233 00 000 0000
                  </a>
                  <a href="mailto:info@covgh.com" className="flex items-center gap-2.5 hover:text-white">
                    <Mail size={15} className="text-[#A2793D]" /> info@covgh.com
                  </a>
                  <span className="flex items-center gap-2.5">
                    <MapPin size={15} className="text-[#A2793D]" /> Accra, Ghana
                  </span>
                </div>
              </div>

              <div>
                <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">CATEGORIES</span>
                <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                  <a href="/#categories" className="hover:text-white">Medical Equipment</a>
                  <a href="/#categories" className="hover:text-white">Energy Solutions</a>
                  <a href="/#categories" className="hover:text-white">Healthcare Services</a>
                  <a href="/#categories" className="hover:text-white">Industrial Equipment</a>
                </div>
              </div>

              <div>
                <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">COMPANY</span>
                <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                  <a href="/about" className="hover:text-white">About Us</a>
                  <a href="/#contact" className="hover:text-white">Contact</a>
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
              </div>

              <div>
                <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">ACCOUNT</span>
                <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                  <a href="/login" className="hover:text-white">Sign In</a>
                  <a href="/login?mode=signup" className="hover:text-white">Create Account</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center">
              <span>© 2026 COV.GH. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Terms</a>
                <a href="/#contact" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}