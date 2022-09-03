import React from "react";
import logo from "../assets/img/logo/hedspi-logo.jpg";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import TopicIcon from "@mui/icons-material/Topic";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import InfoIcon from "@mui/icons-material/Info";

const Footer = () => {
  return (
    <div className="p-6 md:p-10 bg-main flex flex-col w-full">
      <div className="flex md:justify-between flex-wrap">
        <a
          href="/"
          className="w-full md:w-1/6 flex items-center justify-center"
        >
          <img
            alt="HEDSPI LOGO"
            src={logo}
            className="rounded-full w-1/3 md:w-fit"
          />
        </a>
        <div className="flex flex-col px-4 w-1/2 md:w-1/3">
          <span className="font-semibold text-white text-xl flex items-center  py-2">
            <ContactSupportOutlinedIcon /> <span className="pl-2">Contact</span>
          </span>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="https://www.facebook.com/hoanh.hk0710/"
          >
            <FacebookOutlinedIcon />{" "}
            <span className="pl-2">Hoang Anh Nguyen</span>
          </a>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="https://www.facebook.com/uonghongminhh"
          >
            <FacebookOutlinedIcon />{" "}
            <span className="pl-2">Uong Hong Minh</span>
          </a>
          <div className="flex">
            <a
              rel="stylesheet"
              className="font-semibold text-white flex items-center py-2"
              href="/"
            >
              <AttachEmailOutlinedIcon /> <span className="pl-2"></span>
            </a>
            <a
              rel="stylesheet"
              className="font-semibold text-white flex items-center py-2"
              href="/"
            >
              <InstagramIcon /> <span className="pl-2"></span>
            </a>
            <a
              rel="stylesheet"
              className="font-semibold text-white flex items-center py-2"
              href="/"
            >
              <LocalPhoneIcon /> <span className="pl-2"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-col px-4 w-1/2 md:w-1/3 pl-20">
          <span className="font-semibold text-white text-xl flex items-center py-2">
            <MenuBookIcon /> <span className="pl-2">Menu</span>
          </span>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="/"
          >
            <HomeIcon /> <span className="pl-2">Trang chủ</span>
          </a>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="/documents"
          >
            <TopicIcon /> <span className="pl-2">Tài liệu</span>
          </a>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="/reviews"
          >
            <ChatBubbleOutlineIcon /> <span className="pl-2">Review</span>
          </a>
          <a
            rel="stylesheet"
            className="font-semibold text-white flex items-center py-2"
            href="/questions"
          >
            <InfoIcon /> <span className="pl-2">Q&A</span>
          </a>
        </div>
      </div>
      <div className="text-center text-white font-medium my-3">
        {/* @2022 HEDSPI試験サポート. All right reserved */}
        @2022 HEDSPI Assistant. All right reserved
      </div>
    </div>
  );
};

export default Footer;
