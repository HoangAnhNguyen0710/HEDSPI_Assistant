import { Box, Breadcrumbs, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import ReviewList from "../components/ReviewList";
import PageLayout from "../layouts/PagesLayout";
import PropTypes from 'prop-types';


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ReviewContent = (
    <>
      <div className="min-h-screen py-16 px-10">
       <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/" className='text-2xl font-semibold'>
              Reviews
            </NavLink>
        </Breadcrumbs>
        <div className="flex">
      <div className="w-full sm:w-1/3 md:w-1/5 h-fit py-5">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Tất cả" {...a11yProps(0)} sx={{alignItems:"start",textAlign:"start", pl: 0}}/>
        <Tab label="Review học phần" {...a11yProps(1)} sx={{alignItems:"start",textAlign:"start", pl: 0}}/>
        <Tab label="Review học kì" {...a11yProps(2)} sx={{alignItems:"start",textAlign:"start", pl: 0}}/>
        <Tab label="Review khác" {...a11yProps(3)} sx={{alignItems:"start",textAlign:"start", pl: 0}}/>
      </Tabs>
      </div>
      <div className="sm:w-2/3 md:w-4/5 h-fit py-5">
      <TabPanel value={value} index={0}>
        <ReviewList/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReviewList/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReviewList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ReviewList/>
      </TabPanel>
      </div>
      </div>
      </div>
     
    </>
  );
  return <PageLayout page={ReviewContent} />;
};

export default ReviewPage;
