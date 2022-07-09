import React from "react";
import PageLayout from "../layouts/PagesLayout";

const BlogPage = () => {
  const BlogContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">Blog Page</p>
      </div>
    </>
  );
  return <PageLayout page={BlogContent} />;
};

export default BlogPage;
