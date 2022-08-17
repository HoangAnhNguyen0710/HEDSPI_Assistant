import React from 'react'
import Review from './Review'

const ReviewList = (props) => {

  const review = {
    author_id: "",
    author_avatar: "",
    author: "Nguyen Hoang Anh",
    author_schoolyear: "K64",
    type: "Review học phần",
    article: "Cơ sở dữ liệu",
    time: 5,
    description: "Một chút review về môn này",
    seen_num: 200,
    likes_num: 150,
    rating: 4.1
  }
  return (
    <div className='flex w-full flex-wrap p-3'>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Review review={review}/>
        </div>
    </div>
  )
}

export default ReviewList