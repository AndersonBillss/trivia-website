import { Component, OnInit } from '@angular/core';
import { iCategory } from '../app';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { categoriesList } from '../utils/categoriesList';

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
}
