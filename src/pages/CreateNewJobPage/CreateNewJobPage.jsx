import React, { useState } from 'react';
import './CreateNewJobPage.css'; // Import your CSS file
import Layout from '../../components/Layout/Layout';

const CreateNewJobPage = () => {
  // create new job form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState('');

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };
  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };
  const handleJobBudgetChange = (event) => {
    setJobBudget(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Job Title: ', jobTitle);
    console.log('Job Description: ', jobDescription);
    console.log('Budget: ', jobBudget);
  };

  return (
    <Layout>
    <div className="job-form-container">
      <h1>Create New Job Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={handleJobTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <input
            type="text"
            id="jobDescription"
            name="jobDescription"
            value={jobDescription}
            onChange={handleJobDescriptionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobBudget">Job Budget</label>
          <input
            type="text"
            id="jobBudget"
            name="jobBudget"
            value={jobBudget}
            onChange={handleJobBudgetChange}
          />
        </div>
        <button type="submit">Create New Job</button>
      </form>
      </div>
      </Layout>
  );
};

export default CreateNewJobPage;
