import React from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Divider, IconButton, Modal, Rating, Typography } from '@mui/material';
import avatar from "../assets/img/anhthe.png";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined';
import { Box } from '@mui/system';

const Review = (props) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const value = 5;
  return (
    <div className='w-full my-6 mx-4 mt-0 pb-3 rounded-lg border border-gray-300 flex flex-col'>
          <div className='p-3 px-6 flex items-center'>
          <Avatar sx={{ width: 32, height: 32 }} src={avatar}></Avatar>
            <div className='text-sm flex flex-col px-3 w-full'>
              <span className='font-semibold'>Nguyen Hoang Anh</span>
              <span className='font-normal opacity-60'>K64</span>
            </div>
            {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
        </div>
        <Divider/>
        <div className='py-3 px-6  flex'>
            <div className='text-xl font-semibold uppercase'><a href='/'>Xây dựng chương trình dịch</a></div>
            {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
        </div>
        <span className='p-3 px-6 pt-0 rounded-md text-xs flex items-center'>
            <span className='pr-3'><FolderSpecialIcon/> </span>
            <Rating name="read-only" value={value} readOnly />
          </span>
        <div className=' px-3'>
        <div className='p-3'>
          <p className=' text-sm box-border overflow-hidden flex items-center'>
            <SchoolOutlinedIcon/> <span className='px-2'>Một chút review môn này...</span>
          </p>
        </div>
        <div className='p-3 pb-0 flex'>
          <span className='flex items-center p-3 pl-0'><FavoriteIcon/> 50</span>
          <span className='flex items-center p-3 pl-0'><RemoveRedEyeOutlined/> 70</span>
        </div>
        <div className='text-right'><button className='text-sm opacity-80' onClick={handleOpen}>Xem thêm...</button></div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='w-full h-fit flex justify-center'>
        <div className='max-w-fit my-6 mx-4 mt-0 pb-3 rounded-lg border border-gray-300 flex flex-col bg-white'>
          <div className='p-3 px-6 flex items-center'>
          <Avatar sx={{ width: 32, height: 32 }} src={avatar}></Avatar>
            <div className='text-sm flex flex-col px-3 w-full'>
              <span className='font-semibold'>Nguyen Hoang Anh</span>
              <span className='font-normal opacity-60'>K64</span>
            </div>
            {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
        </div>
        <Divider/>
        <div className='py-3 px-6  flex'>
            <div className='text-xl font-semibold uppercase'><a href='/'>Xây dựng chương trình dịch</a></div>
            {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
        </div>
        <span className='p-3 px-6 pt-0 rounded-md text-xs flex items-center'>
            <span className='pr-3'><FolderSpecialIcon/> </span>
            <Rating name="read-only" value={value} readOnly />
          </span>
        <div className=' px-3'>
        <div className='p-3'>
          <p className=' text-sm box-border overflow-hidden flex items-center'>
            <SchoolOutlinedIcon/> <span className='px-2'>Nhiều chút review môn này...</span>
          </p>
        </div>
        <div className='p-3 pb-0 flex'>
          <span className='flex items-center p-3 pl-0'><FavoriteIcon/> 50</span>
          <span className='flex items-center p-3 pl-0'><RemoveRedEyeOutlined/> 70</span>
        </div>
        <div className='text-right'><button className='text-sm opacity-80' onClick={handleClose}>Đóng</button></div>
        </div>
        </div>
    </div>
    
       
      </Modal>
    </div>
    
  )
}

export default Review