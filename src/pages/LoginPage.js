import React from 'react'
import working from '../assets/img/working.jpg';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
        <div className="bg-white w-4/5 md:w-2/3 h-4/5 rounded-2xl flex items-center justify-center md:justify-between md:h-4/5 lg:h-4/5">
        <div className='hidden sm:block lg:w-2/3  bg-green-200 h-full rounded-tl-2xl rounded-bl-2xl'>
          <img alt='' src={working} className='h-full rounded-tl-2xl rounded-bl-2xl'/>
        </div>
        <div className='w-2/3 lg:w-1/3  mx-8'>
        <LoginForm/>
        </div>
        </div>
    </div>
  )
}

export default LoginPage