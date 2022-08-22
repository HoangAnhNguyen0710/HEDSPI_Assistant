import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
// import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import { Avatar } from "@mui/material";
import avatar from "../assets/img/anhthe.png";
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import RemoveRedEyeOutlined from '@mui/icons-material/RemoveRedEyeOutlined';
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarIcon from "@mui/icons-material/Star";

const Review = (props) => {
  const review = props.review;

  return (
    <div className="w-full my-6 mx-4 mt-0 pb-3 p-2 rounded-lg border border-gray-300 flex flex-col">
      <div className="p-3 px-6 flex items-center">
        <Avatar sx={{ width: 32, height: 32 }} src={avatar}></Avatar>
        <div className="text-sm flex flex-col px-3 w-full">
          <span className="font-semibold">{review.author}</span>
          <span className="font-normal opacity-60">
            {review.author_schoolyear}
          </span>
        </div>
        {/* <span className='p-3 rounded-md bg-purple-400 text-white text-xs'>Đại cương</span> */}
      </div>
      <div className="py-3 px-6 flex">
        <a
          href="/"
          className="px-2 py-1 rounded-md text-xs bg-main text-white w-fit"
        >
          <ComputerOutlinedIcon /> {review.article}
        </a>
        <span className="mx-2 px-1 py-1 rounded-md text-xs bg-gray-400 text-white w-fit flex items-center">
          <SchoolOutlinedIcon /> <span className="px-2">Kì {review.time}</span>
        </span>
      </div>

      <div className=" px-3">
        <div className="p-3">
          <p className=" text-sm box-border overflow-hidden flex items-center">
            <SchoolOutlinedIcon />{" "}
            <span className="px-2">{review.description}</span>
          </p>
        </div>
        <span className="p-3 flex items-center">
          <RemoveRedEyeIcon /> <span className="px-1">{review.seen_num}</span>
          <span className="px-2"></span>
          <FavoriteIcon /> <span className="px-1">{review.likes_num}</span>
          <span className="px-2"></span>
          <StarIcon /> <span className="px-1">{review.rating}/5</span>
        </span>
        <div className="text-right">
          <button className="text-sm opacity-80">Xem thêm...</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
