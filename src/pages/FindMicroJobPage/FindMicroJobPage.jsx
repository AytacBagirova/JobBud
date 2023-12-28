import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import MicroJobCard from '../../components/MicroJobCard/MicroJobCard';
import { getMicroTransactions } from '../../redux/actions/MicroTransactionAction';

const FindMicroJobPage = () => {
  const microTransactionList = useSelector((state) => state.microTransactionList);
  const { loading, error, microtransactions } = microTransactionList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMicroTransactions());
  }, []);

  const InstanceOfMicroJobCard = (jobData) => {
    
return (
  <div key={jobData.id} className="card w-100 mb-3">
    <div className="card-body d-flex justify-content-between">
      <div>
        <a href={`microtransactions/${jobData.id}`}>
          {' '}
          <h5 className="card-title"> {jobData?.label}</h5>
        </a>
        <p className="card-text">{jobData?.description}</p>
      </div>
      <div className="text-end">
        {/* Assume your YouTube channel name is "MyChannel" */}
        <span className="badge bg-success"> {jobData?.budget / jobData?.quota} TL / per sub.</span>
      </div>
    </div>
    <div className="card-footer"></div>
  </div>
);
  }
  return (
    <UserLayout>
      <h1>FIND MICRO JOB</h1>
      {loading ? (
        <div className="alert alert-warning my-2" role="alert">
          Please Wait. Trying to Reach Micro Transactions...
        </div>
      ) : error ? (
        <div className="alert alert-danger my-2" role="alert">
          We couldn't reach micro transactions. Please try again later.
        </div>
      ) : (
        microtransactions &&
        microtransactions.map((microTransaction) => (
          InstanceOfMicroJobCard(microTransaction)
        ))
      )}
    </UserLayout>
  );
};

export default FindMicroJobPage;
