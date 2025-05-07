import Cards from "../ui/Cards";

export default function Projects() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center mx-auto mt-14">
        <div className="flex justify-center items-center animate-shake animate-infinite animate-ease-linear">
          <h1 className="font-merriweather text-xl">WHAT'S COOKING ?</h1>
          <div className="relative flex items-end justify-center">
            {/* Pan */}
            <div className="text-5xl">🥘</div>

            {/* Ingredients */}
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-left)]">
              🍅
            </span>
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-right)] delay-150">
              🥦
            </span>
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-right2)] delay-300">
              🧄
            </span>
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-left2)] delay-500">
              🥔
            </span>
          </div>
        </div>
        <h2 className="text-4xl my-4 font-extrabold">Projects Built</h2>
      </div>
      <div>
        <Cards />
      </div>
    </section>
  );
}
