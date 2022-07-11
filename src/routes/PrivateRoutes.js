import { Routes, Route } from "react-router-dom";
import ManagementPage from "../pages/ManagementPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/management" element={<ManagementPage />} />
    </Routes>
  );
};

export default PrivateRoutes;
