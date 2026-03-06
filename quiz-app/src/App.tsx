import { useState } from "react";
import { questions, Question } from "./questions";
import QuestionCard from "./components/QuestionCard";
import ResultsTable from "./components/ResultsTable";
import "./styles/theme.css";

type AnswerRecord = {
  question: string;
  selected: string;
  isCorrect: boolean;
};

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (optionIndex: number) => {
    if (finished) return;

    const isCorrect = optionIndex === currentQuestion.correctIndex;
    const selectedText = currentQuestion.options[optionIndex];

    setAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: selectedText,
        isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((s) => s + 1);
      setFeedback("Õige vastus! 🎉");
    } else {
      setFeedback(
        `Vale vastus. Õige vastus oli: ${
          currentQuestion.options[currentQuestion.correctIndex]
        }`
      );
    }

// Liigu järgmise küsimuse juurde väikese viitega
    setTimeout(() => {
      setFeedback(null);
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
    }, 1200);
  };

  const getFinalMessage = () => {
    const max = questions.length;
    const ratio = score / max;

    if (ratio === 1) return "Väga muljetavaldav! Sul on statistika ja faktid väikse sõrme sees.";
    if (ratio >= 0.66) return "Väga hea tulemus! Väike lihv ja oledki ekspert.";
    if (ratio >= 0.33) return "Päris hea algus – potentsiaali on, jätka avastamist.";
    return "Iga ekspert alustab nullist. Tähtis on huvi ja järjepidevus.";
  };
return (
    <div className="app">
      <header className="app-header">
        <h1>Eesti Statistika viktoriin</h1>
        <p className="subtitle">Testi oma teadmisi Eesti ja statistika kohta.</p>
      </header>

      {!finished && (
        <main>
          <div className="status-bar">
            <span>
              Küsimus {currentIndex + 1} / {questions.length}
            </span>
            <span>Punktid: {score}</span>
          </div>

          <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />

          {feedback && <div className="feedback">{feedback}</div>}
        </main>
      )}

{finished && (
        <section className="results">
          <h2>Tulemused</h2>
          <ResultsTable answers={answers} />
          <div className="final-score">
            <p>
              Lõppskoor: {score} / {questions.length}
            </p>
            <p className="final-message">{getFinalMessage()}</p>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;