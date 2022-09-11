/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import moment from "moment";
import { Chip } from "@mui/material";
import CreateCommentForm from "./Form/CreateCommentForm";
import { getQuestionCmt } from "../service/api";
import { checkHasLike, disLike, postLike } from "../service/api";
import { useSelector } from "react-redux";

const QuestionDetail = (props) => {
  const question = props.question;
  const [commentList, setCommentList] = useState();
  const [updateData, setUpdateData] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState();
  const user = useSelector((state)=> state.user.value);
  useEffect(()=> {
     getQuestionCmt(question.id).then((res) => {
      setCommentList(res.data)})
     .catch((err) => console.log(err));
  }, [updateData]);

  useEffect(() => {
    setTimeout(()=> {
      if(user !== null){
        checkHasLike(user.id, question.id, "question")
        .then((res) => {
          setIsLiked(true);
          console.log(res)
          setLikeId(res.data.id);
        })
        .catch((err) => setIsLiked(false))
      }
    }, 1000)
  }, [])

  const LikeOrDislike = () => {
    if(user !== null){
      if(isLiked === false){
        postLike(user, question, "question")
        .then((res)=> {
          setLikeId(res.data.id);
          setIsLiked(true);
          props.setLikeNum(props.likeNum + 1);
        });
      } else {
        disLike(likeId)
        .then(() => {
          setIsLiked(false)
          props.setLikeNum(props.likeNum - 1);
        })
      }
    }
    else alert("Bạn phải đăng nhập để thực hiện chức năng này !");
  }

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
      <span className="p-3 pl-0 flex items-center hover:cursor-pointer w-fit"  onClick={LikeOrDislike}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon/>} <span className="px-1">{props.likeNum}</span>
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
