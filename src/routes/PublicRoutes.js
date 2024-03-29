import { Routes, Route } from "react-router-dom";
import AboutUsPage from "../pages/AboutUsPage";
import QAPage from "../pages/QAPage";
import HomePage from "../pages/HomePage";
import DocumentPage from "../pages/DocumentPage";
import LoginPage from "../pages/LoginPage";
import ReviewPage from "../pages/ReviewPage";
import ExamPage from "../pages/ExamPage";
import DocumentDetailPage from "../pages/DocumentDetailPage";
import SearchResultPage from "../pages/SearchResultPage";



const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/documents" element={<DocumentPage />} />
      <Route path="/search_result" element={<SearchResultPage />} />
      <Route path="/documents/exams" element={<ExamPage />} />
      <Route path="/documents/:id" element={<DocumentDetailPage/>} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/questions" element={<QAPage />} />
      <Route path="/reviews" element={<ReviewPage/>}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default PublicRoutes;
