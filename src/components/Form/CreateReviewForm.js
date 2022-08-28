/* eslint-disable no-undef */
import {
    Button,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Snackbar,
    TextField,
  } from "@mui/material";
  import React from "react";
  import { useState } from "react";
  import AddIcon from "@mui/icons-material/Add";
  import axiosClient from "../../config/axiosClient";
  import Message from "../Message";
import { postReview } from "../../service/api";
import { upload } from "@testing-library/user-event/dist/upload";
  const defaultR = {
    title: "",
    topic: [],
    author: null,
    description: "",
    type: "",
    likes: 0,
    views: 0,
    rating: 0,
  };
  const CreateReviewForm = (props) => {
    //quản lý review dc nhập vào
    const [review, setReview] = useState(defaultR);
    //quản lý list topic
    const [topicList, setTopicList] = useState([]);
    const [addTopic, setAddTopic] = useState("");
    //quản lý message và loại message
    const [MSG, setMSG] = useState("");
    const [MSGType, setMSGType] = useState("");
    const [openSnackBar, setOpenSnackBar] = useState(false);
    //quản lý submit form
    const [confirm, setConfirm] = useState(false);

    const handleCloseSnackBar = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      setOpenSnackBar(false);
    };
  
    const handleChange = (e) => {
      setReview({ ...review, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (confirm === true) {
        const uploadQ = review;
        uploadQ.topic = topicList;
        postReview(uploadQ)
          .then((res) => {
            console.log(res);
            setMSGType("success");
            setMSG("Tạo review thành công !");
            setOpenSnackBar(true);
          })
          .catch((err) => console.log(err));
        setReview(defaultR);
        setTopicList([]);
        setConfirm(false);
        // props.setOpen(false);
      }
    };
  
    const addTopicToList = () => {
      if (
        topicList.filter((topic) => topic === addTopic).length === 0 &&
        topicList.length < 5 &&
        addTopic !== ""
      ) {
        setTopicList([...topicList, addTopic]);
        setAddTopic("");
        return;
      }
      if (topicList.length === 5) {
        setMSGType("error");
        setMSG("Số topic tối đa là 5!");
        setOpenSnackBar(true);
      }
      if (addTopic === "") {
        setMSGType("error");
        setMSG("Topic không hợp lệ!");
        setOpenSnackBar(true);
      }
    };
  
    const handleDeleteTopic = (topic) => {
      const newList = topicList.filter((topics) => topics !== topic);
      setTopicList(newList);
    };
    return (
      <div className="w-full m-2 p-2">
        <span className="py-3 text-2xl font-semibold">VIẾT REVIEW</span>
        <form className="py-6" onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <TextField
              name="title"
              value={review.title}
              fullWidth
              label="Tiêu đề"
              id="fullWidth"
              htmlFor="component-outlined"
              size="small"
              sx={{ mb: 2 }}
              onChange={handleChange}
              required
            />
            <div className="w-4/5 flex mb-4 items-center">
              <div className="w-4/5">
                <TextField
                  name="title"
                  value={addTopic}
                  fullWidth
                  label="Topic"
                  // id="fullWidth"
                  htmlFor="component-outlined"
                  size="small"
                  onChange={(e) => setAddTopic(e.target.value)}
                />
              </div>
  
              <div className="w-1/5">
                <button
                  className="bg-cyan-500 text-white p-2 rounded-md"
                  onClick={addTopicToList}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
            <div className="w-full flex  flex-wrap">
              {topicList.map((topic) => (
                <div className="mr-2 pb-3">
                  <Chip
                    label={topic}
                    variant="outlined"
                    onDelete={() => handleDeleteTopic(topic)}
                  />
                </div>
              ))}
            </div>
            <div className="w-4/5 mb-4 pt-1 pr-3">
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-select-small">Thể loại</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  fullWidth
                  label="Thể loại"
                  name="type"
                  value={review.type}
                  onChange={handleChange}
                >
                  <MenuItem value="Review môn học">Review môn học</MenuItem>
                  <MenuItem value="Review học kì">Review học kì</MenuItem>
                  <MenuItem value="Review khác">Review khác</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="my-4 w-full">
            <TextField
              id="outlined-multiline-static"
              label="Mô tả"
              multiline
              rows={5}
              fullWidth
              name="description"
              value={review.description}
              onChange={handleChange}
            />
          </div>
          <div className="">
            <Button
              variant="contained"
              type="submit"
              onClick={() => setConfirm(true)}
            >
              Tạo review
            </Button>
          </div>
        </form>
        <Snackbar
          open={openSnackBar}
          autoHideDuration={3000}
          onClose={handleCloseSnackBar}
        >
          <Message
            severity={MSGType}
            sx={{ width: "100%" }}
            onClose={handleCloseSnackBar}
          >
            {MSG}
          </Message>
        </Snackbar>
      </div>
    );
  };
  
  export default CreateReviewForm;
  