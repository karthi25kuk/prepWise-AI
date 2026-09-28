import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { score, totalQuestions, questions, selectedAnswers } = location.state;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Quiz Result</h1>
      <p className="text-lg mb-2">Your Score: {score}</p>
      <p className="text-lg">Total Questions: {totalQuestions}</p>

      <button
        onClick={() =>
          navigate("/review", {
            state: {
              questions,
              selectedAnswers,
            },
          })
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Review Answers
      </button>
    </div>
  );
}

export default Result;
