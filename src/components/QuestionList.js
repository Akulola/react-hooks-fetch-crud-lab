import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDeleteQuestion, onCorrectAnswerUpdate} ) {
    
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
        {questions.map((question) => (
          <QuestionItem 
          question={question}
           key={question.id} 
           DeleteQuestion={onDeleteQuestion}
           onCorrectAnswerUpdate={onCorrectAnswerUpdate}
           />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
