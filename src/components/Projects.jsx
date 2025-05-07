export default function Projects() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center mx-auto">
        <div className="flex justify-center items-center ">
          <h1 className="font-alegreya text-2xl animate-bounce animate-infinite animate-ease-in">
            WHAT'S COOKING ?
          </h1>
          <div className="relative w-40 flex items-end justify-center">
            {/* Pan */}
            <div className="text-5xl animate-[var(--animate-pan-toss)]">🥘</div>

            {/* Ingredients */}
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-left)]">
              🍅
            </span>
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-right)] delay-200">
              🥦
            </span>
            <span className="absolute bottom-8 text-2xl animate-[var(--animate-ingredient-right)] delay-500">
              🧄
            </span>
          </div>
        </div>
        <h2 className="text-4xl my-4 font-extrabold">Projects Built</h2>
      </div>
    </section>
  );
}
