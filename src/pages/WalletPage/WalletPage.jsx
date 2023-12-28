import React from 'react';
import './WalletPage.css';
import Layout from '../../components/Layout/Layout';
import UserLayout from '../../components/Layout/UserLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletHistory, walletGetBalance } from '../../redux/actions/WalletAction';

const PaymentsPage = () => {
  const walletState = useSelector((state) => state.walletDetails);

  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;
  const { error, loading, wallet } = walletState;
  const walletHistoryState = useSelector((state) => state.walletTransactions);
  const { error: historyError, loading: loadingHistory, walletHistory } = walletHistoryState;

  const pendingAmountTotal =
    wallet && wallet.pendingAmounts
      ? wallet.pendingAmounts.reduce((total, item) => total + (item.amount || 0), 0)
      : 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(walletGetBalance());
  }, []);
  useEffect(() => {
    if (wallet) dispatch(getWalletHistory(wallet.id));
  }, [walletState]);

  const totalBalanceCard = (columnOfCard) => {
    return (
      <div class={`col-md-${columnOfCard}`}>
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
              ) : loading ? (
                'Balance details loading please wait.'
              ) : (
                <div>
                  <label class="fs-4">Total Balance </label>
                  <span class="fw-bold">{wallet && wallet.balance} TL</span>
                </div>
              )}
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const pendingAmountCard = (columnOfCard) => {
    return (
      <div class={`col-md-${columnOfCard}`}>
        {' '}
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
              ) : loading ? (
                'Balance details loading please wait.'
              ) : (
                <div>
                  <label class="fs-4">Pending Amount </label>
                  <span class="fw-bold">{pendingAmountTotal} TL</span>
                </div>
              )}
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <UserLayout>
      <h1 className="my-4">Wallet Detail</h1>
      <div class="row justify-content-center">
        {userInfo && userInfo.userType === 'CUSTOMER' ? (
          totalBalanceCard(8)
        ) : (
          <>
            {totalBalanceCard(5)}
            {pendingAmountCard(5)}
          </>
        )}
      </div>

      <h1 className="my-4">Wallet History</h1>

      <div className="payments-container">
        {loadingHistory ? (
          'Loading please wait.'
        ) : historyError ? (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        ) : walletHistory ? (
          walletHistory.map((transaction) => (
            <div key={transaction.id} className="payment-card">
              <label className="fs-5 mt-3">{transaction.description}</label>
              <div className="payment-amounts">
                <p className="fw-bold fs-5 text-dark">+ {transaction.amount} TL </p>
                <p className={transaction.actionType=="INCOMING"? "text-success" : "text-danger"}>{transaction.actionType}</p>
              </div>
            </div>
          ))
        ) : (
          'No payment history found.'
        )}
      </div>
    </UserLayout>
  );
};

export default PaymentsPage;
