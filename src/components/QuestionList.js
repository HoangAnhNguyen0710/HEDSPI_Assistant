import React from "react";
import Question from "./Question";
import { useSelector } from "react-redux/es/exports";

const QuestionList = () => {
  const questionList = useSelector((state) => state.question.value);

  return (
    <div className="flex w-full flex-wrap p-3">
      {questionList.map((question) => (
        <div
          className="w-full flex items-center justify-center md:w-1/2 py-3 h-full"
          key={question.id}
        >
          <Question question={question} />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
