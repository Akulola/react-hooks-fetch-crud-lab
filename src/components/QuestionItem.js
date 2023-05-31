import React from "react";

function QuestionItem({ question, DeleteQuestion, onCorrectAnswerUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function deleteQuestion() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
    .then((res) => res.json())
    .then(() => DeleteQuestion(question));
  }
  function updatedCorrectAnswer(event) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correctIndex: event.target.value,
      }),
    })
      .then((res) => res.json())
      .then((questionCorrectIndexUpdate) => onCorrectAnswerUpdate(questionCorrectIndexUpdate));
  }
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={updatedCorrectAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={deleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
