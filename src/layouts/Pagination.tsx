import { Pagination } from '@mui/material'
import React from 'react'


const PagePagination = (props: any) => {
const handlePageClick = (e: any, value: number) => {
        props.setPageNum(value)
}
  return (
    <div className='flex justify-center p-3 my-2'>
    <Pagination
    count={Math.round(props.totalPage) < props.totalPage ? Math.round(props.totalPage) + 1 : Math.round(props.totalPage)}
    page={props.currentPage}
    onChange={handlePageClick}
    />
    </div>
  )
}

export default PagePagination;