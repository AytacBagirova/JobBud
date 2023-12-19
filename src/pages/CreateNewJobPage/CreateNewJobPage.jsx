import React, { useState } from 'react';
import './CreateNewJobPage.css'; // Import your CSS file
import Layout from '../../components/Layout/Layout';
import UserLayout from '../../components/Layout/UserLayout';

const CreateNewJobPage = () => {
  // create new job form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState('');

  const handleFormSent = () => {
  
    console.log('Job Title: ', jobTitle);
    console.log('Job Description: ', jobDescription);
    console.log('Budget: ', jobBudget);
  };

  return (
    <UserLayout>
      <div className="job-form-container">
        <h1>Create New Job Page</h1>

        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <input
            type="text"
            id="jobDescription"
            name="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobBudget">Job Budget</label>
          <input
            type="text"
            id="jobBudget"
            name="jobBudget"
            value={jobBudget}
            onChange={(e) => setJobBudget(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="btn btn-success" onClick={handleFormSent}>
          Create New Job
        </div>
      </div>
    </UserLayout>
  );
};

export default CreateNewJobPage;
