function DifficultySelector({ difficulty, setDifficulty, difficulties }) {
  return (
    <div className="mt-10 mb-4">
      <h2 className="text-xl font-semibold mb-4">Choose Difficulty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {difficulties.map((item) => (
          <div
            key={item.name}
            onClick={() => setDifficulty(item.name)}
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
                            difficulty === item.name
                              ? `${item.bg} ${item.text} ${item.border}`
                              : "bg-white hover:bg-gray-100 border-gray-300"
                          }
                        `}
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DifficultySelector;
