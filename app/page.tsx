"use client";

import Image from "next/image";
import Link from "next/link";
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
  Play,
  Quote,
  Phone,
  Mail,
  ExternalLink,
  Users,
  Clock,
} from "lucide-react";

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.4 0-4.05 1.47-4.05 4.16V10H7.5v3.1h2.69V21h3.31z" />
    </svg>
  );
}
function TwitterIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 3H21.6l-5.85 6.69L22.7 21h-5.4l-4.23-5.53L8.2 21H5.5l6.26-7.16L4.7 3h5.53l3.82 5.05L18.9 3zm-.95 16.17h1.5L8.13 4.74H6.52l11.43 14.43z" />
    </svg>
  );
}
function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM3.5 8.75h3.9V21H3.5V8.75zM10 8.75h3.74v1.68h.05c.52-.94 1.8-1.93 3.7-1.93 3.96 0 4.69 2.53 4.69 5.82V21h-3.9v-5.85c0-1.4-.03-3.19-1.95-3.19-1.96 0-2.26 1.5-2.26 3.09V21H10V8.75z" />
    </svg>
  );
}
function YoutubeIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 8.2s-.2-1.55-.83-2.23c-.8-.86-1.68-.87-2.09-.92C16.2 4.8 12 4.8 12 4.8h-.01s-4.2 0-7.08.25c-.41.05-1.3.06-2.1.92C2.19 6.65 2 8.2 2 8.2S1.8 10 1.8 11.8v1.4C1.8 15 2 16.8 2 16.8s.2 1.55.82 2.23c.8.86 1.85.83 2.32.92 1.68.17 7.14.22 7.14.22s4.2 0 7.08-.25c.41-.05 1.3-.06 2.09-.92.63-.68.83-2.23.83-2.23s.2-1.8.2-3.6v-1.4c0-1.8-.2-3.6-.2-3.6zM9.98 14.98V8.9l5.5 3.05-5.5 3.03z" />
    </svg>
  );
}



const FONT_DISPLAY = "'Big Shoulders Display', sans-serif";
const FONT_SANS = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";



const categories = [
  { title: "Medical Equipment", description: "Find medical devices, hospital equipment and healthcare supplies.", icon: Stethoscope },
  { title: "Energy Solutions", description: "Explore solar systems, renewable energy and power solutions.", icon: Zap },
  { title: "Healthcare Services", description: "Connect with healthcare providers and professional medical services.", icon: HeartPulse },
  { title: "Industrial Equipment", description: "Discover professional equipment for businesses and industries.", icon: Building2 },
];

const stats = [
  { number: "500+", label: "Verified Suppliers", icon: ShieldCheck },
  { number: "1,000+", label: "Products Listed", icon: Package },
  { number: "50+", label: "Professional Partners", icon: Users },
  { number: "24/7", label: "Platform Support", icon: Clock },
];

const products = [
  { name: "Digital X-Ray Machine", description: "High-resolution imaging for diagnostic radiology.", price: "45,000" },
  { name: "5kVA Solar Inverter", description: "Reliable backup power for clinics and small facilities.", price: "8,200" },
  { name: "Patient Monitor — 5 Parameter", description: "ECG, SpO2, NIBP, temperature and respiration.", price: "6,500" },
  { name: "Industrial Air Compressor", description: "Heavy-duty compressor for workshop and site use.", price: "12,300" },
  { name: "Hospital Bed — Electric", description: "Three-function electric adjustable hospital bed.", price: "15,750" },
  { name: "Diesel Generator — 20kVA", description: "Dependable standby power for medium facilities.", price: "38,000" },
];

const galleryItems = [
  { type: "video", title: "Site visit — Accra facility", caption: "Verified supplier walkthrough" },
  { type: "image", title: "Equipment handover", caption: "Medical Equipment category" },
  { type: "image", title: "Solar installation", caption: "Energy Solutions category" },
  { type: "video", title: "Partner spotlight", caption: "Professional Services network" },
  { type: "image", title: "Client consultation", caption: "Booking in progress" },
  { type: "image", title: "Warehouse & logistics", caption: "Industrial Equipment category" },
];

const partners = [
  "Partner 01", "Partner 02", "Partner 03", "Partner 04", "Partner 05", "Partner 06",
];

const testimonials = [
  {
    quote: "Booking a consultation took minutes, and the supplier we were matched with delivered exactly what our clinic needed.",
    name: "Facility Manager",
    org: "Regional Health Centre",
  },
  {
    quote: "As a supplier, COV.GH gave us visibility we couldn't get on our own. Verified enquiries, no wasted time.",
    name: "Operations Lead",
    org: "Energy Solutions Provider",
  },
  {
    quote: "The platform made it simple to compare professional services side by side before committing to one.",
    name: "Procurement Officer",
    org: "Industrial Client",
  },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: TwitterIcon, label: "Twitter / X", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
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
            <Link href="/login" className="flex items-center gap-2 text-sm text-white/80 hover:text-white">
              <User size={17} />
              Login
            </Link>
            <Link
              href="/login?mode=signup"
              className="rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:border-white hover:bg-white/10"
            >
              Sign Up
            </Link>
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
              <Link href="/login" onClick={() => setMenuOpen(false)} className="text-left font-medium">Login</Link>
              <Link
                href="/login?mode=signup"
                onClick={() => setMenuOpen(false)}
                className="rounded-full border border-white/40 py-3 text-center font-semibold"
              >
                Sign Up
              </Link>
              <button className="rounded-full bg-[#A2793D] py-3 font-semibold text-[#0E2233]">Book Consultation</button>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO — light paper background, spec-sheet layout ================= */}
      <section id="home" className="relative overflow-hidden border-b border-[#C9C3B4]">

       
        <div className="absolute inset-0">
          <Image
            src="/images/hero.avif.avif"
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#0E2233]/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-14 lg:pt-24 lg:pb-20">

          {/* Glassmorphic eyebrow badge */}
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[12.5px] font-semibold tracking-wide text-[#D9A94A] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9A94A]" />
            GHANA · VERIFIED SUPPLIERS · PROFESSIONAL SERVICES
          </span>

          <h1
            style={{ fontFamily: FONT_DISPLAY }}
            className="max-w-[16ch] text-[42px] font-bold leading-[0.98] text-white md:text-[64px]"
          >
            Connecting you to the right{" "}
            <span className="text-[#D9A94A]">products &amp; professionals.</span>
          </h1>

          <p className="mt-6 max-w-[46ch] text-lg text-white/80">
            Discover verified medical equipment, energy solutions,
            healthcare services and professional suppliers  all in one
            trusted platform.
          </p>

          {/* CTA buttons — solid brass + glassmorphic outline */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-[#A2793D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#8A6530]">
              Book Consultation
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
              Explore Categories <ArrowRight size={18} />
            </button>
          </div>

          {/* Search — pill-shaped bar, solid white so it stays crisp on the photo */}
          <div className="mt-8 max-w-[720px] overflow-hidden rounded-full border border-white/30 bg-white">
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
          <div className="mt-14 max-w-[720px] border-t border-white/20 pt-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
              {categories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.title} className="flex items-start gap-3">
                    <span style={{ fontFamily: FONT_MONO }} className="mt-1 text-[13px] text-[#D9A94A]">
                      0{i + 1}
                    </span>
                    <div>
                      <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#FBF3E6] text-[#A2793D]">
                        <Icon size={18} />
                      </div>
                      <span className="text-[13.5px] font-semibold text-white">{cat.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS — bordered icon cards, compact + navy ================= */}
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
              Our vision
            </h2>

            <p className="mt-6 max-w-[52ch] text-[#46545F]">
              A Ghana where every business, big or small, and every skilled
              professional can be found, verified and trusted online 
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
                professional services  making trusted commerce simple,
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
              SEC. 01  CATEGORIES
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

      {/* ================= GALLERY — photos & videos, uploaded content goes here ================= */}
      <section id="gallery" className="border-b border-[#C9C3B4] bg-[#EDE9DF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
            <div>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                Gallery
              </h2>
              <p className="mt-2 max-w-xl text-[#46545F]">
                Photos and videos from site visits, installations and verified suppliers on COV.GH.
              </p>
            </div>
            <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
              SEC. 03 — GALLERY
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {galleryItems.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#C9C3B4] bg-white"
              >
                <div className="flex h-full w-full items-center justify-center text-[12px] text-[#7C8B92]">
                  [ {item.type === "video" ? "video" : "photo"} upload goes here ]
                </div>

                {item.type === "video" && (
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0E2233]/85 text-white">
                    <Play size={18} fill="white" />
                  </span>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0E2233]/85 to-transparent p-4 pt-10">
                  <span style={{ fontFamily: FONT_DISPLAY }} className="block text-[15px] font-semibold text-white">
                    {item.title}
                  </span>
                  <span style={{ fontFamily: FONT_MONO }} className="text-[11px] text-white/70">
                    {item.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="rounded-full border border-[#8C9199] px-6 py-3 text-sm font-semibold text-[#0E2233] hover:bg-white">
              View full gallery
            </button>
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

      {/* ================= PARTNERS — logo strip ================= */}
      <section id="partners" className="border-b border-[#C9C3B4] bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <span style={{ fontFamily: FONT_MONO }} className="mb-3 block text-[12.5px] tracking-wide text-[#8A6530]">
              TRUSTED BY
            </span>
            <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[26px] font-bold text-[#0E2233]">
              Our partners
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex h-20 items-center justify-center rounded-2xl border border-[#C9C3B4] bg-[#F6F4EE] text-[12px] text-[#7C8B92]"
              >
                [ {partner} logo ]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="border-b border-[#C9C3B4] bg-[#EDE9DF] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 flex items-end justify-between border-b border-[#C9C3B4] pb-6">
            <div>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="text-[32px] font-bold md:text-[40px]">
                What people are saying
              </h2>
              <p className="mt-2 max-w-xl text-[#46545F]">
                Feedback from clients and suppliers using COV.GH.
              </p>
            </div>
            <span style={{ fontFamily: FONT_MONO }} className="hidden text-[13px] text-[#8C9199] md:block">
              SEC. 04 — TESTIMONIALS
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-[#C9C3B4] bg-white p-7"
              >
                <Quote size={28} className="text-[#A2793D]" />
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#46545F]">
                  "{t.quote}"
                </p>
                <div className="mt-6 border-t border-[#C9C3B4] pt-4">
                  <span style={{ fontFamily: FONT_DISPLAY }} className="block text-[16px] font-bold text-[#0E2233]">
                    {t.name}
                  </span>
                  <span style={{ fontFamily: FONT_MONO }} className="text-[11.5px] text-[#8C9199]">
                    {t.org}
                  </span>
                </div>
              </div>
            ))}
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

      {/* ================= FOOTER — 4-column, matching JDNHealth GH reference ================= */}
      <footer id="contact" className="border-t-4 border-[#A2793D] bg-[#0E2233] pt-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 pb-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">

            {/* Brand + contact */}
            <div>
              <span style={{ fontFamily: FONT_DISPLAY }} className="text-xl font-bold text-white">
                COV<span className="text-[#A2793D]">.GH</span>
              </span>
              <p className="mt-1 text-[13px] text-white/50">Connecting Opportunities. Building Possibilities.</p>

              <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/60">
                Ghana's trusted marketplace connecting individuals, businesses
                and organizations with verified suppliers, products and
                professional services across the country.
              </p>

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

            {/* Categories */}
            <div>
              <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">
                CATEGORIES
              </span>
              <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                <a href="#categories" className="hover:text-white">Medical Equipment</a>
                <a href="#categories" className="hover:text-white">Energy Solutions</a>
                <a href="#categories" className="hover:text-white">Healthcare Services</a>
                <a href="#categories" className="hover:text-white">Industrial Equipment</a>
                <a href="#categories" className="hover:text-white">All Categories</a>
              </div>
            </div>

            {/* Company */}
            <div>
              <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">
                COMPANY
              </span>
              <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                <a href="#about" className="hover:text-white">About Us</a>
                <a href="#contact" className="hover:text-white">Contact</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>

            {/* Account + Follow Us */}
            <div>
              <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-white/45">
                ACCOUNT
              </span>
              <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                <Link href="/login" className="hover:text-white">Sign In</Link>
                <Link href="/login?mode=signup" className="hover:text-white">Create Account</Link>
                <a href="#" className="hover:text-white">Dashboard</a>
                <a href="#" className="hover:text-white">Book Consultation</a>
              </div>

              <span style={{ fontFamily: FONT_MONO }} className="mt-7 block text-[12px] tracking-wide text-white/45">
                FOLLOW US
              </span>
              <div className="mt-4 flex flex-col gap-3 text-[14px] text-white/70">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a key={social.label} href={social.href} className="flex items-center gap-2 hover:text-white">
                      <Icon size={15} />
                      {social.label}
                      <ExternalLink size={12} className="text-white/40" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/60 md:flex-row md:items-center">
            <span>© 2026 COV.GH. All rights reserved. Built in Ghana for Ghana.</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>

        </div>
      </footer>

      </main>
    </>
  );
}