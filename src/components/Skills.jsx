import frontendSkills from "../data/frontendSkills";
import backendSkills from "../data/backendSkills";
import tools from "../data/tools";

export default function Skills() {
  return (
    <section className="min-h-screen py-10 bg-[#020617] text-slate-100">
      <div
        className="flex flex-col items-center justify-center text-center mx-auto"
        id="skills"
      >
        <div>
          <h2 className="text-4xl font-bold mt-4 mb-2 text-slate-50">
            Tech Stack
          </h2>
          <p className="text-center text-lg font-semibold text-slate-400 mb-8 max-w-3xl">
            Tools & technologies I use for building modern web experiences
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-2xl font-bold mb-2 text-cyan-300">
                Frontend
              </h1>
              <div
                className="grid grid-cols-2 rounded-2xl border border-cyan-400/15 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)]"
                data-aos="flip-left"
              >
                {frontendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start my-4 rounded-2xl border border-transparent p-2 text-slate-200 transition duration-300 cursor-default hover:border-cyan-300/40 hover:bg-cyan-950/50"
                  >
                    <span className="text-4xl mr-2">{skill.icon}</span>
                    <span className="text-2xl font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-2 text-blue-300">Backend</h1>
              <div
                className="grid grid-cols-2 rounded-2xl border border-blue-400/15 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)]"
                data-aos="flip-right"
                data-aos-delay="1000"
              >
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start my-4 rounded-2xl border border-transparent p-2 text-slate-200 transition duration-300 cursor-default hover:border-blue-300/40 hover:bg-blue-950/50"
                  >
                    <span className="text-4xl mr-2">{skill.icon}</span>
                    <span className="text-2xl font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2 text-violet-300">
              Tools / DevOps
            </h1>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl border border-violet-400/15 bg-slate-950/70 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.45)]"
              data-aos="flip-up"
              data-aos-delay="100"
            >
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start my-4 rounded-2xl border border-transparent p-2 text-slate-200 transition duration-300 cursor-default hover:border-violet-300/40 hover:bg-violet-950/50"
                >
                  <span className="text-4xl mr-2">{tool.icon}</span>
                  <span className="text-2xl font-semibold">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
