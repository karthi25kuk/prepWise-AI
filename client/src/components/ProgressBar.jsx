function ProgressBar({ currentQuestion, totalQuestions }) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full mb-4">
      <p className="text-sm text-gray-700 mb-1">{`Question ${currentQuestion} of ${totalQuestions}`}</p>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
export default ProgressBar;
