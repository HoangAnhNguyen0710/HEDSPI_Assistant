import React from 'react'
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Question = (props) => {
  return (
    <div className="w-full p-3 m-3 shadow-lg min-h-fit flex flex-col justify-between hover:scale-105 transition ease-in-out delay-150 duration-300 h-full">
          <a href='/' className='p-3 text-slate-50 bg-purple-400'><BookmarkOutlinedIcon/> Chuyện naitei </a>
          <a href='/' className="text-xl font-medium uppercase p-3"><ContactSupportOutlinedIcon/> Tại sao HD lại 4.0 ?</a>
          <div className='p-3 flex'>
            <span className='pr-3 block w-1/3'><FavoriteBorderOutlinedIcon/> 50</span>
            <span className='pr-3 block w-1/3'><RemoveRedEyeOutlinedIcon/> 50</span>
            <span className='pr-3 block w-1/3'><ChatOutlinedIcon/> 50</span>
          </div>
          <div className='text-right p-3 text-base'><a href='/'>Xem 50 câu trả lời</a></div>
    </div>
  )
}

export default Question