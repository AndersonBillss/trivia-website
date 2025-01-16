import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionSelectComponent } from './question-select/question-select.component';

export const routes: Routes = [
    {path: "", redirectTo: "categories", pathMatch: "full"},
    {path: "categories", component: QuestionSelectComponent},
    {path: "questions/:id", component: QuestionComponent},
];
