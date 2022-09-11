/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Breadcrumbs,
  Card,
  Dialog,
  DialogContent,
} from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../layouts/PagesLayout";
import DocumentImageDetail from "../components/DocumentImageDetail";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateCommentForm from "../components/Form/CreateCommentForm";
import { useEffect } from "react";
import { getDocumentById, getDocumentCmt } from "../service/api";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../config/firebaseConfig";
// import { useState, useEffect } from "react";
// import { storage } from "../config/firebaseConfig";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import ImageUploader from "../components/ImageUpload";
const DocumentDetailPage = () => {
  const { id } = useParams();
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogImage, setDialogImage] = useState(null);
  const [commentList, setCommentList] = useState();
  const [updateData, setUpdateData] = useState(true);
  const [document, setDocument] = useState(null);

  const [isLoader, setIsLoader] = useState(true);
  useEffect(()=> {
    if(document !== null){
    getDocumentCmt(document.id).then((res) => {  
     setCommentList(res.data)})
    .catch((err) => console.log(err));
    }
 }, [updateData]);
  const handleOpenDialog = (item) => {
    setOpenDialog(true);
    setDialogImage(item);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    getDocumentById(id).then((res) => {
      setDocument(res.data);
      setIsLoader(false);
      
      if(imageList.length === 0){
        const imageListRef = ref(storage, `${res.data.subject.name}/${res.data.author.name}/`);
        listAll(imageListRef).then((res)=> {
          res.items.forEach((item)=> {
            getDownloadURL(item).then((url) => {
              setImageList((prev)=> [...prev, url]);
            })
          })
          // console.log(imageList);
        }).catch((err) => console.log(err));
      }

      getDocumentCmt(res.data.id).then((res) => {  
        console.log(res.data);
        setCommentList(res.data)})
       .catch((err) => console.log(err));
    }).catch((err) => {
      console.log(err)
      // setErrMSG(err.response);
    });
  }, []);


  const PageContent = (
    <>
      <div className="min-h-screen py-16 px-10">
        {document !== null ? (
          <>
            <div className="flex items-center justify-between w-full pb-6">
              <Breadcrumbs aria-label="breadcrumb">
                <div className="text-md sm:text-xl font-semibold uppercase">
                  { (document.subject !==null ? '<' + document.subject.name + '> ' : "")  + document.title}
                </div>
              </Breadcrumbs>
            </div>
            <div className="flex text-sm w-full py-2">
              <Avatar src={document.author !== null ? document.author.picture : ""}></Avatar>
              <div className="flex flex-col items-center px-2">
                <span className="font-semibold">
                {document.author !== null ? document.author.name + ' ' : "Người bí ẩn"} {document.author !== null ? document.author.schoolyear : "" }
                </span>
                <span className="px-1">
                  -- {moment(document.createdAt).format("MMMM Do YYYY")}--
                </span>
              </div>
            </div>
            <div className="w-full border rounded-md my-4 p-4 overflow-y-auto" dangerouslySetInnerHTML={{__html: document.description}}>
            </div>
            <div className="flex flex-wrap w-full h-fit overflow-y-auto items-center py-4">
              {imageList.map((image) => (
                <div
                  className="flex-wrap w-1/2 md:w-1/3 lg:w-1/4 h-fit"
                  onClick={() => handleOpenDialog(image)}
                  key={image}
                >
                  <Card
                    sx={{
                      p: 1,
                      m: 2,
                      ml: 0,
                      maxHeight: "12rem",
                      minHeight: "12rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                    variant="outlined"
                  >
                    <img
                      key={image}
                      src={image}
                      alt={image.name}
                      loading="lazy"
                      className="w-full rounded-md"
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
            <span className="text-md font-medium py-2">
              Bình luận (
              {commentList !== undefined ? commentList.length : <>0</>})
            </span>

            {commentList !== undefined ? (
              commentList.map((comment) => (
                <div
                  className="my-4 p-4 rounded-md border-2 w-4/5"
                  key={comment.id}
                >
                  <div className="flex flex-wrap">
                    <span className="font-medium pr-2">
                      {comment.user ? comment.user.name : ""}
                    </span>
                    <span>
                      ---{moment(comment.createdAt).format("MMMM Do YYYY")}---
                    </span>
                  </div>
                  <div className="py-2">{comment.content}</div>
                </div>
              ))
            ) : (
              <></>
            )}
            <div className="w-4/5 py-4 rounded-md">
              {/* <CreateCommentForm infor={} type="document" updateData={updateData} setUpdateData = {setUpdateData}/> */}
              <CreateCommentForm
                infor={document}
                type="document"
                updateData={updateData}
                setUpdateData={setUpdateData}
              />
            </div>
          </>
        ) : (
          <>
          </>
        )}
      </div>
      <Dialog onClose={handleCloseDialog} open={openDialog} fullWidth={true}>
        <DialogContent>
          <div className="flex items-center justify-center w-full">
            <DocumentImageDetail image={dialogImage} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
  return <PageLayout page={PageContent} isLoader={isLoader}/>;
};

export default DocumentDetailPage;
