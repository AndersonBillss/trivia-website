export interface iCategory{
    title: string,
    getQuestionsFunction: iQuestionFunction
}

type iQuestionFunction = () => Promise<iQuestion | null>;

export interface iQuestion{
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}