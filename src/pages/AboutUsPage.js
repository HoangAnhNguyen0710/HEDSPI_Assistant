import React from "react";
import PageLayout from "../layouts/PagesLayout";
// import { useState, useEffect } from "react";
// import { storage } from "../config/firebaseConfig";
// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid";
// import ImageUploader from "../components/ImageUpload";
import CreateDocumentForm from "../components/Form/CreateDocument";
const AboutUsPage = () => {
  // const [imageList, setImageList] = useState([]);
  // const imageListRef = ref(storage, "/images")
  // useEffect(()=>{
  //   listAll(imageListRef).then((res)=> {
  //     console.log(res);
  //     res.items.forEach((item)=> {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev)=> [...prev, url]);
  //       })
  //     })
  //   });
  // }, []);
 
  const AboutContent = (
    <>
      <div className="min-h-screen py-20">
        {/* <div className="flex items-center justify-center">
        <CreateDocumentForm/>
        </div> */}
        {/* {imageList.map((url)=> {
          return <img src={url} alt=""/>
        })} */}
      </div>
    </>
  );
  return <PageLayout page={AboutContent} />;
};

export default AboutUsPage;
