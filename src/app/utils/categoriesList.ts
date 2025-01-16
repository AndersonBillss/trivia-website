import { getQuestionFromApi, getQuestionFromHardcoded } from './getQuestion';
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
      getQuestionsFunction: async() => getQuestionFromHardcoded("")
    },
    {
      title: "BYU",
      getQuestionsFunction: async() => getQuestionFromHardcoded("")
    },
    {
      title: "Culture",
      getQuestionsFunction: async() => getQuestionFromHardcoded("")
    },
    {
      title: "Test",
      getQuestionsFunction: async() => getQuestionFromHardcoded("")
    },
  ]