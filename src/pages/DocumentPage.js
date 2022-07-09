import React from "react";
import PageLayout from "../layouts/PagesLayout";

const DocumentPage = () => {
  const DocContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">Documents Page</p>
      </div>
    </>
  );
  return <PageLayout page={DocContent} />;
};

export default DocumentPage;
