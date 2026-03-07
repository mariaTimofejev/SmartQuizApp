import React from "react";

type ResultRow = {
  question: string;
  selected: string;
  correct: string;
  isCorrect: boolean;
};

type ResultTableProps = {
  results: ResultRow[];
};

const ResultTable: React.FC<ResultTableProps> = ({ results }) => {
  return (
    <div className="result-table">
      <h2>Tulemused</h2>

      <table>
        <thead>
          <tr>
            <th>Küsimus</th>
            <th>Sinu vastus</th>
            <th>Õige vastus</th>
            <th>Tulemus</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, index) => (
            <tr key={index}>
              <td>{row.question}</td>
              <td>{row.selected}</td>
              <td>{row.correct}</td>
              <td style={{ color: row.isCorrect ? "green" : "red" }}>
                {row.isCorrect ? "Õige" : "Vale"}
              </td>
            </tr>
          ))}
    </tbody>
  </table>

  <style>{`
    .result-table {
      margin-top: 2rem;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }

    th {
      background: #f2f2f2;
    }
  `}</style>
</div>
  );
};

export default ResultTable;