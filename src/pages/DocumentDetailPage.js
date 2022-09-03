import { Avatar, Breadcrumbs, Card, Dialog, DialogContent } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../layouts/PagesLayout";
import DocumentImageDetail from "../components/DocumentImageDetail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateCommentForm from "../components/Form/CreateCommentForm";
// import { useState, useEffect } from "react";
// import { storage } from "../config/firebaseConfig";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import ImageUploader from "../components/ImageUpload";
const DocumentDetailPage = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImage, setDialogImage] = useState(null);
  const [commentList, setCommentList] = useState();
  const [updateData, setUpdateData] = useState(true);
  const handleOpenDialog = (item) => {
    setOpenDialog(true);
    setDialogImage(item);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  // const [imageList, setImageList] = useState([]);
  // const imageListRef = ref(storage, "/images")
  // useEffect(()=>{
  //   listAll(imageListRef).then((res)=> {
  //     console.log(res);
  //     res.items.forEach((item)=> {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev)=> [...prev, url]);
  //       })
  //     })
  //   });
  // }, []);
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ]
 
  const PageContent = (
    <>
      <div className="min-h-screen py-16 px-10">
      <div className="flex items-center justify-between w-full pb-6">
          <Breadcrumbs aria-label="breadcrumb">
            <div className="text-xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0">
              Đề thi C Intro 20192
            </div>
          </Breadcrumbs>
      </div>
      <div className="flex text-sm w-full py-2">
        <Avatar>H</Avatar> 
        <div className="flex flex-col items-center px-2">
           <span className="font-semibold">Nguyen Hoang Anh <span> K64 </span></span>
           <span className="px-1">-- {moment().format(('MMMM Do YYYY'))}--</span>
        </div>
      </div>
      <div className="w-full border-2 rounded-md my-4 p-4 overflow-y-auto">
        Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div className="flex flex-wrap w-full h-screen overflow-y-auto items-center">
      {itemData.map((item) => (
        <div className="flex-wrap w-1/2 md:w-1/3 lg:w-1/4 h-fit" onClick={()=>handleOpenDialog(item)}>
        <Card sx={{p: 1, m: 2, ml: 0, maxHeight: "256px", minHeight: "fit-content", display: "flex", alignItems: "center"}} variant="outlined">
          <img
            key={item.img}
            src={item.img}
            alt={item.img.toString()}
            loading="lazy"
            className="w-full h-full rounded-md"
          />
        </Card>
        </div>
      ))}
      </div>
      <span className="p-3 pl-0 flex items-center">
        <RemoveRedEyeIcon /> <span className="px-1"></span>
        <span className="px-2"></span>
        <FavoriteIcon /> <span className="px-1"></span>
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
        {/* <CreateCommentForm infor={} type="document" updateData={updateData} setUpdateData = {setUpdateData}/> */}
        <CreateCommentForm type="document" updateData={updateData} setUpdateData = {setUpdateData}/>
      </div>
      </div>
    <Dialog onClose={handleCloseDialog} open={openDialog} fullWidth={true}>
        <DialogContent>
         <div className="flex items-center justify-center w-full">
              <DocumentImageDetail image={dialogImage}/>
        </div>
        </DialogContent>
        </Dialog>
    </>
  );
  return <PageLayout page={PageContent} />;
};

export default DocumentDetailPage;
