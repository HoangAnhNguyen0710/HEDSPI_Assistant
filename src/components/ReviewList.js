import React from 'react'
import Review from './Review'

const ReviewList = () => {
  return (
    <div className='flex w-full flex-wrap p-3'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
            <Review/>
        </div>
    </div>
  )
}

export default ReviewList