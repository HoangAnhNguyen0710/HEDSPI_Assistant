import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../slices/loader";
// import { NavLink } from "react-router-dom";


const PageLayout = (props) => {
  //loader 1s
  const [loader, setLoader] = useState(true);
  // const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>

      <div className="flex">
        <div className="w-full font-sans">
          <NavBar />
          <div className="py-12 box-border"></div>
          {loader ? (
            <Loader/>
          ) : (
            <div className="sm:px-2 md:px-6 lg:px-10">
            {props.page}
            </div>
          )}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
