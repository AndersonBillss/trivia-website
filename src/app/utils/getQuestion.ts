import { iHardcodedQuestion, iQuestion } from "../app"
import { hardcodedQuestions } from "./hardCodedQuestions"

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
    if(allQuestionsViewed(category)){
        return {
            question: "All questions in this category have been completed",
            correct_answer: "OK",
            incorrect_answers: [],
            allQuestionsViewed: true
        }
    }
    let selectedCategoryQuestions: iQuestion[] = []
    for(let i=0; i<hardcodedQuestions.length; i++){
        const item: iHardcodedQuestion = hardcodedQuestions[i]
        if(item.category === category){
            selectedCategoryQuestions = item.questions
        }
    }

    const random = Math.floor(Math.random()*selectedCategoryQuestions.length)
    let question: iQuestion | null = selectedCategoryQuestions[random]
    if(viewedQuestions.indexOf(question.question) !== -1){
        question = getQuestionFromHardcoded(category)
    }
    if(!question){
        return null
    }
    viewedQuestions.push(question.question)
    return question
}

const viewedQuestions: string[] = []

export function allQuestionsViewed(category: string): boolean{
    let selectedCategoryQuestions: iQuestion[] = []
    for(let i=0; i<hardcodedQuestions.length; i++){
        const item: iHardcodedQuestion = hardcodedQuestions[i]
        if(item.category === category){
            selectedCategoryQuestions = item.questions
        }
    }

    for(let i=0; i<selectedCategoryQuestions.length; i++){
        const question = selectedCategoryQuestions[i]
        // If the question is not found, return false
        if(viewedQuestions.indexOf(question.question) === -1){
            return false
        }
    }
    // If all questions were found, return true
    return true
}