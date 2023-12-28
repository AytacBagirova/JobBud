// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import { getMicroTransactions } from '../../redux/actions/MicroTransactionAction';

function MyMicroJobsPage() {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const microTransactionState = useSelector((state) => state.microTransactionList);
  const { loading, error, microtransactions:microTransactions } = microTransactionState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMicroTransactions(userInfo.id));
  }, []);

  const listMicroJobs = () => {
    console.log(microTransactions);
  
    return (
      microTransactions &&
      microTransactions.map((microTransaction) => InstanceOfMicroJob(microTransaction))
    );
  };
  const InstanceOfMicroJob = (microTransaction) => {
    return (
      <div key={microTransaction.id} className="card mb-3" style={{ marginBottom: '20px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{microTransaction.label}</h5>
              <p className="card-text">{microTransaction.description}</p>
            </div>
            <div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ color: 'green' }}
              >
                <h5 className="card-title">{microTransaction.budget} TL </h5>
              </div>
   
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <div>
              <small className="text-muted mx-2">Total Quota: {microTransaction.quota}</small>
              <small className="text-muted mx-2">
                Remaining: {(microTransaction.quota - microTransaction.numberDone)}
              </small>
            </div>
            <div>
              <small className="text-muted">
                Total Gained Subscription: {microTransaction.numberDone}
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <UserLayout>{listMicroJobs()}</UserLayout>;
}

export default MyMicroJobsPage;
