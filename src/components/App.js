import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((res) => res.json())
    .then((questions) => setQuestions(questions));
  },[]);

  function AddQuestion(quesion) {
    setQuestions([...questions, quesion]);
  }

  function deleteQuestion(deleteQuestion) {
    const updatedQuestionList = questions.filter((question) => question.id !== deleteQuestion.id);
    setQuestions(updatedQuestionList);
  }

  function updatedCorrectAnswer(updatedQuestion) {
    const updatedAnswerIndex = questions.map((question) => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    });
    setQuestions(updatedAnswerIndex);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={AddQuestion} /> 
        ): (
           <QuestionList 
            questions={questions}
            onDeleteQuestion={deleteQuestion}
            onCorrectAnswerUpdate={updatedCorrectAnswer}
           />
          )}
    </main>
  );
}

export default App;
