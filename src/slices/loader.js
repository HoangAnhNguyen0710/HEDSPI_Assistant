import React from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import axiosClient from '../config/axiosClient';
import { setSubjects } from './subjects';
const Loader = () => {
  const dispatch = useDispatch();
   useEffect(()=>{
   axiosClient.get('/subject/all')
   .then((res)=> {
        const subject = res.data;
        dispatch(setSubjects(subject));
        // console.log(subject);
   })
  }, []);
  return (
    <></>
  )
}

export default Loader