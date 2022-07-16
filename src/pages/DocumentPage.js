import { Breadcrumbs } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import FilterForm from "../components/FilterForm";
import SubjectList from "../components/SubjectList";
import PageLayout from "../layouts/PagesLayout";

const DocumentPage = () => {
  const DocContent = (
    <>
      <div className="min-h-screen py-20 px-10">
       <Breadcrumbs aria-label="breadcrumb">
            <NavLink to="/" className='text-2xl font-semibold'>
              Tài liệu
            </NavLink>
        </Breadcrumbs>
        <div className="flex">
           <div className="w-full sm:w-1/2 md:w-1/3 h-fit py-5">
           <FilterForm/>
           </div>
           <div className="sm:w-1/2 md:w-2/3 h-fit py-5">
            <SubjectList/>
           </div>
        </div>
      </div>
    </>
  );
  return <PageLayout page={DocContent} />;
};

export default DocumentPage;
