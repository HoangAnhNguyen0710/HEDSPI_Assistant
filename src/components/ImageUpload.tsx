import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../config/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";
import { DropzoneArea } from "material-ui-dropzone";
const ImageUploader = (props: any) => {
  const document = props.document;
  const [imageUpload, setImageUpload] = useState<any>([]);
  // const [imageUrls, setImageUrls] = useState([]);
  // const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload.length === 0) return;
    for (let i = 0; i < imageUpload.length; i++) {
      const imageRef = ref(
        storage,
        `${document.subject.name}/${document.author.name}/${
          imageUpload[i].name
        }`
      );
      uploadBytes(imageRef, imageUpload[i]).then((snapshot) => {
        props.setIsUploaded(!props.isUploaded);
        console.log("success");
      });
    }
    setImageUpload([]);
    // props.setUpload(false);
  };

  useEffect(() => {
    // console.log(props: any);
    uploadFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.upload]);

  const handleChange = (files: any) => {
    setImageUpload(files);
  };
  return (
    <>
      <div className="">
        <DropzoneArea
          onChange={handleChange}
          filesLimit={10}
          acceptedFiles={["image/*"]}
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
