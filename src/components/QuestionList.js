import React from 'react'
import Question from './Question'

const QuestionList = () => {
   const question = {
      doc_id:"",
      title: "Hỏi về Jobfair Sun tháng 9",
      author: "Nguyễn Hải Dương",
      date_created: "05/08/2022",
      cat_id: "",
      cat_name: ["Jobfair", "Naitei"],
      description: "Tổng hợp lý thuyết + các ví dụ và lời giải đầy đủ từ chương I đến chương IV #database #csdl",
      seen_num: 200,
      likes_num: 150,
      comments_num: 200
    }
  return (
    <div className='flex w-full flex-wrap p-3'>
        <div className='w-full flex items-center justify-center md:w-1/2 py-3 h-full'>
             <div className='flex items-center justify-center'>
                <Question question={question}/>
             </div>
        </div>
        <div className='w-full flex items-center justify-center md:w-1/2 py-3 h-full'>
             <div className='flex items-center justify-center'>
                <Question question={question}/>
             </div>
        </div>
        <div className='w-full flex items-center justify-center md:w-1/2 py-3 h-full'>
             <div className='flex items-center justify-center'>
                <Question question={question}/>
             </div>
        </div>
        <div className='w-full flex items-center justify-center md:w-1/2 py-3 h-full'>
             <div className='flex items-center justify-center'>
                <Question question={question}/>
             </div>
        </div>
    </div>
  )
}

export default QuestionList