// Work.js
import React from "react";
import Timeline from "@mui/lab/Timeline";
import ExperienceItem from "../ui/ExperienceItem";
import experiences from "../data/experiences";

const Work = () => (
  <section
    className="h-full flex flex-col items-center justify-center bg-[#020617] text-slate-100"
    id="work"
  >
    <h1 className="text-4xl my-4 font-extrabold text-slate-50">
      Work Experiences
    </h1>
    <h2 className="text-center text-lg font-semibold text-slate-400 mb-5 mx-96">
      A collection of roles and experiences that sharpened my skills, built my
      resilience, and seasoned me into the developer I am today.
    </h2>
    <div className="w-full max-w-5xl">
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            date={exp.date}
            title={exp.title}
            company={exp.company}
            points={exp.points}
            image={exp.image}
            aos={"zoom-in-up"}
            aos-duration="100"
            link={exp.link}
          />
        ))}
      </Timeline>
    </div>
  </section>
);

export default Work;
