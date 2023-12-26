import React from "react";
import "./WalletPage.css";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { walletGetBalance } from "../../redux/actions/WalletAction";
const paymentsData = [
  {
    id: 1,
    jobTitle: "React Projesi",
    jobDescription: "web uygulamasi",
    incomingAmount: 500,
    outgoingAmount: 200,
  },
  {
    id: 2,
    jobTitle: "Node.js Projesi",
    jobDescription: "backend uygulamasi",
    incomingAmount: 800,
    outgoingAmount: 300,
  },
  {
    id: 3,
    jobTitle: "React Native Uygulaması",
    jobDescription: "mobil uygulama",
    incomingAmount: 600,
    outgoingAmount: 150,
  },
];

const PaymentsPage = () => {
  const walletState = useSelector(state => state.walletDetails)
  const {error,loading,wallet}=walletState

const pendingAmountTotal = wallet && wallet.pendingAmounts
  ? wallet.pendingAmounts.reduce((total, item) => total + (item.amount || 0), 0)
  : 0;


  const dispatch = useDispatch();
  useEffect(() => {
dispatch(walletGetBalance())
  }, [])
  return (
    <UserLayout>
      <h1 className="my-4">Payment History</h1>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card bg-success text-light" style={{ height: 120 }}>
            <div class="card-body">
              <div class="mini-stat clearfix">
                <span class="mini-stat-icon bg-brown me-0 float-end">
                  <i class="fa-solid fa-user"></i>
                </span>
               {error ? (
                  <div className="alert alert-danger my-2" role="alert">
                    {error}
                  </div>
                ) : loading ? "Balance details loading please wait." : ( <div>
                  <label class="fs-4">Total Balance </label>

                  <span class="fw-bold">{wallet && wallet.balance} TL</span>
                </div>)}
               
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-primary text-light" style={{ height: 120 }}>
            <div class="card-body">
              <div class="mini-stat clearfix">
                <span class="mini-stat-icon bg-brown me-0 float-end">
                  <i class="fa-solid fa-user"></i>
                </span>
                {error ? (
                  <div className="alert alert-danger my-2" role="alert">
                    {error}
                  </div>
                ) : loading ? "Balance details loading please wait." : (<div>
                  <label class="fs-4">Pending Amount </label>

                  <span class="fw-bold">{pendingAmountTotal} TL</span>
                </div>)}
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="payments-container">
        {paymentsData.map((payment) => (
          <div key={payment.id} className="payment-card">
            <div className="payment-details">
              <h2>{payment.jobTitle}</h2>
              <p>{payment.jobDescription}</p>
              <p>Go to related job details</p>
            </div>
            <div className="payment-amounts">
              <p className="fw-bold fs-5 text-dark">+ {payment.incomingAmount} TL </p>
              <p className="text-success">Incoming amount</p>
            </div>

          </div>
        ))}
      </div>
    </UserLayout>
  );
};

export default PaymentsPage;
