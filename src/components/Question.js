import React, { useState } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Chip, Dialog, DialogContent, Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import moment from "moment/moment";
import QuestionDetail from "./QuestionDetail";
const Question = (props) => {
  const question = props.question;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
            <span className="uppercase flex justify-center"><QuestionMarkIcon /> {question.title}</span>
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
        <span className="flex text-xs opacity-60 py-1">
          {question.author !== null ? (
            <>
              <div className="text-sm flex flex-col px-3 w-full">
                <span className="font-semibold">
                  {question.author.name} {question.author.schoolyear}
                </span>
              </div>
            </>
          ) : (
            <>Nguyen Hoang Anh</>
          )}
          <span className="px-1">-- {moment(question.createdAt).format(('MMMM Do YYYY, h:mm:ss a'))}</span>
        </span>
      </div>
      <div className="p-3 py-0 flex flex-col sm:flex-row flex-wrap">
        {question.topic.map((topic) => (
            <span
            className="m-2 ml-0 text-white w-fit"
            key={topic.toString()}
          >
            <Chip icon={<SellOutlinedIcon/>} label={topic} sx={{p: 1}}/>
          </span>
        ))}
      </div>
      <div className="p-3">
        <span className="py-3 text-xs">
          <SchoolOutlinedIcon /> <span className="px-2 truncate" dangerouslySetInnerHTML={{__html:   question.description.length > 100 ? "Chưa có mô tả, hãy xem bài viết đầy đủ" :  question.description}}></span>
        </span>
      </div>
      <span className="p-3 flex items-center">
        <RemoveRedEyeIcon /> <span className="px-1">{question.views}</span>
        <span className="px-2"></span>
        <FavoriteIcon /> <span className="px-1">{question.likes}</span>
        <span className="px-2"></span>
        <ChatBubbleIcon /> <span className="px-1">{question.CommentNum}</span>
      </span>
      <div className="text-right">
          <button className="text-sm opacity-80" onClick={handleOpenDialog}>Xem thêm...</button>
      </div>
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth={true}>
        <DialogContent>
          <div className="flex items-center justify-center w-full">
            <QuestionDetail question={question}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Question;
