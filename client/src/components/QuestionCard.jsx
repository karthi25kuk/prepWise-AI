import React, { useState } from "react";

function QuestionCard({ question, options, answer, setAnswer}) {

    return (
        <>
            <h3 className="text-lg font-semibold mb-2">{question}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
                    {options.map((item) => (
                        <div
                            key={item}
                            onClick={() => setAnswer(item)}
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
                            answer === item
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white hover:bg-gray-100 border-gray-300"
                            }
                            `}
                        >
                        {item}
                      </div>
                    ))}
                </div>
        </>
    )
}
export default QuestionCard;