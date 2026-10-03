function QuizHeader({ category }) {
  return (
    <div className="flex items-center justify-between gap-4">

      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
          <span className="text-xl sm:text-2xl">🧠</span>
        </div>

        {/* Title */}
        <div>
          <p className="text-xs sm:text-sm font-medium text-blue-600 mb-0.5">
            Interview Practice
          </p>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            {category} Interview Quiz
          </h1>
        </div>
      </div>

      {/* Badge */}
      <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
        <span className="text-xs sm:text-sm font-medium text-blue-600">
           Do Well!
        </span>
      </div>

    </div>
  );
}

export default QuizHeader;