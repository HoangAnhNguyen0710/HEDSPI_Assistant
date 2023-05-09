import {
    Breadcrumbs,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { NavLink } from "react-router-dom";
  import FilterForm from "../components/Form/FilterForm";
  import PageLayout from "./PagesLayout";
  import { useState } from "react";
  import DocumentList from "../components/DocumentList";
  import { useDispatch } from "react-redux";
  import { getDocument, getDocumentNum } from "../services/api";
  import { setDocs } from "../slices/document";
  import Pagination from "./Pagination";
  
  const DocumentPageLayout = (props: any) => {
    const [sort, setSort] = useState<any>({
      createdAt: "DESC",
    });
    
    const [sortVal, setSortVal] = useState("Latest");
    const [filterVal, setFilterVal] = useState<any>(null);
    const [numOfPages, setNumOfPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
  
    const [isLoader, setIsLoader] = useState(true);
    const dispatch = useDispatch();

    const handleChange = (e: any) => {
      setSortVal(e.target.value);
      switch(e.target.value){
        case "Oldest":
          setSort({
            createdAt: "ASC",
          });
          break;
        case "Likes":
          setSort({
            likes: "DESC"
          });
          break;
        default:
          setSort({
            createdAt: "DESC",
          });
          break;
      }
      setCurrentPage(1);
    
    };
  
    useEffect(() => {
      getDocument(props.doc_type, currentPage, parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE!), sort, filterVal)
        .then((res) => {
        dispatch(setDocs(res.data));
        setIsLoader(false);
      })
      getDocumentNum(props.doc_type, filterVal).then((res)=> {setNumOfPages(res.data/parseInt(process.env.REACT_APP_MAX_ITEMS_PER_PAGE!))});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, sortVal, filterVal]);

    const DocContent = (
      <>
        <div className="min-h-screen py-16 px-10">
          <div className="flex items-center justify-between w-full">
            <Breadcrumbs aria-label="breadcrumb">
              <NavLink
                to="/"
                className="text-2xl font-semibold p-3 m-3 mt-0 mr-0 sm:p-0 sm:m-0"
              >
                {props.page_name}
              </NavLink>
            </Breadcrumbs>
            <div className="p-1">
              <FormControl size="small" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sortVal}
                  label="Sort"
                  onChange={handleChange}
                >
                  <MenuItem value="Latest">Mới nhất</MenuItem>
                  <MenuItem value="Oldest">Cũ nhất</MenuItem>
                  <MenuItem value="Likes">Phổ biến nhất</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
  
          <div className="flex flex-wrap h-fit">
            <div className="hidden sm:block sm:w-1/3 h-fit py-12 pr-4">
              <FilterForm setFilterVal={setFilterVal}/>
            </div>
            <div className="w-full sm:w-2/3 py-5 min-h-max flex flex-col justify-between">
              <div>
                <DocumentList/>
              </div>
              <Pagination totalPage = {numOfPages} setPageNum={setCurrentPage} currentPage={currentPage}/>
            </div>
          </div>
        </div>
      </>
    );
    return <PageLayout page={DocContent} isLoader={isLoader}/>;
  };
  
  export default DocumentPageLayout;
  