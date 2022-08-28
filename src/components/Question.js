import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import moment from "moment/moment";
const Question = (props) => {
  const question = props.question;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="w-full m-4 mt-0 p-3 rounded-lg border border-gray-300 flex flex-col hover:scale-105 transition ease-in-out delay-150 duration-200">
      <div className="p-3 py-1 flex flex-col">
        <div className="text-base font-semibold flex justify-between w-full">
          <a href="/">
            <span className="uppercase"><QuestionMarkIcon /> {question.title}</span>
          </a>
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>Chỉnh sửa</MenuItem>
            <MenuItem>Xóa (chỉ admin)</MenuItem>
          </Menu>
        </div>
        <div className="py-3 text-xs opacity-80">
          <span>{question.author}</span> • <span>{moment(question.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
      </div>
      <div className="p-3 py-0 flex flex-col sm:flex-row flex-wrap">
        {question.topic.map((topic) => (
          <span className="px-1 py-2" key={topic.toString()}>
            <a
              href="/"
              className="px-3 py-2 rounded-md text-xs bg-main text-white w-fit"
            >
              <ComputerOutlinedIcon /> {topic}
            </a>
          </span>
        ))}
      </div>
      <div className="p-3">
        <span className="py-3 text-xs">
          <SchoolOutlinedIcon /> {question.description}
        </span>
      </div>
      <span className="p-3 flex items-center">
        <RemoveRedEyeIcon /> <span className="px-1">{question.views}</span>
        <span className="px-2"></span>
        <FavoriteIcon /> <span className="px-1">{question.likes}</span>
        <span className="px-2"></span>
        <ChatBubbleIcon /> <span className="px-1">{question.CommentNum}</span>
      </span>
    </div>
  );
};

export default Question;
