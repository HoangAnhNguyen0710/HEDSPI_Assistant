/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import moment from "moment";
import { Chip } from "@mui/material";
import CreateCommentForm from "./Form/CreateCommentForm";
import { getQuestionCmt } from "../service/api";

const QuestionDetail = (props) => {
  const question = props.question;
  const [commentList, setCommentList] = useState();
  const [updateData, setUpdateData] = useState(true);
  useEffect(()=> {
     getQuestionCmt(question.id).then((res) => {
      // console.log(res.data);  
      setCommentList(res.data)})
     .catch((err) => console.log(err));
  }, [updateData]);
  return (
    <div className="w-full p-2 flex flex-col max-w-xl">
      <div className="font-semibold py-1 text-lg uppercase">{question.title}</div>
      <div className="py-1 text-sm flex items-center flex-wrap">
        <span className="pr-2">
          <RateReviewIcon />
        </span>
        {/* <span>{question.author}</span> */}
        <span className="pr-2">Hoang Anh Nguyen</span>
        <span>
          ---{moment(question.createdAt).format("MMMM Do YYYY, h:mm:ss a")}---
        </span>
      </div>
      <div className="py-3">
        {question.topic.map((topic) => (
          <span className="mr-2" key={topic.toString()}>
            <Chip icon={<SellOutlinedIcon />} label={topic} />
          </span>
        ))}
      </div>
      <div className="my-4 p-4 rounded-md border-2 overflow-y-auto" dangerouslySetInnerHTML={{__html: question.description}}>
      </div>
      <span className="p-3 pl-0 flex items-center">
        <RemoveRedEyeIcon /> <span className="px-1">{question.views}</span>
        <span className="px-2"></span>
        <FavoriteIcon /> <span className="px-1">{question.likes}</span>
        {/* <span className="px-2"></span>
        <ChatBubbleIcon /> <span className="px-1">{question.CommentNum}</span> */}
      </span>
      <span className="text-md font-medium py-2">Bình luận ({commentList !== undefined ?  commentList.length : <>0</>})</span>

      {commentList !== undefined ? commentList.map((comment) => 
        <div className="my-4 p-4 rounded-md border-2 w-4/5" key={comment.id}>
        <div className="flex flex-wrap">
        <span className="font-medium pr-2">{comment.user ? comment.user.name : ""}</span>
        <span>
          ---{moment(comment.createdAt).format("MMMM Do YYYY")}---
        </span>
        </div>
        <div className="py-2">
        {comment.content}
        </div>
      </div>) : <></>}
      <div className="w-4/5 py-4 rounded-md">
        <CreateCommentForm infor={question} type="question" updateData={updateData} setUpdateData = {setUpdateData}/>
      </div>
    </div>
  );
};

export default QuestionDetail;
