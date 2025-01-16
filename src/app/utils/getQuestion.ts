import { HttpErrorResponse } from "@angular/common/http"
import { iQuestion } from "../app"

const triviaApiUrl = "https://opentdb.com/api.php?amount=1&category="

const timeBeforeCallingAgain = 5000

let lastApiCallTime = 0

export async function getQuestionFromApi(category: string): Promise<iQuestion>{
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

export async function getQuestionFromHardcoded(category: string): Promise<iQuestion | null>{
    return null
}