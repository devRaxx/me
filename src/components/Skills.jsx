import frontendSkills from "../data/frontendSkills";
import backendSkills from "../data/backendSkills";

export default function Skills() {
  return (
    <section className="h-screen">
      <div className="flex flex-col items-center justify-center text-center mx-auto">
        <div className="flex justify-center mb-8 gap-10">
          <div>
            <h1 className="text-2xl font-bold mb-2">Frontend</h1>
            <div
              className="grid grid-cols-2 bg-green-400 p-5 rounded-2xl"
              data-aos="zoom-in"
            >
              {frontendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start my-4 border border-transparent rounded-2xl p-2 hover:border-blue-300 hover:bg-green-300 hover:text-black transition duration-300"
                >
                  <span className="text-4xl mr-2">{skill.icon}</span>
                  <span className="text-2xl font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-2">Backend</h1>
            <div
              className="grid grid-cols-2 bg-blue-500 p-5 rounded-2xl"
              data-aos="zoom-in"
            >
              {backendSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-start my-4 border border-transparent rounded-2xl p-2 hover:border-blue-300 hover:bg-blue-400 hover:text-black transition duration-300"
                >
                  <span className="text-4xl mr-2">{skill.icon}</span>
                  <span className="text-2xl font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
