import React from "react";
import "./WalletPage.css";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";
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
  const totalIncoming = paymentsData.reduce(
    (total, payment) => total + payment.incomingAmount,
    0
  );
  const totalOutgoing = paymentsData.reduce(
    (total, payment) => total + payment.outgoingAmount,
    0
  );
  const totalBalance = totalIncoming - totalOutgoing;

  return (
    <UserLayout>
      <h1>Payment History</h1>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card bg-success text-light" style={{ height: 120 }}>
            <div class="card-body">
              <div class="mini-stat clearfix">
                <span class="mini-stat-icon bg-brown me-0 float-end">
                  <i class="fa-solid fa-user"></i>
                </span>
                <div>
                  <label class="fs-4">Total Balance </label>

                  <span class="fw-bold">1000.00 TL</span>
                </div>
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
                <div>
                  <label class="fs-4">Pending Amount </label>

                  <span class="fw-bold">1000.00 TL</span>
                </div>
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
