/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Document from "../components/Document";
import PageLayout from "../layouts/PagesLayout";
import { getSearchDocument } from "../services/api";
const Doraemon = require("../assets/img/mon.png");

const SearchResultPage = () => {
  const location = useLocation();
  const queryString = location.search;
  const [isLoader, setIsLoader] = useState(true);
  const [errMSG, setErrMSG] = useState("");
  const [resultList, setResultList] = useState<any>(null);
  const params = new URLSearchParams(queryString);
  // console.log(params.get('document'))
  useEffect(() => {
    getSearchDocument(params.get("document")!)
      .then((res) => {
        setResultList(res.data);
        setIsLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setErrMSG(err.response.data);
        setIsLoader(false);
      });
  }, []);

  useEffect(()=>{
    console.log(resultList)
  }, [resultList])
  const SearchResult = (
    <>
      <div className="h-fit py-16 px-10 w-full">
        <div className="flex items-center justify-between w-full pb-6">
          {resultList === null ? (
            <div className="flex flex-col w-full h-screen items-center">
              <span className="uppercase font-semibold text-2xl">{errMSG}</span>
              <div className="md:w-1/2">
              <img src={Doraemon} alt="Doraemon" className="w-full p-3"></img>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <span className="uppercase font-semibold text-2xl pb-4 px-8">search result for: {params.get("document")}</span>
              <div className="flex flex-wrap">
              {resultList.map((document: any) => (
                <div key={document.id} className="w-full md:w-1/2 hover:scale-105 transition ease-in-out delay-150 duration-200">
                  <div className="p-2 m-2">
                  <Document document={document} />
                  </div>
                </div>
              ))}
              </div>
            </div> 
          )}
        </div>
      </div>
    </>
  );
  return <PageLayout page={SearchResult} isLoader={isLoader} />;
};

export default SearchResultPage;
