import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateDocumentForm from "../components/Form/CreateDocument";
import PageLayout from "../layouts/PagesLayout";

const CreateDocumentPage = () => {
  const [isLoader, setIsLoader] = useState(true);
  const user = useSelector((state)=> state.user.value);
  const navigate = useNavigate()
  useEffect(()=>{
     setTimeout(()=>{
        if(user !== null) setIsLoader(false)
        else {
        alert("Vui lòng đăng nhập để thực hiện chức năng này");
        navigate('/');
        }
     }, 1500)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  const PageContent = (
    <>
      <div className="min-h-screen py-20">
        <div className="flex items-center justify-center">
          <CreateDocumentForm />
        </div>
      </div>
    </>
  );
  return <PageLayout page={PageContent} isLoader={isLoader}/>;
};

export default CreateDocumentPage;
