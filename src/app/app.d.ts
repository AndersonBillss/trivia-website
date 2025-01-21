export interface iCategory{
    title: string,
    questionType: string,
    categoryId: string | string[]
}

export interface iQuestion{
    question: string
    correct_answer: string
    incorrect_answers: string[]
    category?: string
    difficulty?: string
    type?: string
    allQuestionsViewed?: boolean
}

export interface iHardcodedQuestion{
    category: string,
    questions: iQuestion[]
}