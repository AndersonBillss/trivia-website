import { iCategory } from '../app'

export const categoriesList: iCategory[] =[
    {
      title: "Church",
      questionType: "Hardcoded",
      categoryId: 'Church'
    },
    {
      title: "Pop culture",
      questionType: "API",
      categoryId: ["11","13","14","16"]
    },
    {
      title: "Science",
      questionType: "API",
      categoryId: '17'
    },
    {
      title: "History",
      questionType: "API",
      categoryId: '23'
    },
    {
      title: "BYU",
      questionType: "Hardcoded",
      categoryId: 'BYU'
    },
    {
      title: "Sports",
      questionType: "API",
      categoryId:"21"
    },
    {
      title: "Music",
      questionType: "API",
      categoryId: "12"
    },
    {
      title: "Bishopric",
      questionType: "Hardcoded",
      categoryId: 'Bishopric'
    },
    {
      title: "Geography",
      questionType: "API",
      categoryId: '22'
    },
  ]