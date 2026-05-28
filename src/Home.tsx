import { useState } from "react";

const Home = () => {
    interface Question {
        id: number;
        question: string;
        options: string[];
        answer: string;
    }

    const questions: Question[] = [
        {
            id: 1,
            question: "What is the capital of Nigeria?",
            options: ["Lagos", "Kano", "Abuja", "Ibadan"],
            answer: "Abuja",
        },
        {
            id: 2,
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            id: 3,
            question: "What is the largest mammal?",
            options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale",
        },
        {
            id: 4,
            question: "Who is Christiano Ronaldo?",
            options: ["A Politician", "A Footballer", "A Designer", "A Dancer"],
            answer: "A Footballer",
        },
        {
            id: 5,
            question: "Nigeria gained her independence in 1950?",
            options: ["True", "False", "I don't know", "None of the above"],
            answer: "False",
        },
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [remark, setRemark] = useState("");
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string; }>({});
    const [error, setError] = useState("");
    const optionLabel = ["A.", "B.", "C.", "D."];

    const currentQuestion = questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const nextQuestion = () => {
        if (!isLastQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    const prevQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowScore(false);
        setRemark("");
        setSelectedAnswers({});
        setError("");
    };

    const canSubmit = Object.keys(selectedAnswers).length >= questions.length / 2;

    const submitAnswers = () => {
        let calculatedScore = 0;
        questions.forEach((question, index) => {
            if (selectedAnswers[index] === question.answer) {
                calculatedScore += 1;
            }
        });
        setScore(calculatedScore);
        setShowScore(true);
        if (calculatedScore === questions.length) {
            setRemark("Excellent! You got all answers correct.");
        } else if (calculatedScore >= questions.length / 2) {
            setRemark("Good job! You scored above average.");
        } else {
            setRemark("Better luck next time! Keep practicing.");
        }
    };


    return (
        <main className="min-h-screen bg-[#fff7ed] px-4 py-4 text-stone-900 sm:px-6">
            <section className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-3xl items-center">
                <div className="w-full overflow-hidden rounded-lg border border-orange-200 bg-[#fffbf5] shadow-xl shadow-orange-900/10">
                    <div className="border-b border-orange-100 bg-white/75 px-5 py-4 sm:px-7">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wide text-orange-700">
                                    ThinkTest
                                </p>
                                <h1 className="mt-1 text-xl font-bold text-stone-950 sm:text-2xl">
                                    Quick Knowledge Quiz
                                </h1>
                            </div>
                            <div className="w-fit rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-800">
                                Question {currentQuestion.id} of {questions.length}
                            </div>
                        </div>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-orange-100">
                            <div
                                className="h-full rounded-full bg-orange-700 transition-all duration-300"
                                style={{
                                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="px-5 py-5 sm:px-7 sm:py-6">
                        {currentQuestion && (
                            <div>
                                <h2 className="text-balance text-xl font-bold leading-tight text-stone-950 sm:text-2xl">
                                    {currentQuestion.id}. {currentQuestion.question}
                                </h2>

                                <div className="mt-4 grid gap-2.5">
                                    {currentQuestion.options.map((option, index) => (
                                        <div key={index} className="flex">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setSelectedAnswers({
                                                        ...selectedAnswers,
                                                        [currentQuestionIndex]: option,
                                                    });
                                                    setError("");
                                                }}
                                                className={`group flex w-full cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:shadow-md hover:shadow-orange-900/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-[#fffbf5] ${selectedAnswers[currentQuestionIndex] === option ? "border-orange-500 bg-orange-100 shadow-md shadow-orange-900/10" : "border-orange-200 bg-white"}`}
                                            >
                                                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition ${selectedAnswers[currentQuestionIndex] === option ? "bg-orange-700 text-white" : "bg-orange-100 text-orange-800 group-hover:bg-orange-200"}`}>
                                                    {optionLabel[index]}
                                                </span>
                                                <span className="text-base font-medium text-stone-800">
                                                    {option}
                                                </span>
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-5 flex flex-col gap-2.5 border-t border-orange-100 pt-4 sm:flex-row sm:items-center">
                                    <button
                                        className={`w-full rounded-lg border border-stone-300 px-5 py-2.5 font-semibold text-stone-800 transition sm:w-32 ${currentQuestionIndex === 0 ? 'cursor-not-allowed bg-stone-100 opacity-60' : 'cursor-pointer bg-white hover:border-stone-400 hover:bg-stone-50 active:bg-stone-100'}`}
                                        onClick={prevQuestion}
                                        disabled={currentQuestionIndex === 0}
                                    >
                                        Prev
                                    </button>
                                    <button
                                        className={`w-full rounded-lg px-5 py-2.5 font-semibold text-white transition sm:w-32 ${isLastQuestion ? 'cursor-not-allowed bg-emerald-900 opacity-50' : 'cursor-pointer bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900'}`}
                                        onClick={nextQuestion}
                                        disabled={isLastQuestion}
                                    >
                                        Next
                                    </button>
                                    <button
                                        className={`w-full rounded-lg px-5 py-2.5 font-semibold text-white transition sm:ml-auto sm:w-40 ${!canSubmit ? 'cursor-not-allowed bg-orange-900 opacity-50' : 'cursor-pointer bg-orange-700 hover:bg-orange-800 active:bg-orange-900'}`}
                                        onClick={submitAnswers}
                                        disabled={!canSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                                {error && (
                                    <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">{error}</p>
                                )}
                                {showScore && (
                                    <div className="mt-4 rounded-lg border border-orange-200 bg-white px-5 py-4 shadow-sm">
                                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                {remark && <p className="text-lg font-bold text-stone-950">{remark}</p>}
                                                <p className="mt-1 text-stone-700">
                                                    You scored <span className="font-bold text-orange-800">{score}</span> out of {questions.length}
                                                </p>
                                            </div>
                                            <button
                                                type="button"
                                                className="w-full cursor-pointer rounded-lg bg-stone-900 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-stone-800 sm:w-auto"
                                                onClick={restartQuiz}
                                            >
                                                Restart quiz
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
