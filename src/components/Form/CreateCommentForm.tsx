import { Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { postComment } from '../../services/api';

const CreateCommentForm = (props: any) => {
  const user = useSelector((state: any) => state.user.value);
  const [inputValue, setInputValue] = useState("");
//   const type = props.type;
  const infor = props.infor;

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const comment = {
        content: inputValue,
        user: user,
        [props.type]: infor,
    }
    console.log(comment);
    postComment(comment)
    .then(()=>{
        alert("comment success!");
        setInputValue("");
        props.setUpdateData(!props.updateData)
    })
    .catch((err: any) => {
        console.log(err);
    })
  }
  return (
    <>
    {user !== null ?
        <form onSubmit={handleSubmit} className='w-full'>
        <TextField
          fullWidth
          id="filled-multiline-static"
          label="Để lại bình luận ở đây"
          multiline
          rows={4}
          value={inputValue}
          onChange={handleChange}
        />
        <Button variant='contained' type='submit' sx={{mt:2}}>Bình luận</Button>
        </form>
        :
        <div className='flex flex-col items-center border-2 rounded-md'>
        <span className='my-2'>Bạn cần đăng nhập để thực hiện chức năng này</span>
        <NavLink to="/login" className="p-2 m-2 bg-blue-500 text-white shadow-sm rounded-md">Đăng nhập</NavLink>
        </div>

    }
    </>
  )
}

export default CreateCommentForm