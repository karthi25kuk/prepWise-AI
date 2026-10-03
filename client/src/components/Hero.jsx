import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-73px)] w-full bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center overflow-hidden relative">

      {/* Background decoration */}
      <div className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 mb-5 sm:mb-7 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs sm:text-sm font-medium">
          <span>🎯</span>
          Interview Onemark Preparation
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-5 sm:mb-6">
          Master Technical Interviews
          <span className="block text-blue-400">
            with AI
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-300 mb-8 sm:mb-10">
          PrepWise AI helps students and job seekers prepare for technical
          interviews through personalized quizzes, instant feedback, and
          detailed performance analysis.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-8 sm:mb-10">

          <div className="flex items-center gap-3 text-slate-200">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/20">
              🤖
            </span>
            <span className="text-sm sm:text-base">
              AI-Powered Questions
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/20">
              🎯
            </span>
            <span className="text-sm sm:text-base">
              Multiple Difficulty Levels
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/20">
              📊
            </span>
            <span className="text-sm sm:text-base">
              Instant Performance Analysis
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-200">
            <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500/20">
              💡
            </span>
            <span className="text-sm sm:text-base">
              Detailed Answer Review
            </span>
          </div>

        </div>

        {/* CTA */}
        <Link
          to="/generate-quiz"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 hover:bg-blue-400 hover:scale-105 transition-all duration-300"
        >
          Generate Your Quiz
          <span>→</span>
        </Link>

      </div>
    </section>
  );
}

export default Hero;
