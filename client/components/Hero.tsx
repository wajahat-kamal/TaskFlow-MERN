"use client"
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};

export default function HeroSection() {
    return (
        <header className="text-[#F0F4FF] min-h-screen overflow-x-hidden relative flex items-center justify-center bg-[#00030f]">

            {/* ── Ambient background glows ── */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {/* Centre glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(79,126,255,0.18) 0%, transparent 70%)",
                    }}
                />
                {/* Top-left accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 2.5, delay: 0.5 }}
                    className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(79,126,255,0.12) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
                {/* Bottom-right accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ duration: 2.5, delay: 0.8 }}
                    className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(120,80,255,0.15) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />

                {/* Grid lines */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#4f7eff 1px, transparent 1px), linear-gradient(90deg, #4f7eff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* ── Main content ── */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">

                {/* Badge */}
                <motion.div
                    custom={0}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-2 bg-[#4f7eff]/10 border border-[#4f7eff]/40 rounded-full px-4 py-1.5 text-[13px] text-[#4f7eff] font-medium mb-6 backdrop-blur-sm"
                >
                    <motion.span
                        className="w-2 h-2 rounded-full bg-[#4f7eff] inline-block"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    Powered by GPT-4o
                </motion.div>

                {/* Headline */}
                <motion.h1
                    custom={0.15}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold max-w-[800px] leading-[1.08] tracking-tight"
                    style={{
                        background: "linear-gradient(135deg, #F0F4FF 30%, #4f7eff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Manage Tasks Smarter{" "}
                    <span className="block">with AI That Works</span>
                    <span className="block">For You</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    custom={0.3}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-5 text-[#6B7A99] max-w-[520px] leading-[1.8] text-base"
                >
                    Taskify learns your workflow, auto-assigns priorities, and keeps your
                    team perfectly in sync — so you can focus on what actually matters.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    custom={0.45}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="flex gap-3 mt-8 flex-wrap justify-center"
                >
                    <motion.button
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative flex items-center gap-2 bg-[#4f7eff] text-white font-bold px-8 py-3.5 rounded-xl text-[15px] overflow-hidden group"
                        style={{ boxShadow: "0 0 30px rgba(79,126,255,0.45)" }}
                    >
                        {/* Shimmer */}
                        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                        Get Started Free
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>

                    <motion.button
                        whileHover={{ y: -3, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#4f7eff]/40 text-[#F0F4FF] font-medium px-8 py-3.5 rounded-xl text-[15px] transition-colors duration-300 backdrop-blur-sm"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <circle cx="8" cy="8" r="7" stroke="#4f7eff" strokeWidth="1.2" />
                                <path d="M6.5 5.5l4 2.5-4 2.5V5.5z" fill="#4f7eff" />
                            </svg>
                        </motion.span>
                        Watch Demo
                    </motion.button>
                </motion.div>

                {/* Social proof */}
                <motion.div
                    custom={0.6}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="mt-10 flex items-center gap-3 text-sm text-[#6B7A99]"
                >
                    <span>
                        Trusted by <span className="text-[#F0F4FF] font-semibold">12,000+</span> teams worldwide
                    </span>
                </motion.div>
            </section>
        </header>
    );
}