/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { MutatingDots } from "react-loader-spinner";


const Loader = (props) => {

  return (
    <>
      <div
        id="preloader"
        className="w-full bg-white h-full fixed top-0 right-0 bottom-0 left-0 z-20 flex items-center justify-center"
      >
        <MutatingDots color="#06b6d4" height={80} width={80} />
      </div>
    </>
  );
};

export default Loader;
