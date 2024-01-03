import React, { useState } from 'react';
import './CreateNewJobPage.css';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../../redux/actions/JobAction';

const CreateNewJobPage = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState(1);
  const [jobDeadline, setJobDeadline] = useState('');
  const dispatch = useDispatch();

  const createdJob = useSelector((state) => state.jobCreate);
  const { error, job, loading } = createdJob;

  const handleFormSubmit = () => {
    if (!jobTitle || !jobDescription || !jobBudget || !jobDeadline) {
      alert('Please fill in all fields.');
      return;
    }
    const selectedDateTime = new Date(jobDeadline);
    const jobDeadline_timestamp = selectedDateTime.getTime();
    const jobData = {
      jobTitle,
      jobDescription,
      jobBudget,
      jobDeadline_timestamp,
    };

    console.log('Job Data:', jobData); // debugging
    dispatch(createJob(jobData));
  };

  return (
    <UserLayout>
      <div className="job-form-container">
        <h1>Create New Job Page</h1>
        {error ? (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        ) : loading ? (
          <div className="alert alert-primary my-2" role="alert">
            Request is sending
          </div>
        ) : job ? (
          <div className="alert alert-success my-2" role="alert">
            Job successfully created!
          </div>
        ) : (
          ''
        )}

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
            type="number"
            id="jobBudget"
            name="jobBudget"
            value={jobBudget}
            onChange={(e) => setJobBudget(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobBudget">Job Deadline</label>
          <input
            type="datetime-local"
            value={jobDeadline}
            onChange={(e) => setJobDeadline(e.target.value)}
            className="form-control"
            min={new Date().toISOString().slice(0, -8)}
          />
        </div>

        <button className="btn btn-success" onClick={handleFormSubmit}>
          Create New Job
        </button>
      </div>
    </UserLayout>
  );
};

export default CreateNewJobPage;