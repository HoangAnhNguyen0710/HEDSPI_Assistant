import {
  Breadcrumbs,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import SubjectList from "../components/SubjectList";
import PageLayout from "../layouts/PagesLayout";
import { useState } from "react";

const DocumentPage = () => {
  const [sort, setSort] = useState("Latest");

  const handleChange = (e) => {
    setSort(e.target.value);
  };
  const DocContent = (
    <>
      <div className="min-h-screen py-20 px-10">
        <div className="flex items-center justify-between w-full">
          <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/" className="text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0">
              Tài liệu
            </NavLink>
          </Breadcrumbs>
          <div className="p-1">
          <FormControl size="small" sx={{ m: 1, minWidth: 150 }} >
            <InputLabel id="demo-simple-select-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              value={sort}
              label="Sort"
              onChange={handleChange}
            >
              <MenuItem value="Latest">Mới nhất</MenuItem>
              <MenuItem value="Oldest">Cũ nhất</MenuItem>
              <MenuItem value="Trending">Phổ biến nhất</MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="hidden sm:block sm:w-1/3 h-fit py-5">
            <FilterForm />
          </div>
          <div className="w-full sm:w-2/3 h-fit py-5">
            <SubjectList />
          </div>
        </div>
      </div>
    </>
  );
  return <PageLayout page={DocContent} />;
};

export default DocumentPage;
