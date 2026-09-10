"use client";

import { useEffect, useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const FONT_DISPLAY = "'Big Shoulders Display', sans-serif";
const FONT_SANS = "'IBM Plex Sans', sans-serif";
const FONT_MONO = "'IBM Plex Mono', monospace";

export default function LoginPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  // Read ?mode=signup from the URL after the page loads, client-side only.
  // This avoids useSearchParams' Suspense requirement entirely, which was
  // the likely cause of the toggle button not responding to clicks.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("mode") === "signup") {
      setMode("signup");
    }
  }, []);

  const isLogin = mode === "login";

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes cov-fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cov-fade-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cov-breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.06); opacity: 1; }
        }
        .cov-card { animation: cov-fade-in-up 0.6s ease-out both; }
        .cov-fade { animation: cov-fade-in 0.35s ease-out both; }
        .cov-circle-1 { animation: cov-breathe 5s ease-in-out infinite; }
        .cov-circle-2 { animation: cov-breathe 5s ease-in-out infinite 1.2s; }
      `}</style>
      <main
        className="flex min-h-screen items-center justify-center bg-[#F6F4EE] p-6"
        style={{ fontFamily: FONT_SANS }}
      >
        <div className="cov-card grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2">

          {/* ================= FORM PANEL — swaps sides with mode ================= */}
          <div className={`flex flex-col justify-center p-10 md:p-14 ${isLogin ? "md:order-1" : "md:order-2"}`}>
            <span style={{ fontFamily: FONT_DISPLAY }} className="text-2xl font-bold text-[#0E2233]">
              COV<span className="text-[#A2793D]">.GH</span>
            </span>

            <h1
              key={mode}
              style={{ fontFamily: FONT_DISPLAY }}
              className="cov-fade mt-8 text-[32px] font-bold text-[#0E2233]"
            >
              {isLogin ? "Login" : "Sign Up"}
            </h1>
            <p className="mt-1 text-sm text-[#7C8B92]">
              {isLogin ? "Welcome back. Log in to continue." : "Create an account to get started."}
            </p>

            <form className="mt-8 space-y-4">
              <div className="relative">
                <User size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A2793D]" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full rounded-full border border-[#DDE3E3] bg-[#F6F4EE] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#A2793D] focus:bg-white focus:scale-[1.01]"
                />
              </div>

              {!isLogin && (
                <div className="cov-fade relative">
                  <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A2793D]" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-[#DDE3E3] bg-[#F6F4EE] py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-[#A2793D] focus:bg-white focus:scale-[1.01]"
                  />
                </div>
              )}

              <div className="relative">
                <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A2793D]" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full rounded-full border border-[#DDE3E3] bg-[#F6F4EE] py-3.5 pl-12 pr-11 text-sm outline-none transition focus:border-[#A2793D] focus:bg-white focus:scale-[1.01]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7C8B92] hover:text-[#0E2233]"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>

              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-[13px] font-medium text-[#A2793D] hover:text-[#8A6530]">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#A2793D] py-3.5 font-semibold text-white transition-all hover:bg-[#8A6530] hover:scale-[1.02] active:scale-[0.98]"
              >
                {isLogin ? "Login" : "Register"}
                <ArrowRight size={17} />
              </button>
            </form>

            <p className="mt-6 text-center text-[13.5px] text-[#7C8B92]">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <a
                href={isLogin ? "/login?mode=signup" : "/login"}
                onClick={(e) => {
                  // Force a real, full browser reload no matter what routing
                  // state the tab already has (e.g. having arrived here via
                  // a Next.js Link from the homepage). window.location
                  // assignment can't be intercepted by any client router.
                  e.preventDefault();
                  window.location.href = isLogin ? "/login?mode=signup" : "/login";
                }}
                className="font-semibold text-[#A2793D] hover:text-[#8A6530]"
              >
                {isLogin ? "Sign Up" : "Login"}
              </a>
            </p>
          </div>

          {/* ================= DIAGONAL COLOR PANEL — swaps sides with mode ================= */}
          <div
            className={`relative hidden items-center justify-center overflow-hidden p-10 text-white md:flex ${isLogin ? "md:order-2" : "md:order-1"}`}
            style={{
              background: "linear-gradient(135deg, #0E2233 0%, #1B3A52 100%)",
              clipPath: isLogin
                ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
                : "polygon(0 0, 100% 0, 100% 100%, 15% 100%)",
            }}
          >
            <div className="cov-circle-1 absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#A2793D]/30" />
            <div className="cov-circle-2 absolute -bottom-14 -left-6 h-32 w-32 rounded-full border border-[#A2793D]/20" />

            <div className="relative text-center">
              <span style={{ fontFamily: FONT_MONO }} className="text-[12px] tracking-wide text-[#D9A94A]">
                GHANA | VERIFIED SUPPLIERS
              </span>
              <h2 style={{ fontFamily: FONT_DISPLAY }} className="mt-4 text-[34px] font-bold leading-tight">
                {isLogin ? (
                  <>Welcome<br />back!</>
                ) : (
                  <>Welcome!</>
                )}
              </h2>
              <p className="mt-4 max-w-[26ch] text-[14.5px] text-white/70">
                {isLogin
                  ? "Log in to manage your bookings and connect with verified suppliers."
                  : "Create an account to start booking consultations on COV.GH."}
              </p>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}