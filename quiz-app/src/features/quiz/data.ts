import { type Question } from './type'

export const questions: Question[] = [
  {
    id: '1',
    text: 'Milline neist on Eesti rahvuslill?',
    answers: [
      { id: 'a', text: 'Sinilill', isCorrect: false },
      { id: 'b', text: 'Rukkilill', isCorrect: true },
      { id: 'c', text: 'Karikakar', isCorrect: false },
    ],
  },
  {
    id: '2',
    text: 'Kui Eesti meediaturg on väike, siis milline on kõige mõistlikum ärimudel?',
    answers: [
      { id: 'a', text: 'kõik sisu tasuta', isCorrect: false },
      { id: 'b', text: 'Tegutseda ainult Eestis ja mitte internetis', isCorrect: false },
      { id: 'c', text: 'Tellimused + reklaam + digilahendused', isCorrect: true },
    ],
  },
  {
    id: '3',
    text: 'Milline järv on pindalalt Eesti suurim?',
    answers: [
      { id: 'a', text: 'Ülemiste järv', isCorrect: false },
      { id: 'b', text: 'Võrtsjärv', isCorrect: false },
      { id: 'c', text: 'Peipsi järv', isCorrect: true },
    ],
  },
]