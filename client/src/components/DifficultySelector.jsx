function DifficultySelector({
  difficulty,
  setDifficulty,
  difficulties,
}) {
  return (
    <div className="mt-8 sm:mt-10 mb-4">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Choose Difficulty
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Select the difficulty level for your interview practice.
        </p>
      </div>

      {/* Difficulty Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

        {difficulties.map((item) => {
          const isSelected = difficulty === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => setDifficulty(item.name)}
              className={`
                group
                w-full
                rounded-2xl
                p-4 sm:p-5
                border-2
                text-center
                transition-all
                duration-300
                focus:outline-none
                focus:ring-2
                focus:ring-blue-400
                ${
                  isSelected
                    ? `${item.bg} ${item.text} ${item.border} shadow-lg`
                    : "bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:-translate-y-1"
                }
              `}
            >

              {/* Icon */}
              <div
                className={`
                  flex items-center justify-center
                  w-12 h-12
                  mx-auto mb-3
                  rounded-xl
                  text-2xl
                  transition
                  ${
                    isSelected
                      ? "bg-white/40"
                      : "bg-white shadow-sm group-hover:bg-blue-100"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* Name */}
              <h3 className="font-semibold text-sm sm:text-base">
                {item.name}
              </h3>

            </button>
          );
        })}

      </div>
    </div>
  );
}

export default DifficultySelector;

