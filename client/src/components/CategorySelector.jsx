import { categoryIcons } from "../data/icons";

function CategorySelector({
  category,
  setCategory,
  categories,
}) {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
          Choose Category
        </h2>

        <p className="text-sm text-slate-500 mt-1">
          Select the area you want to practice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

        {categories.map((item) => {
          const isSelected = category === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
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

                <div
                  className={`
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
                  {categoryIcons[item]}
                </div>

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

export default CategorySelector;

