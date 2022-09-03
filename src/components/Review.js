import React, { useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Chip, Dialog, DialogContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";
import ReviewDetail from "./ReviewDetail";

const Review = (props) => {

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const review = props.review;

  return (
    <div className="w-full ml-3 my-6 mt-0 pb-3 p-2 rounded-lg border border-gray-300 flex flex-col">
      <div className=" px-6 flex items-center">
        <div className="text-sm flex flex-col w-full">
          <span className="font-semibold py-1 uppercase">{review.title}</span>
        <span className="flex text-xs opacity-60 py-1 justify-between">
          {review.author !== null ? (
            <>
              <div className="text-sm flex flex-col px-3 w-fit">
                <span className="font-semibold">
                  {review.author.name} {review.author.schoolyear}
                </span>
              </div>
            </>
          ) : (
            <>Nguyen Hoang Anh</>
          )}
          <span className="px-1">-- {moment(review.createdAt).format(('MMMM Do YYYY, h:mm:ss a'))} --</span>
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
          <RemoveRedEyeIcon /> <span className="px-1">{review.seen_num}</span>
          <span className="px-2"></span>
          <FavoriteIcon /> <span className="px-1">{review.likes_num}</span>
          <span className="px-2"></span>
          <StarIcon /> <span className="px-1">{review.rating}/5</span>
        </span>
        <div className="text-right">
          <button className="text-sm opacity-80" onClick={handleOpenDialog}>Xem thêm...</button>
        </div>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true}>
        <DialogContent>
          <div className="flex items-center justify-center w-full">
            <ReviewDetail review={review}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Review;
