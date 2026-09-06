"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  MapPin,
  ChevronDown,
  ArrowRight,
  Stethoscope,
  Zap,
  Building2,
  HeartPulse,
  ShieldCheck,
  Truck,
  User,
  CalendarDays,
  Package,
  CheckCircle2,
} from "lucide-react";

// Loaded via plain <link> below instead of next/font/google — Next 16's
// Turbopack font resolver threw "Unknown font" for this combination, and a
// stylesheet link sidesteps that entirely.
const FONT_DISPLAY = "'Big Shoulders Display', sans-serif";
const FONT_SANS = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

// TODO — still unconfirmed from earlier review, carried forward:
// 1) Tagline says "Connecting Opportunities" — approved brand name is
//    "Chances and Opportunities Ventures." Pick one and make it consistent.
// 2) Page is framed as a multi-vendor marketplace ("Verified Suppliers").
//    Confirm this matches the actual business model before building
//    booking/accounts on top of it.

const categories = [
  { title: "Medical Equipment", description: "Find medical devices, hospital equipment and healthcare supplies.", icon: Stethoscope },
  { title: "Energy Solutions", description: "Explore solar systems, renewable energy and power solutions.", icon: Zap },
  { title: "Healthcare Services", description: "Connect with healthcare providers and professional medical services.", icon: HeartPulse },
  { title: "Industrial Equipment", description: "Discover professional equipment for businesses and industries.", icon: Building2 },
];

const stats = [
  { number: "500+", label: "Verified Suppliers" },
  { number: "1,000+", label: "Products Listed" },
  { number: "50+", label: "Professional Partners" },
  { number: "24/7", label: "Platform Support" },
];

const products = [
  { name: "Digital X-Ray Machine", description: "High-resolution imaging for diagnostic radiology.", price: "45,000" },
  { name: "5kVA Solar Inverter", description: "Reliable backup power for clinics and small facilities.", price: "8,200" },
  { name: "Patient Monitor — 5 Parameter", description: "ECG, SpO2, NIBP, temperature and respiration.", price: "6,500" },
  { name: "Industrial Air Compressor", description: "Heavy-duty compressor for workshop and site use.", price: "12,300" },
  { name: "Hospital Bed — Electric", description: "Three-function electric adjustable hospital bed.", price: "15,750" },
  { name: "Diesel Generator — 20kVA", description: "Dependable standby power for medium facilities.", price: "38,000" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen bg-[#F6F4EE] text-[#0E2233]" style={{ fontFamily: FONT_SANS }}>

      {/* ================= HEADER — navy, per the signed-off demo ================= */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0E2233]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-[76px]">

          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 flex-none overflow-hidden rounded-full border border-white/15">
              <Image
                src="/images/logos/cov-logo.jpeg"
                alt="COV Ghana Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-baseline gap-2.5">
              <span style={{ fontFamily: FONT_DISPLAY }} className="text-2xl font-bold text-[#F6F4EE]">
                COV<span className="text-[#A2793D]">.GH</span>
              </span>
              <span
                style={{ fontFamily: FONT_MONO }}
                className="border-l border-white/25 pl-2.5 text-[10.5px] tracking-wide text-[#A2793D]"
              >
                GHANA
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {["Home", "Categories", "About Us", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                className="text-[15px] text-white/80 hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3.5 md:flex">
            <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <User size={17} />
              Login
            </button>
            <button className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10">
              Sign Up
            </button>
            <button className="rounded-full bg-[#A2793D] px-5 py-2.5 text-sm font-semibold text-[#0E2233] hover:bg-[#8A6530] hover:text-white transition">
              Book Consultation
            </button>
          </div>

          <button className="text-white md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0E2233] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-4 text-white/85">
              <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
              <hr className="border-white/10" />
              <button className="text-left font-medium">Login</button>
              <button className="rounded-full border border-white/40 py-3 font-semibold">Sign Up</button>
              <button className="rounded-full bg-[#A2793D] py-3 font-semibold text-[#0E2233]">Book Consultation</button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO — light paper background, spec-sheet layout ================= */}
      <section id="home" className="relative overflow-hidden border-b border-[#C9C3B4]">

        {/* Background equipment photo — right side, faded into the paper background on the left */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <Image
            src="/images/hero-equipment.png"
            alt=""
            fill
            className="object-contain object-right"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, #F6F4EE 0%, #F6F4EE 42%, rgba(246,244,238,0.55) 58%, rgba(246,244,238,0) 72%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 lg:pt-24 lg:pb-20">

          <span style={{ fontFamily: FONT_MONO }} className="mb-5 block text-[12.5px] tracking-wide text-[#0F565C]">
            GHANA · VERIFIED SUPPLIERS · PROFESSIONAL SERVICES
          </span>

          <h1
            style={{ fontFamily: FONT_DISPLAY }}
            className="max-w-[16ch] text-[42px] font-bold leading-[0.98] text-[#0E2233] md:text-[64px] lg:max-w-[12ch]"
          >
            Connecting you to the right products &amp; professionals.
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg text-[#46545F]">
            Discover verified medical equipment, energy solutions,
            healthcare services and professional suppliers — all in one
            trusted platform.
          </p>

          {/* Search — pill-shaped bar */}
          <div className="mt-10 max-w-[720px] overflow-hidden rounded-full border border-[#8C9199] bg-white">
            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-1 items-center gap-3 border-b border-[#C9C3B4] px-6 py-4 lg:border-b-0 lg:border-r">
                <Search className="text-[#7C8B92]" size={20} />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent outline-none"
                />
              </div>
              <div className="flex items-center gap-2 border-b border-[#C9C3B4] px-5 py-4 lg:border-b-0 lg:border-r">
                <Package size={18} className="text-[#7C8B92]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="min-w-[170px] bg-transparent outline-none"
                >
                  <option>All Categories</option>
                  <option>Medical Equipment</option>
                  <option>Energy Solutions</option>
                  <option>Healthcare Services</option>
                  <option>Industrial Equipment</option>
                </select>
                <ChevronDown size={16} className="text-[#7C8B92]" />
              </div>
              <div className="flex items-center gap-2 px-5 py-4">
                <MapPin size={18} className="text-[#7C8B92]" />
                <select className="bg-transparent outline-none">
                  <option>All Ghana</option>
                  <option>Accra</option>
                  <option>Kumasi</option>
                  <option>Tamale</option>
                  <option>Takoradi</option>
                </select>
              </div>
              <button className="bg-[#A2793D] px-8 py-4 font-semibold text-white transition hover:bg-[#8A6530]">
                Search
              </button>
            </div>
          </div>

          {/* Capability strip — numbered, hairline-connected, per the demo's diagram pattern */}
          <div className="mt-14 max-w-[720px] border-t border-[#C9C3B4] pt-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.title} className="flex items-start gap-3">
                    <span style={{ fontFamily: FONT_MONO }} className="mt-1 text-[13px] text-[#8A6530]">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FBF3E6] text-[#A2793D]">
                        <Icon size={18} />
                      </div>
                      <span className="text-[13.5px] font-semibold text-[#0E2233]">{cat.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP — navy, per the demo ================= */}
      <div className="bg-[#0E2233]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-6 py-7 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`px-6 ${i !== 0 ? "border-l border-white/15" : "pl-0"}`}>
              <div style={{ fontFamily: FONT_DISPLAY }} className="text-[28px] font-bold text-[#F6F4EE]">
                {stat.number}
              </div>
              <span className="text-[13px] text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= VISION & MISSION — split hero, per reference ================= */}
      <section id="vision" className="border-b border-[#C9C3B4]">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-6 py-20 lg:grid-cols-2 lg:gap-16">

          <div className="flex flex-col justify-center py-2">
            <span style={{ fontFamily: FONT_MONO }} className="mb-5 block text-[12.5px] tracking-wide text-[#0F565C]">
              OUR PURPOSE
            </span>

            <h2
              style={{ fontFamily: FONT_DISPLAY }}
              className="text-[36px] font-bold leading-[1.02] text-[#0E2233] md:text-[52px]"
            >
              Our vision for<br />
              <span className="text-[#A2793D]">Ghana's digital marketplace.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] text-[#46545F]">
              A Ghana where every business, big or small, and every skilled
              professional can be found, verified and trusted online —
              closing the distance between people who need products and
              services and the suppliers ready to deliver them.
            </p>

            <div className="mt-8 border-t border-[#C9C3B4] pt-8">
              <h3 style={{ fontFamily: FONT_DISPLAY }} className="text-[22px] font-bold text-[#0E2233]">
                Our Mission
              </h3>
              <p className="mt-3 max-w-[52ch] text-[#46545F]">
                To connect individuals, businesses and organizations across
                Ghana with verified suppliers, quality products and
                professional services — making trusted commerce simple,
                transparent and accessible to everyone.
              </p>
            </div>
          </div>

          <div className="relative mt-10 flex min-h-[360px] items-center justify-center rounded-2xl border border-[#C9C3B4] bg-[#F6F4EE] text-[13px] text-[#7C8B92] lg:mt-0 lg:min-h-0">
            [ team / community photo ]
          </div>

        </div>
      </section>

      {/* ================= CATEGORIES — spec-sheet rows, not cards ================= */}
      <section id="categories" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-4 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
            <div>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                What you can find here
              </h2>
              <p className="mt-2 max-w-xl text-[#46545F]">
                Reliable products, suppliers and professional services across multiple industries.
              </p>
            </div>
            <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
              SEC. 01 — CATEGORIES
            </span>
          </div>

          {categories.map((category, i) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="grid grid-cols-[60px_50px_1.1fr_1.6fr_auto] items-center gap-6 border-b border-[#C9C3B4] py-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FBF3E6] text-[#A2793D]">
                  <Icon size={20} />
                </div>
                <span style={{ fontFamily: FONT_MONO }} className="text-sm text-[#8A6530]">
                  0{i + 1}
                </span>
                <span style={{ fontFamily: FONT_DISPLAY }} className="text-[22px] font-bold text-[#0E2233]">
                  {category.title}
                </span>
                <p className="m-0 text-[14.5px] text-[#46545F]">{category.description}</p>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-[#0F565C] hover:text-[#17747C]">
                  Explore <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FEATURED PRODUCTS — sliding showcase ================= */}
      <section className="border-b border-[#C9C3B4] bg-white py-20">
        <style>{`
          @keyframes cov-slide {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .cov-marquee-track {
            animation: cov-slide 32s linear infinite;
          }
          .cov-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
            <div>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                Featured products
              </h2>
              <p className="mt-2 max-w-xl text-[#46545F]">
                A rolling look at equipment currently listed by verified suppliers on COV.GH.
              </p>
            </div>
            <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
              SEC. 02 — PRODUCTS
            </span>
          </div>
        </div>

        {/* Full-bleed sliding track — overflow hidden on the wrap, not the page */}
        <div className="overflow-hidden">
          <div className="cov-marquee-track flex w-max gap-6 px-6">
            {[...products, ...products].map((product, i) => (
              <div
                key={`${product.name}-${i}`}
                className="w-[280px] flex-none overflow-hidden rounded-2xl border border-[#C9C3B4] bg-white"
              >
                <div className="flex aspect-[4/3] items-center justify-center bg-[#F6F4EE] text-[12px] text-[#7C8B92]">
                  [ product photo ]
                </div>
                <div className="p-5">
                  <h3 style={{ fontFamily: FONT_DISPLAY }} className="text-[19px] font-bold text-[#0E2233]">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#46545F]">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#C9C3B4] pt-3.5">
                    <span style={{ fontFamily: FONT_MONO }} className="text-[15px] font-semibold text-[#8A6530]">
                      <span className="text-[11px] text-[#7C8B92]">GHS</span> {product.price}
                    </span>
                    <button className="flex items-center gap-1 text-[13px] font-semibold text-[#0F565C] hover:text-[#17747C]">
                      View <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY COV — process-style, per the demo ================= */}
      <section id="about" className="bg-[#EDE9DF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <span style={{ fontFamily: FONT_MONO }} className="mb-3 block text-[12.5px] text-[#8A6530]">
                WHY COV.GH
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[34px] font-bold leading-tight">
                A smarter way to discover trusted opportunities.
              </h2>
              <p className="mt-5 text-[#46545F]">
                COV.GH connects individuals, businesses and organizations
                with trusted suppliers, products and professional services
                across Ghana.
              </p>

              <div className="mt-8">
                {[
                  { icon: ShieldCheck, title: "Verified Providers", text: "We focus on connecting users with credible businesses and professionals." },
                  { icon: Truck, title: "Easy Access", text: "Search and discover products and services quickly." },
                  { icon: HeartPulse, title: "Professional Network", text: "Connect with industry experts and service providers." },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className={`flex gap-4 py-4 ${i !== 0 ? "border-t border-[#C9C3B4]" : ""}`}>
                      <Icon className="mt-1 text-[#0E2233]" size={20} />
                      <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="mt-1 text-sm text-[#46545F]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Title-block style consultation panel */}
            <div className="overflow-hidden rounded-2xl border border-[#8C9199] bg-white">
              <div style={{ fontFamily: FONT_DISPLAY }} className="bg-[#0E2233] px-6 py-3.5 text-lg text-[#F6F4EE]">
                Need professional guidance?
              </div>
              <div className="p-8">
                <CalendarDays size={40} className="text-[#A2793D]" />
                <p className="mt-6 text-[#46545F]">
                  Book a consultation and connect with qualified professionals
                  who can help you make informed decisions.
                </p>
                <button className="mt-6 flex items-center gap-2 rounded-full bg-[#A2793D] px-6 py-3.5 font-semibold text-white transition hover:bg-[#8A6530]">
                  Book Consultation
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA — navy band, per the demo ================= */}
      <section className="border-t-4 border-[#A2793D] bg-[#0E2233] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold text-[#F6F4EE] md:text-[46px]">
            Ready to explore opportunities?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Join COV.GH and discover products, services and professional opportunities across Ghana.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-[#A2793D] px-7 py-4 font-semibold text-white hover:bg-[#8A6530]">
              Get Started
            </button>
            <button className="rounded-full border border-white/30 px-7 py-4 font-semibold text-white hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER — navy, minimal, per the demo ================= */}
      <footer id="contact" className="bg-[#0E2233] py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 text-sm text-white/60 md:flex-row md:items-center">
          <span>© 2026 COV.GH. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Client log in</a>
            <a href="#" className="hover:text-white">Register</a>
            <a href="#" className="hover:text-white">Book a consultation</a>
          </div>
        </div>
      </footer>

      </main>
    </>
  );
}