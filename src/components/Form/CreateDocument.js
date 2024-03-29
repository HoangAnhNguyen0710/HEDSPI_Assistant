/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import React from "react";
import ImageUploader from "../ImageUpload";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllSubject, postDocument } from "../../service/api";
import { setSubjects } from "../../slices/subjects";
import JoditReact from "jodit-react-ts";

const CreateDocumentForm = () => {
  const user = useSelector((state) => state.user.value);
  const subjectList = useSelector((state) => state.subject.value);
  const defaultDoc = {
    title: "",
    subject: null,
    program: "",
    author: user,
    lecturer: "",
    description: "",
    semester: 1,
    type: "",
    likes: 0,
    views: 0,
    rating: 0,
  };
  const navigate = useNavigate();
  const [document, setDocument] = useState(defaultDoc);
  const [uploadIMG, setUploadIMG] = useState(false);

  const [isUploaded, setIsUploaded] = useState(false);
  const dispatch = useDispatch();
  
  const editor = useRef(null)
  const config = {
    readonly: false,
    placeholder: "Nhập mô tả",
    uploader: {
      insertImageAsBase64URI: true
      },
  }

  const handleChange = (e) => {
    if(e.target.name !== "subject"){
    setDocument({ ...document, [e.target.name]: e.target.value });
    }
  };

  const handleChangeSubject = (value) => {
    setDocument({ ...document, "subject": value });
  };
  useEffect(() => {
    // setDocument(defaultDoc);
    if(isUploaded){
      alert("Đăng tài liệu thành công !");
      navigate("/documents");
    }
  }, [isUploaded]);

  useEffect(()=>{
    getAllSubject.then((res)=> dispatch(setSubjects(res.data)));
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document)
    setUploadIMG(!uploadIMG);
    postDocument(document)
    .then((res)=> console.log(res))
    .catch((err) => console.log(err));
    setIsUploaded(true);
    //  setDocument(defaultDoc);
  };

  return (
    <div className="w-full sm:w-2/3 m-3">
      <span className=" text-2xl font-semibold">Tạo tài liệu</span>
        <div className="flex flex-wrap my-3">
          <TextField
            name="title"
            value={document.title}
            fullWidth
            label="Tiêu đề"
            id="fullWidth"
            htmlFor="component-outlined"
            size="small"
            sx={{ mb: 2 }}
            onChange={handleChange}
          />
          <div className="w-1/2 md:w-1/5 mb-4 pr-3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Chương trình</InputLabel>
              <Select
                name="program"
                value={document.program}
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Chương trình"
                onChange={handleChange}
              >
                <MenuItem value="K64 đổ về trước">K64 đổ về trước</MenuItem>
                <MenuItem value="Từ K65 trở đi">Từ K65 trở đi</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-1/2 md:w-3/5 mb-4">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Học phần</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Học phần"
                name="subject"
                // onChange={handleChange}
                value={document.subject !== null ? document.subject.name : ""}
              >
                {subjectList.map((subject) => (
                  <MenuItem key={subject.id} value={subject.name} onClick={()=> handleChangeSubject(subject)}>
                    {subject.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-full md:w-1/5 md:pl-3">
            <TextField
              fullWidth
              label="Giảng viên"
              id="fullWidth"
              htmlFor="component-outlined"
              size="small"
              sx={{ mb: 2 }}
              name="lecturer"
              value={document.lecturer}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2 mb-4 pr-3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Kì học</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Kì học"
                name="semester"
                value={document.semester}
                onChange={handleChange}
              >
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={1}>1</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-1/2 mb-4 prl3">
            <FormControl size="small" fullWidth>
              <InputLabel id="demo-select-small">Thể loại</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                fullWidth
                label="Thể loại"
                name="type"
                value={document.type}
                onChange={handleChange}
              >
                <MenuItem value="Tài liệu môn học">Tài liệu môn học</MenuItem>
                <MenuItem value="Đề thi">Đề thi</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <ImageUploader
          upload={uploadIMG}
          setUpload={setUploadIMG}
          document={document}
          isUploaded={isUploaded}
          setIsUploaded={setIsUploaded}
        />
        <div className="my-4 w-full">
            <JoditReact
            ref={editor}
            value={document.description}
            tabIndex={1} // tabIndex of textarea
            onChange={newContent => setDocument({ ...document, description: newContent })} 
            config={config}
        />
        </div>
        <form className="py-6" onSubmit={handleSubmit}>
        <div className="">
          <Button variant="contained" type="submit">
            Tạo tài liệu
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateDocumentForm;
