/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import moment from "moment";
import { Chip } from "@mui/material";
import CreateCommentForm from "./Form/CreateCommentForm";
import { checkHasLike, disLike, getReviewCmt, postLike } from "../services/api";
import { useSelector } from "react-redux";

const ReviewDetail = (props) => {
  const review = props.review;
  const [commentList, setCommentList] = useState();
  const [updateData, setUpdateData] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeId, setLikeId] = useState();
  const user = useSelector((state)=> state.user.value);
  useEffect(()=> {
     getReviewCmt(review.id).then((res) => {
      setCommentList(res.data)})
     .catch((err) => console.log(err));
  }, [updateData]);

  useEffect(() => {
    setTimeout(()=> {
      if(user !== null){
        checkHasLike(user.id, review.id, "review")
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
        postLike(user, review, "review")
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
      <div className="font-semibold py-1 text-lg uppercase">{review.title}</div>
      <div className="py-1 text-sm flex items-center flex-wrap">
        <span className="pr-2">
          <RateReviewIcon />
        </span>
        {/* <span>{review.author}</span> */}
        <span className="pr-2">Hoang Anh Nguyen</span>
        <span>
          ---{moment(review.createdAt).format("MMMM Do YYYY, h:mm:ss a")}---
        </span>
      </div>
      <div className="py-3">
        {review.topic.map((topic) => (
          <span className="mr-2" key={topic.toString()}>
            <Chip icon={<SellOutlinedIcon />} label={topic} />
          </span>
        ))}
      </div>
      <div className="my-4 p-4 rounded-md border-2 overflow-y-auto" dangerouslySetInnerHTML={{__html: review.description}}>
      </div>
      <span className="p-3 pl-0 flex items-center hover:cursor-pointer w-fit" onClick={LikeOrDislike}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon/>} <span className="px-1">{props.likeNum}</span>
        {/* <span className="px-2"></span>
        <ChatBubbleIcon /> <span className="px-1">{review.CommentNum}</span> */}
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
        <CreateCommentForm infor={review} type="review" updateData={updateData} setUpdateData = {setUpdateData}/>
      </div>
    </div>
  );
};

export default ReviewDetail;
