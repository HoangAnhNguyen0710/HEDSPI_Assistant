import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useEffect } from "react";
import axiosClient from "../config/axiosClient";
import { setSubjects } from "./subjects";
import { MutatingDots } from "react-loader-spinner";
import { setQuestions } from "./question";
// import { useSelector } from "react-redux/es/exports";
const Loader = (props) => {
  // const subject = useSelector((state)=> state.subject.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosClient.get("/subject/all")
    .then((res) => {
      const subject = res.data;
      dispatch(setSubjects(subject));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(()=>{
    axiosClient.get('/question/all')
    .then((res) => dispatch(setQuestions(res.data)))
    .catch((err) => console.log(err));
  },[])

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
