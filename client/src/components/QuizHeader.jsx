function QuizHeader({category}) {
    return (
        <div className="flex items-center gap-2 mb-6">
            <h1 className="text-3xl font-bold">{category} Interview Quiz </h1>
        </div>
    )
}
export default QuizHeader;