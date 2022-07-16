import React from 'react'
import Question from './Question'

const QuestionList = () => {
  return (
    <div className='flex py-6 flex-wrap h-fit'>
        <div className='w-full md:w-1/2 h-full'>
             <div className='flex items-center justify-center'>
                <Question/>
             </div>
        </div>
        <div className='w-full md:w-1/2 h-full'>
             <div className='flex items-center justify-center'>
                <Question/>
             </div>
        </div>
        <div className='w-full md:w-1/2 h-full'>
             <div className='flex items-center justify-center'>
                <Question/>
             </div>
        </div>
        <div className='w-full md:w-1/2 h-full'>
             <div className='flex items-center justify-center'>
                <Question/>
             </div>
        </div>
    </div>
  )
}

export default QuestionList