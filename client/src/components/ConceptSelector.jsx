function ConceptSelector({
  category,
  subtopic,
  concept,
  setConcept,
  concepts,
}) {
  return (
    <div className="mt-8 sm:mt-10">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Choose {subtopic} Concept
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Select the specific concept you want to practice.
        </p>
      </div>

      {/* Concepts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {concepts.map((item) => {
          const isSelected = concept === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setConcept(item)}
              className={`
                group
                w-full
                rounded-2xl
                p-4 sm:p-5
                border-2
                text-left
                transition-all
                duration-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-50 border-slate-200 text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1"
                }
              `}
            >
              <div className="flex items-center gap-4">

                {/* Concept Icon */}
                <div
                  className={`
                    flex-shrink-0
                    flex items-center justify-center
                    w-12 h-12
                    rounded-xl
                    text-lg font-bold
                    transition
                    ${
                      isSelected
                        ? "bg-white text-blue-600"
                        : "bg-blue-100 text-blue-600 group-hover:bg-blue-200"
                    }
                  `}
                >
                  {item.charAt(0).toUpperCase()}
                </div>

                {/* Concept Name */}
                <div className="flex-1">
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item}
                  </h3>
                </div>

              </div>
            </button>
          );
        })}

      </div>
    </div>
  );
}

export default ConceptSelector;

