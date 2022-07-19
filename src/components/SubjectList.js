import React from 'react'
import Subject from './Subject'

const SubjectList = () => {
  return (
    <div className='flex w-full flex-wrap p-3'>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
        <div className='w-full flex items-center justify-center'>
            <Subject/>
        </div>
    </div>
  )
}

export default SubjectList