import {
  Breadcrumbs,
  Dialog,
  DialogContent,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PageLayout from "../layouts/PagesLayout";
import AddIcon from "@mui/icons-material/Add";
import Question from "../components/Question";
import CreateQuestionForm from "../components/Form/CreateQuestionForm";
import { useEffect } from "react";
import { getQuestion, getQuestionNum } from "../service/api";
import { setQuestions } from "../slices/question";
import { useDispatch, useSelector } from "react-redux";
import PagePagination from "../layouts/Pagination";

const QAPage = () => {
  const questionList = useSelector((state) => state.question.value);
  const dispatch = useDispatch();
  const [numOfPages, setNumOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoader, setIsLoader] = useState(true);
  const [alignment, setAlignment] = React.useState("left");
  const [open, setOpen] = React.useState(false);
  const [sort, setSort] = useState({
    createdAt: "DESC"
  });

  useEffect(() => {
    getQuestion(currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE), sort)
      .then((res) => {
        dispatch(setQuestions(res.data));
        setIsLoader(false);
      })
      .catch((err) => console.log(err));
      getQuestionNum.then((res)=> setNumOfPages(res.data/parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentPage, alignment])

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    setCurrentPage(1);
    switch(newAlignment){
      case "center":
        setSort({
          createdAt: "ASC",
          // likes: ""
        });
        break;
      case "right":
        setSort({
          // createdAt: "",
          likes: "DESC"
        });
        break;
      default:
        setSort({
          createdAt: "DESC",
        });
        break;
    }
  };

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
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
          <button
            className="p-3 py-2 bg-main text-white rounded-md flex items-center text-sm font-medium hover:text-black hover:bg-gray-300"
            onClick={handleOpenDialog}
          >
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
              <ToggleButton
                value="left"
                aria-label="left aligned"
                sx={{ paddingY: 1, paddingX: 2 }}
              >
                <span className="text-black text-sm">MỚI NHẤT</span>
              </ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                sx={{ paddingY: 1, paddingX: 2 }}
              >
                <span className="text-black text-sm">CŨ NHẤT</span>
              </ToggleButton>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                sx={{ paddingY: 1, paddingX: 2 }}
              >
                <span className="text-black text-sm">NỔI BẬT</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between">
      <div>
      {questionList !== null ? (
        questionList.map((question) => (
          <div className="mr-6 mx-6 pr-7 pb-5" key={question.id}>
            <Question question={question} />
          </div>
        ))
      ) : (
        <></>
      )}
      </div>
      <PagePagination totalPage = {numOfPages} setPageNum={setCurrentPage} currentPage={currentPage}/>
      </div>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogContent>
          <div className="flex items-center justify-center">
            <CreateQuestionForm setOpen={setOpen} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
  return <PageLayout page={QAContent} isLoader={isLoader} />;
};

export default QAPage;
