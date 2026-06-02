import { FaReact, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import raxIcon from "../assets/images/rax-icon.png";
import { IoArrowDownOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden bg-[#020617] text-slate-100"
      id="hero"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] opacity-60"></div>

        <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-900/20 blur-[120px]"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mx-auto px-4">
        <div className="relative mb-8 rounded-xl border border-blue-400/30 bg-slate-950/70 px-6 py-3 shadow-[0_24px_80px_rgba(2,6,23,0.65)] backdrop-blur-md">
          <h1 className="font-bold text-4xl md:text-5xl text-slate-50">
            Hi, I&apos;m Rax!{" "}
            <span className="inline-block animate-wiggle-more animate-infinite">
              👋
            </span>
          </h1>
          <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-r border-b border-blue-400/30 bg-slate-950/70"></div>
        </div>

        <div className="relative w-48 h-48 md:w-60 md:h-60 mb-6 group cursor-pointer">
          <img
            src={raxIcon}
            alt="Rax's Icon"
            className="w-full h-full object-cover rounded-full border-4 border-blue-400/30 transition-all duration-300 ease-out 
                       avatar-pop group-hover:scale-[1.12] 
                       shadow-[0_20px_60px_rgba(2,6,23,0.7)] group-hover:shadow-[0_30px_80px_rgba(56,189,248,0.25)]"
          />
          <span className="group-hover:hidden absolute bottom-3 right-5 md:right-7 border-4 border-slate-950 w-6 h-6 md:w-8 md:h-8 bg-emerald-400 rounded-full animate-ping animate-infinite animate-alternate"></span>
          <span className="group-hover:hidden absolute bottom-3 right-5 md:right-7 border-4 border-slate-950 w-6 h-6 md:w-8 md:h-8 bg-emerald-400 rounded-full"></span>
        </div>

        <p className="w-full md:w-[70%] lg:w-[45%] text-lg md:text-xl my-4 text-slate-300 font-light leading-relaxed">
          A Software engineer based in the Philippines, passionate about
          building fast, accessible, and user-centered web experiences tech, I
          bring clean code and thoughtful design to every project.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-lg border border-cyan-400/40 bg-slate-950/80 px-6 py-3 text-lg font-bold text-slate-100 shadow-[0_12px_36px_rgba(2,6,23,0.55)] transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-950/70"
          >
            Projects <IoArrowDownOutline />
          </a>
          <a
            href="https://www.linkedin.com/in/rockyapcastaneros/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-blue-400/30 bg-blue-950/50 px-6 py-3 text-lg font-bold text-slate-100 shadow-[0_12px_36px_rgba(2,6,23,0.55)] transition-all duration-300 hover:border-cyan-300 hover:bg-blue-900/70"
          >
            Connect <FaLinkedin className="text-cyan-300 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
