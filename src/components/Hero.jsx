import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import raxIcon from "../assets/images/rax-icon.png";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center h-screen text-center mx-auto">
        <div className="relative bg-white border-2 border-black rounded-xl px-6 py-3 mb-4 shadow-md">
          <h1 className="font-bold text-lg text-black">
            Hi, I&apos;m Rax!{" "}
            <span className="inline-block animate-wiggle-more animate-infinite">
              👋
            </span>
          </h1>
          {/* Speech bubble pointer */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-black rotate-45"></div>
        </div>
        <img src={raxIcon} alt="Rax's Icon" className="w-32 h-32" />
        <p className="w-[50%]">
          I'm a front-end developer passionate about building fast, accessible,
          and user-centered web experiences. With hands-on experience in{" "}
          <span className="inline-flex items-center gap-1">
            React <FaReact />
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1">
            Next.js <RiNextjsFill />
          </span>
          , and{" "}
          <span className="inline-flex items-center gap-1">
            Tailwind <RiTailwindCssFill />
          </span>
          , I’ve shipped scalable solutions for startups, student organizations,
          and tech communities. Whether it's automating event platforms,
          redesigning high-traffic pages, or creating interactive UI for civic
          tech, I bring clean code and thoughtful design to every project.
        </p>
      </div>
    </section>
  );
}
