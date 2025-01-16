import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionSelectComponent } from './question-select/question-select.component';

export const routes: Routes = [
    {path: "", redirectTo: "questions", pathMatch: "full"},
    {path: "questions", component: QuestionSelectComponent},
    {path: "questions/:id", component: QuestionComponent},
];
