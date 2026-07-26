function ConceptSelector({category, subtopic, concept, setConcept, concepts}){
    return(
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">
                    Choose {subtopic} Concept
                </h2>
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                    {concepts.map((item) => (
                        <div
                            key={item}
                            onClick={() => setConcept(item)}
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
                            concept === item
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white hover:bg-gray-100 border-gray-300"
                            }
                            `}
                        >
                        <div className="text-4xl mb-3 pb-1 bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                          {item.charAt(0).toUpperCase()}
                        </div>
                        <h3 className="font-semibold">
                          {item}
                        </h3>
                      </div>
                    ))}
                </div>
            </div>
        )
}

export default ConceptSelector;