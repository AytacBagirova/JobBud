import React, { useState } from 'react';
import Layout from "../../components/Layout/Layout";
import UserLayout from '../../components/Layout/UserLayout';

function JobDetailsPage() {
//Burası İş detaylarının ve o işe gelen offerların listesinin bulunduğu sayfa olacak.
//İş update için editJob gibisinden farklı bir component oluşturulabilir.
// Aynı zamanda work ün gönderileceği sayfa da burası olacak. alt kısımda teklifler başlığıyla offer cardları,
// en altta da work göndermek için 1 tane card bulunmalı.

  const [editedJob, setEditedJob] = useState("Job goes here.");
  const [jobTitle, setJobTitle] = useState("Job Title");

  const handleEditChange = (e) => {
    setEditedJob(e.target.value);
  };



  const handleSubmit = () => {
  };

  return (
    <UserLayout>
      <div className="job-details">
        <h2>Job Details</h2>
        <div className="card w-100 mb-3">
          <div className="card-body">
            <div className="form-group">
              {" "}
              <input type="text" value={jobTitle} className="form-control" />
            </div>
          <div className="form-group"> <textarea
              className="form-control"
              value={editedJob}
              onChange={handleEditChange}
            />
          </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button className="btn btn-success ml-2" onClick={handleSubmit}>
              Update
            </button>
          
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default JobDetailsPage;