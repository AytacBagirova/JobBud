import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import UserLayout from '../../components/Layout/UserLayout';
import MicroJobCard from '../../components/MicroJobCard/MicroJobCard';
import { getMicroTransaction, getMicroTransactions } from '../../redux/actions/MicroTransactionAction';

const MicroTransactionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { loading, error, microtransaction } = useSelector((state) => state.microTransactionSingle)
  useEffect(() => {
  dispatch(getMicroTransaction(id))
  }, [])
  
    return (
        <UserLayout>
           
        {loading ? ("Loading...") : error ? (<div className='alert alert-danger my-2' role='alert'>{error}</div>
        
        ) : (<MicroJobCard jobData={microtransaction} withButton={true}/>)}

       </UserLayout>
    );
};

export default MicroTransactionDetail;