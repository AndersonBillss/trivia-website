import { Component, OnInit } from '@angular/core';
import { iCategory } from '../app';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { categoriesList } from '../utils/categoriesList';
import { allQuestionsViewed } from '../utils/getQuestion';

@Component({
  selector: 'app-question-select',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './question-select.component.html',
  styleUrl: './question-select.component.css'
})
export class QuestionSelectComponent{
  public categories: iCategory[] = categoriesList

  isCategoryDisabled(category: iCategory){
    if(category.questionType !== "Hardcoded" || Array.isArray(category.categoryId)){
      return false
    }
    if(allQuestionsViewed(category.categoryId)){
      return true
    }
    return false
  }
}
