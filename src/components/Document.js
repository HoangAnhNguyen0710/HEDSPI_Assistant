import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { NavLink } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Document = (props) => {
  const document = props.document;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="lg:m-4 mt-0 p-3 rounded-lg border border-gray-300">
      <div className="p-3 py-1">
        <div className="text-base font-semibold flex justify-between w-full">
          <NavLink to={`/documents/${document.id}`}><span className="uppercase">{document.title}</span></NavLink>
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
        <div className="py-3 text-sm opacity-60 flex">
        {document.author !== null ?  <span className="font-semibold pr-2">{document.author.name}</span> : <></>}
           <span>{moment(document.createdAt).format(('MMMM Do YYYY, h:mm a'))}</span>
        </div>
      </div>
      <div className="p-3 py-0 flex flex-wrap w-full">
        <div
          className="p-2 py-1 mr-2 mb-2 rounded-md text-xs bg-main text-white w-fit"
        >
        {document.subject === null ? <></> : <><ComputerOutlinedIcon /> {document.subject.name}</>}
        </div>
        <div
          className="p-2 py-1 mb-2 rounded-md text-xs bg-gray-500 text-white w-fit"
        >
          <ComputerOutlinedIcon /> {document.program}
        </div>
      </div>
      <div className="p-3">
        <span className="py-3 text-xs flex items-center">
        <SchoolOutlinedIcon /> <span className="px-2 truncate" dangerouslySetInnerHTML={{__html:   document.description.length > 100 ? "Chưa có mô tả, hãy xem bài viết đầy đủ" :  document.description}}></span>
        </span>
      </div>
      <span className="p-3 flex items-center">
        <FavoriteIcon /> <span className="px-1">{document.likes.length}</span>
        <span className="px-2"></span>
        <ChatBubbleOutlineOutlinedIcon /> <span className="px-1">{document.comments.length}</span>
      </span>
      <div className="text-right">
      <NavLink to={`/documents/${document.id}`}><span className="text-sm opacity-80">Xem thêm ...</span></NavLink>
      </div>
    </div>
  );
};

export default Document;
