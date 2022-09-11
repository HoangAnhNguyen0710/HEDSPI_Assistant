import React, { useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Chip, Dialog, DialogContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import moment from "moment";
import ReviewDetail from "./ReviewDetail";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
const Review = (props) => {

  const [openDialog, setOpenDialog] = useState(false);
  
  const review = props.review;
  const [likeNum, setLikeNum] = useState(review.likes.length);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="w-full ml-3 my-6 mt-0 pb-3 p-2 rounded-lg border border-gray-300 flex flex-col">
      <div className=" px-6 flex items-center">
        <div className="text-sm flex flex-col w-full">
          <span className="font-semibold pt-3 uppercase">{review.title}</span>
        <span className="flex text-xs opacity-60 py-1 justify-between">
        <div className="py-3 text-sm opacity-60 flex">
        {review.author !== null ?  <span className="font-semibold pr-2">{review.author.name}</span> : <></>}
           <span>{moment(review.createdAt).format(('MMMM Do YYYY, h:mm a'))}</span>
        </div>
        </span>
        </div>
      </div>
      <div className=" px-6 flex flex-wrap">
        {review.topic.map((topic) => (
          <span
            className="m-2 ml-0 text-white w-fit"
            key={topic.toString()}
          >
            <Chip icon={<SellOutlinedIcon/>} label={topic} sx={{p: 1}}/>
          </span>
        ))}
      </div>

      <div className=" px-3">
        <div className="p-3">
          <p className=" text-sm box-border overflow-hidden flex items-center">
            <SchoolOutlinedIcon />{" "}
            <span className="px-2 truncate" dangerouslySetInnerHTML={{__html:   review.description.length > 100 ? "Chưa có mô tả, hãy xem bài viết đầy đủ" :  review.description}}></span>
          </p>
        </div>
        <span className="p-3 pt-2 pb-0 flex items-center">
          <FavoriteIcon /> <span className="px-1">{likeNum}</span>
          <span className="px-2"></span>
          <ChatBubbleOutlineOutlinedIcon /> <span className="px-1">{review.comments.length}</span>
        </span>
        <div className="text-right">
          <button className="text-sm opacity-80" onClick={handleOpenDialog}>Xem thêm...</button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true}>
        <DialogContent>
          <div className="flex items-center justify-center w-full">
            <ReviewDetail review={review} likeNum={likeNum} setLikeNum={setLikeNum}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Review;
