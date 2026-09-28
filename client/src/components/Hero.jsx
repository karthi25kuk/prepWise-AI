function Hero(){
    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-5xl font-bold mb-6">Master Technical Interviews with AI</h1>
            <p className="text-lg mb-6">PrepWise AI helps students and job seekers prepare for
technical interviews through personalized quizzes,
real-time feedback, and detailed performance analysis.
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>AI-Powered Question Generation</li>
                <li>Multiple Difficulty Levels</li>
                <li>Instant Results & Performance Analysis</li>
                <li>Detailed Answer Review</li>
            </ul>
            <div className="flex justify-center">
            <a href="/generate-quiz" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Generate Quiz</a>
            </div>
        </div>
    )
}
export default Hero;