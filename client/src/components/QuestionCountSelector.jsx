function QuestionCountSelector({
  questionCount,
  setQuestionCount,
  questionCounts,
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-2">Question Count</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {questionCounts.map((count) => (
          <div
            key={count.value}
            onClick={() => setQuestionCount(count.value)}
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
                            questionCount === count.value
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white hover:bg-gray-100 border-gray-300"
                          }
                        `}
          >
            <h3 className="font-semibold">{count.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default QuestionCountSelector;
