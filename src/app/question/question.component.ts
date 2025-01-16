import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { iCategory, iQuestion } from '../app';
import { categoriesList } from '../utils/categoriesList';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  public category: iCategory | null = null
  public question: iQuestion | null = null
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit(): void {
    const categoryType = this.route.snapshot.paramMap.get("id")
    if(!categoryType){
      return
    }
    const foundCategory = categoriesList.find(c => c.title = categoryType)
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
    this.question = await this.category.getQuestionsFunction()
    console.log("api response: ",this.question)
  }

  goBack(){
    this.location.back()
  }
}
