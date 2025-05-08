// Work.js
import React from "react";
import Timeline from "@mui/lab/Timeline";
import ExperienceItem from "../ui/ExperienceItem";
import experiences from "../data/experiences";

const Work = () => (
  <section className="h-full flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold mb-8">WORK EXPERIENCES</h1>
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
          />
        ))}
      </Timeline>
    </div>
  </section>
);

export default Work;
