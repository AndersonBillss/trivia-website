import { HttpErrorResponse } from "@angular/common/http"
import { iQuestion } from "../app"

const triviaApiUrl = "https://opentdb.com/api.php?amount=1&category="

export async function getQuestionFromApi(category: number): Promise<iQuestion>{
    const url = triviaApiUrl + category
    console.log(url)
    let apiResponse: any = null
    await fetch(url).then((response: any) => {
        return response.json()
    }).then(data => {
        apiResponse = data
    })
    if(!apiResponse?.results){
        throw Error("response had no results")
    }
    return apiResponse.results[0] as iQuestion
}

export async function getQuestionFromCache(category: string): Promise<iQuestion | null>{
    return null
}