"use client"
import { useState, useEffect } from "react";

export default function HeroSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 80);
        return () => clearTimeout(t);
    }, []);

    return (
        <header className="font-dm bg-[#050920] text-[#F0F4FF] min-h-screen overflow-x-hidden relative">

            {/* ── BACKGROUND ── */}
            {/* <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="blob1 absolute w-[580px] h-[580px] rounded-full -top-40 -left-40 opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(79,126,255,0.5) 0%, transparent 65%)", filter: "blur(70px)" }} />
                <div className="blob2 absolute w-[480px] h-[480px] rounded-full top-0 -right-24 opacity-25"
                    style={{ background: "radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 65%)", filter: "blur(80px)" }} />
                <div className="blob3 absolute w-[380px] h-[380px] rounded-full bottom-32 left-[35%] opacity-15"
                    style={{ background: "radial-gradient(circle, rgba(34,211,160,0.5) 0%, transparent 65%)", filter: "blur(90px)" }} />
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div> */}

            {/* ── HERO ── */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 min-h-screen">

                {/* Badge */}
                <div
                    className={`fade-up ${mounted ? "show" : ""} inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-[13px] text-blue-300 font-medium mb-7`}
                    style={{ transitionDelay: "0.1s" }}
                >
                    <span className="badge-dot w-2 h-2 rounded-full bg-blue-500 inline-block" />
                    Powered by GPT-4o · Now in Public Beta
                </div>

                {/* Headline */}
                <h1
                    className={`fade-up ${mounted ? "show" : ""} font-syne font-extrabold leading-[1.07] tracking-[-2px] max-w-[820px] text-[clamp(40px,6vw,76px)]`}
                    style={{ transitionDelay: "0.25s" }}
                >
                    Manage Tasks Smarter<br />
                    with <span className="shimmer-text">AI That Works</span><br />
                    For You
                </h1>

                {/* Subtext */}
                <p
                    className={`fade-up ${mounted ? "show" : ""} mt-5 text-[#6B7A99] max-w-[540px] leading-[1.75] text-[clamp(15px,1.5vw,18px)]`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    Taskify learns your workflow, auto-assigns priorities, and keeps your
                    team perfectly in sync — so you can focus on what actually matters.
                </p>

                {/* CTA Buttons */}
                <div
                    className={`fade-up ${mounted ? "show" : ""} flex gap-3 mt-10 flex-wrap justify-center`}
                    style={{ transitionDelay: "0.55s" }}
                >
                    <button
                        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(79,126,255,0.5)]"
                        style={{ boxShadow: "0 0 30px rgba(79,126,255,0.4)" }}
                    >
                        🚀 Get Started Free
                    </button>
                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[#F0F4FF] font-medium px-8 py-3.5 rounded-xl text-[15px] transition-all duration-200 hover:-translate-y-0.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="#F0F4FF" strokeWidth="1.2" />
                            <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="#F0F4FF" />
                        </svg>
                        Watch Demo
                    </button>
                </div>

                {/* Social proof */}
                <div
                    className={`fade-up ${mounted ? "show" : ""} flex items-center gap-4 mt-9 flex-wrap justify-center`}
                    style={{ transitionDelay: "0.7s" }}
                >
                    <div className="flex">
                        {[["bg-blue-500", "AK"], ["bg-violet-500", "MR"], ["bg-emerald-500", "SC"], ["bg-yellow-500", "JP"]].map(([bg, init], i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#080B12] ${bg} flex items-center justify-center text-[10px] font-bold text-white ${i > 0 ? "-ml-2.5" : ""}`}>
                                {init}
                            </div>
                        ))}
                    </div>
                    <div className="text-left">
                        <div className="text-yellow-400 text-xs tracking-widest">★★★★★</div>
                        <div className="text-xs text-[#6B7A99] mt-0.5">Loved by <strong className="text-[#F0F4FF]">12,000+</strong> teams</div>
                    </div>
                    <div className="w-px h-9 bg-white/10" />
                    <div className="text-left">
                        <div className="text-sm font-semibold">No credit card</div>
                        <div className="text-xs text-[#6B7A99]">Free 14-day trial</div>
                    </div>
                </div>



            </section>
        </header>
    );
}