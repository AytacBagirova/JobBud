import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDetails } from '../../redux/actions/JobAction';

function JobDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const jobDetails = useSelector((state) => state.jobDetails);

  const { error, loading, jobInfo } = jobDetails;

  useEffect(() => {
    dispatch(getJobDetails(id)); // Assuming jobData.id is needed for fetching job details
  }, []);

  const [editText, setEditText] = useState('');

  const handleSubmit = () => {
    // Add logic for handling the form submission
  };

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
            {/* Offer Card for Freelancer */}
            {userInfo.userType === 'FREELANCER' && (
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Offer Details</h5>
                  <p className="card-text">Offer Amount</p>
                  {userInfo.userType === 'FREELANCER' ? (
                    <div className="d-flex justify-content-start">
                      <br />
                      Status = {jobInfo.status}
                    </div>
                  ) : (
                    <div className="card-footer d-flex justify-content-end">
                      <a className="btn btn-success">Accept</a>
                      <a className="btn btn-danger mx-2">Reject</a>
                    </div>
                  )}
                  <br />
                </div>
              </div>
            )}

            {/* Offer Card for Customer */}
            {userInfo.userType === 'CUSTOMER' && (
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">Offer Details</h5>
                  <p className="card-text">Offer Amount: $20</p>
                  <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-danger mx-2">Reject</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      <br />
      {userInfo.userType === 'FREELANCER' && (
        <div className="card">
          <div className="card-body d-flex justify-content-between">
            <div>
              <div className="mb-3">
                <label htmlFor="editText" className="form-label">
                  Project:
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Submit Project
              </button>
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  );
}

export default JobDetailsPage;
