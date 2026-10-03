function ProgressBar({ currentQuestion, totalQuestions }) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full">
      {/* Progress information */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-medium text-slate-700">
          Question {currentQuestion} of {totalQuestions}
        </p>

        <p className="text-sm font-semibold text-blue-600">
          {Math.round(progressPercentage)}%
        </p>
      </div>

      {/* Progress track */}
      <div className="w-full h-2.5 sm:h-3 bg-slate-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;