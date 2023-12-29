import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetails } from '../../redux/actions/JobAction';
import OfferListOfJob from '../../components/OfferListOfJob/OfferListOfJob';
import Work from '../../components/Work/Work';

function JobDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const jobDetails = useSelector((state) => state.jobDetails);
  const { error, loading, jobInfo } = jobDetails;
  const jobId = id;
  useEffect(() => {
    dispatch(getJobDetails(jobId));
  }, []);


  return (
    <UserLayout>
      {error ? (
        <div className="alert alert-danger my-2" role="alert">
          {error}
        </div>
      ) : loading ? (
        "Loading..."
      ) : jobInfo ? (
        <div className="job-details">
          <div className="page-title">
            <h1>Job Details</h1>
            <div className="card">
              <div className="card-body d-flex justify-content-between">
                <div>
                  <h5 className="card-title">Job Title</h5>
                  <p className="card-text">{jobInfo.label}</p>
                  <h5 className="card-title">Job Description</h5>
                  <p className="card-text">{jobInfo.description}</p>
                  <h5 className="card-title">Status</h5>
                  <p className="card-text">{jobInfo.status}</p>
                </div>
                <div className="text-end d-flex align-items-center"></div>
              </div>
            </div>
          
                <OfferListOfJob job={jobInfo}></OfferListOfJob>
     <Work job={jobInfo}></Work>
                


          </div>
        </div>
      ) : (
        ""
      )}
      <br />
  
    </UserLayout>
  );
}

export default JobDetailsPage;
