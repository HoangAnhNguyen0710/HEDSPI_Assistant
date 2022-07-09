import React from 'react'
import Footer from './Footer';
import NavBar from './NavBar';

const PageLayout = (props) => {

  return (
    <div className="flex">
        <div className='w-full font-mono'>
        <NavBar/>
           {props.page}
        <Footer/>
        </div>
    </div>
  )
}

export default PageLayout;