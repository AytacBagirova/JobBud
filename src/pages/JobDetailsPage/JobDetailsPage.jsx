import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout";

function JobDetailsPage() {
  const [editedJob, setEditedJob] = useState("Job goes here.");

  const handleEditChange = (e) => {
    setEditedJob(e.target.value);
  };

  const handleCancel = () => {
  };

  const handleSubmit = () => {
  };

  return (
    <Layout>
      <div className="job-details">
        <h2>Job Details</h2>
        <div className="card w-100 mb-3">
          <div className="card-body">
            <h5 className="card-title">Job Title</h5>
            <textarea
              className="form-control"
              value={editedJob}
              onChange={handleEditChange}
            />
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-success ml-2" onClick={handleSubmit}>Submit</button>
            <button className="btn btn-danger ml-2" onClick={handleCancel}>Terminate</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JobDetailsPage;