import { HttpErrorResponse } from "@angular/common/http"
import { iHardcodedQuestion, iQuestion } from "../app"

const triviaApiUrl = "https://opentdb.com/api.php?amount=1&category="

const timeBeforeCallingAgain = 5000

let lastApiCallTime = 0

export async function getQuestionFromApi(category: string | string[]): Promise<iQuestion>{
    if(Array.isArray(category)){
        const random = Math.floor(Math.random()*category.length)
        category = category[random]
    }

    const now = Date.now();
    const elapsedTime = now - lastApiCallTime;
    const waitTime = Math.max(timeBeforeCallingAgain - elapsedTime, 0); 
    if (waitTime > 0) {
        await delay(waitTime); // Wait for the remaining time
    }

    const url = triviaApiUrl + category

    let apiResponse: any = null
    await fetch(url).then((response: any) => {
        return response.json()
    }).then(data => {
        apiResponse = data
    })
    if(!apiResponse?.results){
        throw Error("response had no results")
    }
    lastApiCallTime = Date.now()
    return apiResponse.results[0] as iQuestion
}

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function getQuestionFromHardcoded(category: string): iQuestion | null{
    let selectedCategoryQuestions: iQuestion[] = []
    for(let i=0; i<hardcodedQuestions.length; i++){
        const item: iHardcodedQuestion = hardcodedQuestions[i]
        if(item.category === category){
            selectedCategoryQuestions = item.questions
        }
    }

    const random = Math.floor(Math.random()*selectedCategoryQuestions.length)
    const question = selectedCategoryQuestions[random]
    return question
}

const hardcodedQuestions: iHardcodedQuestion[]= [
    {
        category: "Church",
        questions: [
            {
                question: "Church test question 1",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "Church test question 2",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "Church test question 3",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
        ]
    },
    {
        category: "BYU",
        questions: [
            {
                question: "BYU test question 1",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "BYU test question 2",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "BYU test question 3",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
        ]
    },
    {
        category: "Bishopric",
        questions: [
            {
                question: "Bishopric test question 1",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "Bishopric test question 2",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
            {
                question: "Bishopric test question 3",
                correct_answer: "Correct",
                incorrect_answers: [
                    "Incorrect1",
                    "Incorrect2",
                    "Incorrect3",
                ]
            },
        ]
    },
]