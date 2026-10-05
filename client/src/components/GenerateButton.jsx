import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GenerateButton({
  category,
  subtopic,
  hasConcepts,
  concept,
  difficulty,
  questionCount,
}) {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleGenerateQuiz = async () => {
    // console.log({
    //   category,
    //   subtopic,
    //   concept,
    //   difficulty,
    //   questionCount,
    // });
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          subtopic,
          concept,
          difficulty,
          questionCount,
        }),
      });
      const data = await response.json();
      navigate("/quiz", {
        state: {
          questions: data.questions,
          category,
        },
      });
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const canGenerate =
    category && subtopic && difficulty && (!hasConcepts || concept);

  const isButtonDisabled = !canGenerate || loading;

  return (
    <div className="mt-8">
      <button
        onClick={handleGenerateQuiz}
        disabled={isButtonDisabled}
        className={`
        w-full
        flex
        items-center
        justify-center
        gap-2
        py-3.5
        px-6
        rounded-xl
        font-semibold
        text-sm sm:text-base
        transition-all
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        ${
          !isButtonDisabled
            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
            : "bg-slate-200 text-slate-400 cursor-not-allowed"
        }
      `}
      >
        {loading ? (
          <>
            <span className="animate-spin">⏳</span>
            Generating Your Quiz...
          </>
        ) : (
          <>
            <span>🚀</span>
            Generate Quiz
          </>
        )}
      </button>

    </div>
  );
}
export default GenerateButton;
