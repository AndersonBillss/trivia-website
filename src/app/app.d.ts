export interface iCategory{
    title: string,
    questionType: string,
    categoryId: string
}

export interface iQuestion{
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}