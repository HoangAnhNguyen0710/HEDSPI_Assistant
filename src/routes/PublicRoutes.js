import { Routes, Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import DocumentPage from "../pages/DocumentPage";
import LoginPage from "../pages/LoginPage";



const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/documents" element={<DocumentPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/blogs" element={<BlogPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default PublicRoutes;
