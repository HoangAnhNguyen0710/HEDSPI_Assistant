import React from "react";
import PageLayout from "../layouts/PagesLayout";

const AboutUsPage = () => {
  const AboutContent = (
    <>
      <div className="min-h-screen py-20">
        <p className="">About Page</p>
      </div>
    </>
  );
  return <PageLayout page={AboutContent} />;
};

export default AboutUsPage;
