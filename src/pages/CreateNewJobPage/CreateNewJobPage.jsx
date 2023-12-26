import React, { useState } from 'react';
import './CreateNewJobPage.css'; // Import your CSS file
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { createJob } from '../../redux/actions/JobActions';

const CreateNewJobPage = () => {
  // create new job form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState(1);
  const [jobDeadline, setJobDeadline] = useState('');
  const dispatch = useDispatch();

  const createdJob = useSelector((state) => state.jobCreate)
  const {error,job,loading}=createdJob
  const handleFormSent = () => {
     const selectedDateTime = new Date(jobDeadline);
     const jobDeadline_timestamp = selectedDateTime.getTime();
    const jobData = {
      jobTitle,
      jobDescription,
      jobBudget,
      jobDeadline_timestamp
    };
    console.log("Job Data:", jobData); // debugging
    dispatch(createJob(jobData));
  };

  return (
    <UserLayout>
      <div className="job-form-container">
        <h1>Create New Job Page</h1>
        {error ? (
          <div class="alert alert-danger my-2" role="alert">
            {error}
          </div>
        ) : loading ? (
          <div class="alert alert-primary my-2" role="alert">
            Request is sending
          </div>
        ) : job ? (
          <div class="alert alert-success my-2" role="alert">
            Job succesfully created!
          </div>
        ) : (
          ""
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

        <div className="btn btn-success" onClick={handleFormSent}>
          Create New Job
        </div>
      </div>
    </UserLayout>
  );
};

export default CreateNewJobPage;
