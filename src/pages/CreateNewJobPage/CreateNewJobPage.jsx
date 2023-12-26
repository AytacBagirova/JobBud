import { useState } from 'react';
import './CreateNewJobPage.css'; // Import your CSS file
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch } from 'react-redux';
import { createJob } from '../../redux/actions/JobActions';

const CreateNewJobPage = () => {
  // create new job form
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState('');
  const dispatch = useDispatch();

  const handleFormSent = () => {
    const jobData = {
      jobTitle,
      jobDescription,
      jobBudget,
    };
    console.log('Job Data:', jobData); // debugging
    dispatch(createJob(jobData));
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
        <button type="button" className="btn btn-success" onClick={handleFormSent}>
          Create New Job
        </button>
      </div>
    </UserLayout>
  );
};

export default CreateNewJobPage;
