import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import moment from "moment";

const Document = (props) => {
  console.log(props.document);
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
    <div className="w-full m-4 mt-0 p-3 rounded-lg border border-gray-300 flex flex-col hover:scale-105 transition ease-in-out delay-150 duration-200">
      <div className="p-3 py-1 flex flex-col">
        <div className="text-base font-semibold flex justify-between w-full">
          <a href="/"><span className="uppercase">{document.title}</span></a>
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
          <span>{document.author}</span> • <span>{moment(document.createdAt).format(('MMMM Do YYYY, h:mm:ss a'))}</span>
        </div>
      </div>
      <div className="p-3 py-0 flex flex-wrap w-full">
        <a
          href="/"
          className="p-2 py-1 mr-2 mb-2 rounded-md text-xs bg-main text-white w-fit"
        >
        {document.subject === null ? <></> : <><ComputerOutlinedIcon /> {document.subject.name}</>}
        </a>
        <div
          className="p-2 py-1 mb-2 rounded-md text-xs bg-gray-500 text-white w-fit"
        >
          <ComputerOutlinedIcon /> {document.program}
        </div>
      </div>
      <div className="p-3">
        <span className="py-3 text-xs">
          <SchoolOutlinedIcon /> {document.description}
        </span>
      </div>
      <span className="p-3 flex items-center">
        <RemoveRedEyeIcon /> <span className="px-1">{document.views}</span>
        <span className="px-2"></span>
        <FavoriteIcon /> <span className="px-1">{document.likes}</span>
        <span className="px-2"></span>
        <StarIcon /> <span className="px-1">{document.rating}/5</span>
      </span>
    </div>
  );
};

export default Document;
