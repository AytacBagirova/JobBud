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
          <MicroJobCard jobData={microTransaction} withHref={true} />
        ))
      )}
    </UserLayout>
  );
};

export default FindMicroJobPage;
