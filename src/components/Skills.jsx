import frontendSkills from "../data/frontendSkills";
import backendSkills from "../data/backendSkills";
import tools from "../data/tools";

export default function Skills() {
  return (
    <section className="min-h-screen py-10">
      <div
        className="flex flex-col items-center justify-center text-center mx-auto"
        id="skills"
      >
        <div className="flex items-center">
          <h1 className="font-merriweather text-xl gradient-text animate-pulse animate-infinite animate-ease-out">
            KITCHEN ESSENTIALS{" "}
          </h1>
          <span className="text-white animate-spin animate-infinite ml-4">
            🔪
          </span>
        </div>
        <div>
          <h2 className="text-4xl font-bold mt-4 mb-2">Tech Stack</h2>
          <p className="text-center text-lg font-semibold text-gray-500 mb-8 max-w-3xl">
            Tools & technologies I use for building modern web experiences
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h1 className="text-2xl font-bold mb-2 text-yellow-500">
                Frontend
              </h1>
              <div
                className="grid grid-cols-2 bg-green-400 p-5 rounded-2xl"
                data-aos="flip-left"
              >
                {frontendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start my-4 border border-transparent rounded-2xl p-2 hover:border-blue-300 hover:bg-green-300 hover:text-black transition duration-300 cursor-default"
                  >
                    <span className="text-4xl mr-2">{skill.icon}</span>
                    <span className="text-2xl font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-2 text-yellow-500">
                Backend
              </h1>
              <div
                className="grid grid-cols-2 bg-blue-500 p-5 rounded-2xl"
                data-aos="flip-right"
                data-aos-delay="1000"
              >
                {backendSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-start my-4 border border-transparent rounded-2xl p-2 hover:border-blue-300 hover:bg-blue-400 hover:text-black transition duration-300 cursor-default"
                  >
                    <span className="text-4xl mr-2">{skill.icon}</span>
                    <span className="text-2xl font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2 text-yellow-500">
              Tools / DevOps
            </h1>
            <div
              className="grid grid-cols-2 sm:grid-cols-4 bg-purple-600 p-5 rounded-2xl"
              data-aos="flip-up"
              data-aos-delay="1000"
            >
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start my-4 border border-transparent rounded-2xl p-2 hover:border-purple-300 hover:bg-purple-400 hover:text-black transition duration-300 cursor-default"
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
