import React from "react";
import CreateDocumentForm from "../components/Form/CreateDocument";
import PageLayout from "../layouts/PagesLayout";

const CreateDocumentPage = () => {
  const PageContent = (
    <>
      <div className="min-h-screen py-20">
        <div className="flex items-center justify-center">
          <CreateDocumentForm />
        </div>
      </div>
    </>
  );
  return <PageLayout page={PageContent} />;
};

export default CreateDocumentPage;
