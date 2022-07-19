import React from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Subject = () => {
  return (
    <div className='w-full m-3 mt-0 mr-0 p-3 rounded-lg border border-gray-300 flex flex-col'>
        <div className='p-3 py-1 flex flex-col'>
            <div className='text-base font-semibold flex justify-between w-full'>
              <a href='/'>Lý thuyết CSDL lớp thầy Phương</a>
              <button><MoreVertIcon/></button>
            </div>
            <div className='py-3 text-xs opacity-80'><span>Nguyễn Hải Dương</span> • <span>12/12/2020</span></div>
        </div>
        <div className='p-3 py-0 '>
          <a href='/' className='px-3 py-2 rounded-md text-xs bg-main text-white w-fit'><ComputerOutlinedIcon/> Cơ sở dữ liệu</a>
        </div>
        <div className='p-3'>
          <span className='py-3 text-xs'><SchoolOutlinedIcon/> Tổng hợp lý thuyết + các ví dụ và lời giải đầy đủ từ chương I đến chương IV
          <br/>#database #csdl
          </span>
        </div>
        <span className='p-3 flex items-center'><RemoveRedEyeIcon/> <span className='px-2'>200</span></span>
    </div>
  )
}

export default Subject