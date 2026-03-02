export type AnswerOption = {
  id: string
  text: string
  isCorrect: boolean
}

export type Question = {
  id: string
  text: string
  answers: AnswerOption[]
}

export type UserAnswer = {
  questionId: string
  selectedAnswerId: string
  isCorrect: boolean
}