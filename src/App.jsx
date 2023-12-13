import "./App.scss";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import FindWorkPage from "./pages/FindJobPage/FindJobPage";
import FindFreelancersPage from "./pages/FindFreeLancersPage/FindFreelancersPage";
import * as bootstrap from "bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import MyJobsPage from "./pages/MyJobs/MyJobsPage";
import CreateNewJobPage from "./pages/CreateNewJobPage/CreateNewJobPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PaymentsPage from "./pages/PaymentsPage/PaymentsPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="findjob" element={<FindWorkPage />} />
        <Route path="myJobs" element={<MyJobsPage/>} />
        <Route path="findfreelancer" element={<FindFreelancersPage />} />
        <Route path="createjob" element={<CreateNewJobPage />} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="payments" element={<PaymentsPage/>} />
        <Route path="jobdetails" element={<JobDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
