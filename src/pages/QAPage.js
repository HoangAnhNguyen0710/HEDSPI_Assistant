import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../layouts/PagesLayout";
import AddIcon from '@mui/icons-material/Add';
import QuestionList from "../components/QuestionList";
import Question from "../components/Question";

const QAPage = () => {
  const question = {
    doc_id:"",
    title: "Hỏi về Jobfair Sun tháng 9",
    author: "Nguyễn Hải Dương",
    date_created: "05/08/2022",
    cat_id: "",
    cat_name: ["Jobfair", "Naitei"],
    description: "Tổng hợp lý thuyết + các ví dụ và lời giải đầy đủ từ chương I đến chương IV #database #csdl",
    seen_num: 200,
    likes_num: 150,
    comments_num: 200
  }
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const QAContent = (
    <>
      <div className="h-fit py-16 px-10">
        <div className="flex items-center justify-between w-full pb-6">
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink
              to="/"
              className="text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0"
            >
              Q&A
            </NavLink>
          </Breadcrumbs>
          <button className="p-3 py-2 bg-main text-white rounded-md flex items-center text-sm font-medium hover:text-black hover:bg-gray-300">
            <AddIcon /> <span className="px-1">TẠO TOPIC</span>
          </button>
        </div>
        <Divider />
        <div className="py-4">
          <div className="w-fit rounded-md">
            <ToggleButtonGroup
              value={alignment}
              onChange={handleAlignment}
              aria-label="text alignment"
              exclusive
              color="standard"
            >               
              <ToggleButton value="left" aria-label="left aligned" sx={{paddingY:1, paddingX:2}}>
              <span className="text-black text-sm">GẦN ĐÂY</span>
              </ToggleButton>
              <ToggleButton value="center" aria-label="centered" sx={{paddingY:1, paddingX:2}}>
              <span className="text-black text-sm">NỔI BẬT</span>
              </ToggleButton>
              <ToggleButton value="right" aria-label="right aligned" sx={{paddingY:1, paddingX:2}}>
              <span className="text-black text-sm">NGẪU NHIÊN</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="mr-6 mx-6 pr-7 pb-5">
      <Question question={question}/>
      </div>
      <div className="mr-6 mx-6 pr-7 pb-5">
      <Question question={question}/>
      </div>
    </>
  );
  return <PageLayout page={QAContent} />;
};

export default QAPage;
