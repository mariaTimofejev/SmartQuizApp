import { type Question } from "../data/questions";

type Props = {
  question: Question;
  onAnswer: (index: number) => void;
};
const QuestionCard = ({ question, onAnswer }: Props) => {
  return (
    <div className="question-card">
      <h2>{question.question}</h2>
      <ul className="options">
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <button
              className="option-button"
              onClick={() => onAnswer(idx)}
              data-testid={`option-${idx}`}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;