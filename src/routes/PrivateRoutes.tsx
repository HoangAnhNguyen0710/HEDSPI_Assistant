import { Routes, Route } from "react-router-dom";
import CreateDocumentPage from "../pages/CreateDocumentPage";

import ManagementPage from "../pages/ManagementPage";
import React from "react";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/management" element={<ManagementPage />} />
      <Route path="/create_docs" element={<CreateDocumentPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
