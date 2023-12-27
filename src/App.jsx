import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FindWorkPage from './pages/FindJobPage/FindJobPage';
import FindFreelancersPage from './pages/FindFreeLancersPage/FindFreelancersPage';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import MyJobsPage from './pages/MyJobs/MyJobsPage';
import CreateNewJobPage from './pages/CreateNewJobPage/CreateNewJobPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PaymentsPage from './pages/WalletPage/WalletPage';
import JobDetailsPage from './pages/JobDetailsPage/JobDetailsPage';
import FindMicroJobPage from './pages/FindMicroJobPage/FindMicroJobPage';
import CreateNewMicroTransaction from './pages/CreateNewMicroTransactionPage/CreateNewMicroTransactionPage';
import OfferHistoryPage from './pages/OffersPage/OfferHistoryPage';

import ProcessYtApiCode from './pages/ProcessYtApiCode/ProcessYtApiCode';
import MyWorks from './pages/MyWorks/MyWorks';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        {/* Protected */}
        <Route path="findjob" element={<FindWorkPage />} />
        <Route path="myJobs" element={<MyJobsPage />} />
        <Route path="myWorks" element={<MyWorks />} />
        <Route path="findfreelancer" element={<FindFreelancersPage />} />
        <Route path="createjob" element={<CreateNewJobPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="wallet" element={<PaymentsPage />} />
        <Route path="JobDetails/:id" element={<JobDetailsPage />} />
        <Route path="findmicrojobs" element={<FindMicroJobPage />} />
        <Route path="offerhistory" element={<OfferHistoryPage />} />
        <Route
          path="microtransactions/youtube/code"
          element={<ProcessYtApiCode />}
        />
        <Route
          path="/microtransaction/create"
          element={<CreateNewMicroTransaction />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
