import { useState } from "react";
import { questions } from "./questions";
import QuestionCard from "./components/QuestionCard";
import ResultTable from "./components/ResultsTable";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index: number) => {
    const correct = questions[currentIndex].correctIndex;

    // kohene tagasiside
    if (index === correct) {
      alert("Õige vastus!");
    } else {
      alert("Vale vastus!");
    }

    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const results = questions.map((q, i) => {
    const selectedIndex = answers[i];
    const isCorrect = selectedIndex === q.correctIndex;

    return {
      question: q.question,
      selected: q.options[selectedIndex],
      correct: q.options[q.correctIndex],
      isCorrect,
    };
  });

  const score = results.filter((r) => r.isCorrect).length;

  let message = "";
  if (score === questions.length) {
    message = "Suurepärane tulemus!";
  } else if (score >= 2) {
    message = "Tubli töö!";
  } else {
    message = "Proovi uuesti!";
  }

  return (
    <div className="app">
      <h1>Viktoriin</h1>

      {!finished ? (
        <QuestionCard
          question={questions[currentIndex]}
          onAnswer={handleAnswer}
        />
      ) : (
        <>
          <h2>Skoor: {score} / {questions.length}</h2>
          <h3>{message}</h3>
          <ResultTable results={results} />
        </>
      )}
    </div>
  );
}

export default App;