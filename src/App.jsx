import "./App.css";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FindWorkPage from "./pages/FindWorkPage/FindWorkPage";
import FindFreelancersPage from "./pages/FindFreeLancersPage/FindFreelancersPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="findwork" element={<FindWorkPage />} />
        <Route path="findfreelancers" element={<FindFreelancersPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
