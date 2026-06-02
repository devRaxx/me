import Cards from "../ui/Cards";

export default function Projects() {
  return (
    <section className="bg-[#020617] text-slate-100">
      <div
        className="flex flex-col items-center justify-center text-center mx-auto mt-14"
        id="projects"
      >
        <h2 className="text-4xl my-4 font-extrabold text-slate-50">
          Projects Built
        </h2>
        <h2 className="text-center text-lg font-semibold text-slate-400 mb-5 mx-96">
          Here’s a fresh batch of my latest projects—crafted with creativity,
          tested with care, and served with purpose.
        </h2>
      </div>
      <div>
        <Cards />
      </div>
    </section>
  );
}
