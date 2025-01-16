import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { iCategory, iQuestion } from '../app';
import { categoriesList } from '../utils/categoriesList';
import { getQuestionFromApi, getQuestionFromHardcoded } from '../utils/getQuestion';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  public correctAnswerRevealed = false
  public category: iCategory | null = null
  public question: iQuestion | null = null
  public questionOrder: number[] = []

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    this.category = null
    const categoryType = this.route.snapshot.paramMap.get("id")
    if(!categoryType){
      return
    }
    let foundCategory = null
    categoriesList.forEach(item => {
      if(item.title === categoryType){
        foundCategory = item
      }
    })
    if(!foundCategory){
      return
    }
    this.category = foundCategory

    this.getQuestion()
  }

  async getQuestion(){
    if(!this.category){
      return
    }
    if(this.category.questionType === "API"){
      this.question = await getQuestionFromApi(this.category.categoryId)
    }
    if(this.category.questionType === "Hardcoded"){
      this.question = getQuestionFromHardcoded(this.category.categoryId)
    }
    if(!this.question){
      return
    }
    const numQuestions = this.question.incorrect_answers.length + 1
    this.questionOrder = this.createRandomList(0,numQuestions)
  }

  createRandomList(num1: number, num2: number): number[]{
    const randomList: number[] = []
    const listLen = num2 - num1
    for(let i=0; i<listLen; i++){
      randomList.push(Math.random())
    }
    for(let i=0; i<listLen; i++){
      let smallNum = 1
      let smallNumIndex = -1
      for(let i=0; i<listLen; i++){
        const item = randomList[i]
        if(item < smallNum){
          smallNum = item
          smallNumIndex = i
        }
      }
      randomList[smallNumIndex] = i+1
    }
    for(let i=0; i<listLen; i++){
      randomList[i]--
    }
    return randomList
  }

  guessCorrect(){
    this.correctAnswerRevealed = true
  }

  guessIncorrect(){
    this.correctAnswerRevealed = true
  }

  nextQuestion(){
    this.correctAnswerRevealed = false
    this.question = null
    this.getQuestion()
  }

  goBack(){
    this.location.back()
  }
}
