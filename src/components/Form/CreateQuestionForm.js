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
import { useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import Message from "../Message";
import { postQuestion } from "../../service/api";
import JoditReact from "jodit-react-ts";
import { useSelector } from "react-redux";


const CreateQuestionForm = () => {
  //user hiện tại
  const currentUser = useSelector((state)=> state.user.value);
  //default question
  const defaultQ = {
    title: "",
    topic: [],
    author: currentUser,
    description: "",
    type: "",
    likes: 0,
    views: 0,
    rating: 0,
  };
  //quản lý câu hỏi dc nhập vào
  const [question, setQuestion] = useState(defaultQ);
  //quản lý list topic
  const [topicList, setTopicList] = useState([]);
  const [addTopic, setAddTopic] = useState("");
  //quản lý message và loại message
  const [MSG, setMSG] = useState("");
  const [MSGType, setMSGType] = useState("");
  const [openSnackBar, setOpenSnackBar] = useState(false);
  //quản lý submit form
  const [confirm, setConfirm] = useState(false);
  //quản lý cho review description
  const editor = useRef(null)
  const config = {
    readonly: false,
    placeholder: "Nhập mô tả",
    uploader: {
      insertImageAsBase64URI: true
      },
  }
  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (confirm === true) {
      const uploadQ = question;
      uploadQ.topic = topicList;
      // setQuestion(uploadQ);
      postQuestion(uploadQ)
        .then((res) => {
          console.log(res);
          setMSGType("success");
          setMSG("Tạo câu hỏi thành công !");
          setOpenSnackBar(true);
        })
        .catch((err) => console.log(err));
      setQuestion(defaultQ);
      setTopicList([]);
      setConfirm(false);
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
      <span className="py-3 text-2xl font-semibold">Tạo câu hỏi</span>
      <form className="py-6" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <TextField
            name="title"
            value={question.title}
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
                value={question.type}
                onChange={handleChange}
              >
                <MenuItem value="Học tập">Học tập</MenuItem>
                <MenuItem value="Jobfair - Naitei">Jobfair - Naitei</MenuItem>
                <MenuItem value="Đời sống">Đời sống</MenuItem>
                <MenuItem value="Khác">Khác</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="my-4 w-full">
        <JoditReact
            ref={editor}
            value={question.description}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => setQuestion({ ...question, description: newContent })} 
            config={config}
        />
        </div>
        <div className="">
          <Button
            variant="contained"
            type="submit"
            onClick={() => setConfirm(true)}
          >
            Tạo câu hỏi
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

export default CreateQuestionForm;
