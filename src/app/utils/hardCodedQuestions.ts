import { iHardcodedQuestion } from "../app";

export const hardcodedQuestions: iHardcodedQuestion[]= [
    {
        category: "Church",
        questions: [
            {
                question: "In what language were the gold plates primaily written in, according to Joseph Smith?",
                correct_answer: "Reformed Egyption",
                incorrect_answers: [
                    "Classical Hebrew",
                    "Ancient Aramaic",
                    "Koine Greek",
                ]
            },
            {
                question: "Where was the first temple built by the church?",
                correct_answer: "Kirtland, Ohio",
                incorrect_answers: [
                    "Nauvoo, Illinois",
                    "Salt Lake City, Utah",
                    "Independence, Missouri",
                ]
            },
            {
                question: "In what year did Joseph Smith first share his written account of the First Vision with the public?",
                correct_answer: "1832",
                incorrect_answers: [
                    "1820",
                    "1829",
                    "1842",
                ]
            },
            {
                question: "How many members were present during the official organization of The Church of Jesus Christ of Latter-Day Saints?",
                correct_answer: "6",
                incorrect_answers: [
                    "12",
                    "20",
                    "30",
                ]
            },
            {
                question: `Before Nauvoo, which city in Missouri was designated as The Church's "gathering place" in the early 1930s?`,
                correct_answer: "Independence",
                incorrect_answers: [
                    "Far West",
                    "Adam-ondi-Ahmen",
                    "Liberty",
                ]
            },
        ]
    },
    {
        category: "BYU",
        questions: [
            {
                question: "What year was BYU officially estabished?",
                correct_answer: "1875",
                incorrect_answers: [
                    "1880",
                    "1885",
                    "1890",
                ]
            },
            {
                question: "Approximately what percentage of BYU students are members of the Church of Jesus Christ of Latter-day Saints",
                correct_answer: "99%",
                incorrect_answers: [
                    "75%",
                    "85%",
                    "90%",
                ]
            },
            {
                question: "BYU offers courses in how many languages?",
                correct_answer: "50+",
                incorrect_answers: [
                    "30+",
                    "70+",
                    "90+",
                ]
            },
            {
                question: "How many BYU alumni have participated in the Olympics (as of 2023)?",
                correct_answer: "39",
                incorrect_answers: [
                    "12",
                    "21",
                    "55",
                ]
            },
            {
                question: "Approximately what percentage of BYU students are married",
                correct_answer: "25%",
                incorrect_answers: [
                    "15%",
                    "30%",
                    "40%",
                ]
            },
        ]
    },
    {
        category: "Bishopric",
        questions: [
            {
                question: "What accomplishment has Bishop Anderson achieved",
                correct_answer: "Living in all five burroughs of New York City",
                incorrect_answers: [
                    "Collecting all five infinity stones",
                    "Met the last five prophets of the church",
                    "Spent five years working as a subway employee",
                ]
            },
            {
                question: "Which of the following activities does Brother Sheffield love to do",
                correct_answer: "Exterminate bugs",
                incorrect_answers: [
                    "Keep an ant farm",
                    "Visit a butterfly biosphere",
                    "Collect cool beetles",
                ]
            },
            {
                question: "Which band did Brother Melton perform in",
                correct_answer: "The Government",
                incorrect_answers: [
                    "Vatican City's National Military Band", // This one is fake 
                    "Young Buffalo", // This is the real band I added
                    "A kindergarten kazoo band", // This one is fake
                ]
            },
            {
                question: "Who is this?",
                img: "Mystery_Man.jpg",
                correct_answer: "Brother Rose",
                incorrect_answers: [
                    "Brother Sheffield",
                    "Brother Melton",
                    "Bishop Anderson",
                ]
            },
        ]
    },
]