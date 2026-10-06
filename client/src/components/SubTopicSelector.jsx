import { subtopicIcons } from "../data/icons";

function SubTopicSelector({
  category,
  subtopic,
  setSubtopic,
  subtopics,
}) {
  return (
    <div className="mt-8 sm:mt-10">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Choose {category} Topic
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Select a topic you want to practice.
        </p>
      </div>

      {/* Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {subtopics.map((item) => {
          const isSelected = subtopic === item;

          return (
            <button
              key={item}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSubtopic(item)}
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

                {/* Icon */}
                <div
                  className={`
                    flex-shrink-0
                    flex items-center justify-center
                    w-12 h-12
                    rounded-xl
                    text-2xl sm:text-3xl
                    transition
                    ${
                      isSelected
                        ? "bg-white/15"
                        : "bg-white shadow-sm group-hover:bg-blue-100"
                    }
                  `}
                >
                  {subtopicIcons[item]}
                </div>

                {/* Topic Details */}
                <div className="flex-1 min-w-0">
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

export default SubTopicSelector;