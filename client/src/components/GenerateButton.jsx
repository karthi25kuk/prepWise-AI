import { useState } from "react";

function GenerateButton({
  category,
  subtopic,
  hasConcepts,
  concept,
  difficulty,
  questionCount,
}) {

  const [loading, setLoading] = useState(false);

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
      const response = await fetch("http://localhost:5000/generate", {
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
      console.log(data);

    } catch (error) {
      console.log("Error:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const canGenerate =
    (category && subtopic && difficulty && (!hasConcepts || concept));

  const isButtonDisabled = !canGenerate || loading;

  return (
    <div className="mt-10">
      <button
        onClick={handleGenerateQuiz}
        disabled={isButtonDisabled}
        className={`
            w-full
            mt-8
            py-3
            rounded-xl
            font-semibold
            transition
            ${
              !isButtonDisabled
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
        `}
      >
        {loading ? "⏳ Generating..." : "🚀 Generate Quiz"}
      </button>
    </div>
  );
}
export default GenerateButton;
