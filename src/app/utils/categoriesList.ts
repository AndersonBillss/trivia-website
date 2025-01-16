import { getQuestionFromApi, getQuestionFromCache } from './getQuestion';
import { iCategory } from '../app'

export const categoriesList: iCategory[] =[
    {
      title: "Science and Nature",
      getQuestionsFunction: async() => await getQuestionFromApi(17)
    },
    {
      title: "History",
      getQuestionsFunction: async() => await getQuestionFromApi(23)
    },
    {
      title: "Geography",
      getQuestionsFunction: async() => getQuestionFromCache("")
    },
    {
      title: "BYU",
      getQuestionsFunction: async() => getQuestionFromCache("")
    },
    {
      title: "Culture",
      getQuestionsFunction: async() => getQuestionFromCache("")
    },
    {
      title: "Test",
      getQuestionsFunction: async() => getQuestionFromCache("")
    },
  ]