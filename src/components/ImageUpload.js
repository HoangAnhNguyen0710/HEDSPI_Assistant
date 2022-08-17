import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../config/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { DropzoneArea, DropzoneAreaBase } from "material-ui-dropzone";
const ImageUploader = (props) => {
  const [imageUpload, setImageUpload] = useState([]);
  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "images/");
  const uploadFile = (props) => {
    if (imageUpload.length === 0) return;
    for(let i = 0; i< imageUpload.length ; i++ ){
      const imageRef = ref(storage, `${props.subject_name}/${props.author}/${imageUpload[i].name + v4()}`);
      uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
        // console.log(snapshot);
        console.log("success");
    })
    }
    setImageUpload([]);
    // props.setUpload(false);
  }

  useEffect(()=>{
    // console.log(props);
    uploadFile(props);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.upload])

  // useEffect(() => {
  //   listAll(imagesListRef).then((response) => {
  //     response.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageUrls((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);
  
  const handleChange = (files) => {
    setImageUpload(files);
  }
  return (
        <>
          <div className="">
          <DropzoneArea
            onChange={handleChange} 
            filesLimit={10}
            acceptedFiles={['image/*']}
            dropzoneText={"Thả nhẹ 1 hoặc 1 vài ảnh vào đây nào"}
            // showFileNames={true}
            // useChipsForPreview={true}
            // showPreviews={false}
            // clearOnUnmount={true}
            initialFiles={imageUpload}
            showPreviewsInDropzone={true}
            />
          </div>
        </>
  );
};

export default ImageUploader;
