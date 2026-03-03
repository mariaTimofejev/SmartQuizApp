import { useState } from 'react'
import type { Question, UserAnswer } from './type'

export const useQuiz = (questions: Question[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<UserAnswer[]>([])
  const [score, setScore] = useState(0)

  const currentQuestion = questions[currentIndex]

  const answerQuestion = (answerId: string, isCorrect: boolean) => {
    setAnswers(prev => [...prev, { questionId: currentQuestion.id, selectedAnswerId: answerId, isCorrect }])
    if (isCorrect) setScore(prev => prev + 1)
  }

  const nextQuestion = () => {
    setCurrentIndex(prev => prev + 1)
  }

  const restartQuiz = () => {
    setCurrentIndex(0)
    setAnswers([])
    setScore(0)
  }

  return { currentQuestion, currentIndex, answers, score, answerQuestion, nextQuestion, restartQuiz }
}