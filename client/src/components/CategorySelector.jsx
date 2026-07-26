import { categoryIcons } from "../data/icons";

function CategorySelector({
  category,
  setCategory,
  categories,
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Choose Category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {categories.map((item) => (

          <div
            key={item}
            onClick={() => setCategory(item)}
            className={`
              cursor-pointer
              rounded-xl
              p-5
              border-2
              text-center
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              ${
                category === item
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white hover:bg-gray-100 border-gray-300"
              }
            `}
          >
            <div className="text-4xl mb-3">
              {categoryIcons[item]}
            </div>
            <h3 className="font-semibold">
              {item}
            </h3>
          </div>

        ))}

      </div>
    </div>
  );
}

export default CategorySelector;