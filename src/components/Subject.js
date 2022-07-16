import React from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';

const Subject = () => {
  return (
    <div className='w-full m-3 mt-0 p-3 rounded-lg border border-gray-300 flex flex-col'>
        <div className='p-3 flex'>
            <div className='text-xl font-semibold'><a href='/'>Xây dựng chương trình dịch</a></div>
            {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
        </div>
        <div className='p-3'>
          <span className='py-3 rounded-md text-xs'><ComputerOutlinedIcon/> Cơ sở ngành</span>
        </div>
        <div className='p-3'>
          <span className='py-3 text-xs'><SchoolOutlinedIcon/> Kì 6/10</span>
        </div>
    </div>
  )
}

export default Subject