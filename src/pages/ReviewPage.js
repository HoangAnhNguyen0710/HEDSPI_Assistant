import { Breadcrumbs, Dialog, DialogContent, Tab, Tabs, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import ReviewList from "../components/ReviewList";
import PageLayout from "../layouts/PagesLayout";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { getReview, getReviewNum } from "../services/api";
import { setReviews } from "../slices/review";
import CreateReviewForm from "../components/Form/CreateReviewForm";
import PagePagination from "../layouts/Pagination";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const ReviewPage = () => {
  const [value, setValue] = useState(0);

  const [numOfPages, setNumOfPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoader, setIsLoader] = useState(true);
  const [reloadData, setReloadData] = useState(true);
  const dispatch = useDispatch();
  const reviewList = useSelector((state)=>state.review.value);

  const [reviewType, setReviewType] = useState("all");
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    // console.log(currentPage)
    getReview(reviewType, currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE))
      .then((res) => {
      dispatch(setReviews(res.data));
      setIsLoader(false);
    })
    getReviewNum(reviewType).then((res)=> setNumOfPages(res.data/parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, reloadData]);

  // useEffect(()=> {
  //   setCurrentPage(1);
  //   setReloadData(!reloadData);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [reviewType])

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // eslint-disable-next-line default-case
    switch(newValue){
      case 0 : 
      setReviewType("all")
      break;

      case 1 : 
      setReviewType("Review môn học")
      break;

      case 2 : 
      setReviewType("Review học kì")
      break;

      case 3 : 
      setReviewType("Review khác")
      break;
    }
    setCurrentPage(1);
    setReloadData(!reloadData);
  };
  const ReviewContent = (
    <>
      <div className="min-h-screen py-16 px-10">
      <div className="flex items-center justify-between w-full pb-6">
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink
              to="/"
              className="text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0"
            >
              REVIEWS
            </NavLink>
          </Breadcrumbs>
          <button
            className="p-3 sm:mx-3 py-2 bg-main text-white rounded-md flex items-center text-sm font-medium hover:text-black hover:bg-gray-300"
            onClick={handleOpenDialog}
          >
            <AddIcon /> <span className="px-1">VIẾT REVIEW</span>
          </button>
        </div>
        <div className="flex">
          {/* <div className="w-full sm:w-1/3 md:w-1/5 h-fit py-5"></div> */}
          <div className="hidden sm:block sm:w-1/3 md:w-1/5 h-fit py-5">
            <div className="flex py-3">
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider", py: 2 }}
              >
                <Tab
                  label="Tất cả"
                  {...a11yProps(0)}
                  sx={{ alignItems: "start", textAlign: "start", pl: 0 }}
                />
                <Tab
                  label="Review học phần"
                  {...a11yProps(1)}
                  sx={{ alignItems: "start", textAlign: "start", pl: 0 }}
                />
                <Tab
                  label="Review học kì"
                  {...a11yProps(2)}
                  sx={{ alignItems: "start", textAlign: "start", pl: 0 }}
                />
                <Tab
                  label="Review khác"
                  {...a11yProps(3)}
                  sx={{ alignItems: "start", textAlign: "start", pl: 0 }}
                />
              </Tabs>
            </div>
          </div>
          <div className="w-full sm:w-2/3 md:w-4/5 h-fit py-5">
            <TabPanel value={value} index={0}>
              <ReviewList reviewList={reviewList}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ReviewList reviewList={reviewList}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ReviewList reviewList={reviewList}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <ReviewList reviewList={reviewList}/>
            </TabPanel>
            <div className="flex justify-center">
              <PagePagination totalPage = {numOfPages} setPageNum={setCurrentPage} currentPage={currentPage}/>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogContent>
          <div className="flex items-center justify-center">
            <CreateReviewForm setOpen={setOpen} setReloadData={setReloadData} reloadData={reloadData}/>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
  return <PageLayout page={ReviewContent} isLoader={isLoader}/>;
};

export default ReviewPage;
