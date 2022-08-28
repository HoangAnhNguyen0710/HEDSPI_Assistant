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
import moment from "moment";

const Review = (props) => {
  const review = props.review;

  return (
    <div className="w-full ml-3 my-6 mt-0 pb-3 p-2 rounded-lg border border-gray-300 flex flex-col">
      <div className=" px-6 flex items-center">
        <div className="text-sm flex flex-col w-full">
          <span className="font-semibold py-1 uppercase">{review.title}</span>
        <span className="flex text-xs opacity-60 py-1">
          {review.author !== null ? (
            <>
              <div className="text-sm flex flex-col px-3 w-full">
                <span className="font-semibold">
                  {review.author.name} {review.author.schoolyear}
                </span>
              </div>
            </>
          ) : (
            <>Nguyen Hoang Anh</>
          )}
          <span className="px-1">-- {moment(review.createdAt).format(('MMMM Do YYYY, h:mm:ss a'))}</span>
        </span>
        </div>
      </div>
      <div className=" px-6 flex flex-wrap">
        {review.topic.map((topic) => (
          <span
            className="px-2 py-1 ml-0 m-2 bg-main text-white w-fit rounded-md text-sm"
            key={topic.toString()}
          >
            <ComputerOutlinedIcon /> {topic}
          </span>
        ))}
      </div>

      <div className=" px-3">
        <div className="p-3">
          <p className=" text-sm box-border overflow-hidden flex items-center">
            <SchoolOutlinedIcon />{" "}
            <span className="px-2">{review.description}</span>
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
          <button className="text-sm opacity-80">Xem thêm...</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
