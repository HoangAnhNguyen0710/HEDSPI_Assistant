import React, { useEffect, useState } from 'react'
import Question from './Question'
import { useSelector } from 'react-redux/es/exports'
import question from '../slices/question';
const QuestionList = () => {
  const questionList = useSelector((state) => state.question.value);
//   const [questionList, setQuestionList] = useState(null);
//   useEffect(() => {
//         setQuestionList(question);
//   }, []);
  return (
    <div className='flex w-full flex-wrap p-3'>
           {questionList.map((question) =>  
          <div className='w-full flex items-center justify-center md:w-1/2 py-3 h-full'>
              <Question question={question}/>
          </div>
    )}
    </div>
  )
}

export default QuestionList