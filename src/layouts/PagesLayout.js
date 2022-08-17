import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useEffect, useState } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";
import Loader from "../slices/loader";
// import { NavLink } from "react-router-dom";


const PageLayout = (props) => {
  //loader 1s
  const [loader, setLoader] = useState(true);
  const [isLogin, setLogin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      <Loader/>
      <div className="flex">
        <div className="w-full font-sans">
          <NavBar />
          <div className="py-12 box-border"></div>
          {/* <div className="flex justify-between mx-10">
           
          </div> */}
          {loader ? (
            <div
              id="preloader"
              className="w-full bg-white h-full fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center"
            >
              <MutatingDots color="#06b6d4" height={80} width={80} />
            </div>
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
