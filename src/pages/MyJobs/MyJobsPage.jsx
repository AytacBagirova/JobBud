import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import { getJobs } from '../../redux/actions/JobAction';

const MyJobsPage = () => {
  const { loading, error, jobs } = useSelector((state) => state.jobList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs(''));
  }, []);

  const InstanceOfJob = (id, label, description, budget) => {
    return (
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">{label}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-end">
            <span className="badge bg-success">
              Budget
              <br /> {budget} TL
            </span>
          </div>
        </div>
        <div className="card-footer">
          <a href={`JobDetails/${id}`} className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  };

  const listJobs = (status) => {
    let list = [];
    const filteredJobs = jobs ? jobs.filter((job) => job.status === status) : [];
    for (let i = 0; i < filteredJobs.length; i++) {
      const job = filteredJobs[i];
      list.push(
        <div className="col-6" key={job.id}>
          {InstanceOfJob(job.id, job.label, job.description, job.budget)}
        </div>
      );
    }
    return list;
  
  };

  const activeJobs = listJobs('WAITING_OFFERS');
  const pendingJobs = listJobs('WAITING_FINISH');
  const completedJobs = listJobs('FINISHED');
  const sections = [
    { title: 'WAITING FOR OFFERS 🚀', jobs: activeJobs },
    { title: 'WAITING TO FINISH ⌛️', jobs: pendingJobs },
    { title: 'COMPLETED ✅', jobs: completedJobs },
  ];

  const JobTabs = ({ sections }) => {
    const [activeTab, setActiveTab] = useState(0);

    const changeTab = (index) => {
      setActiveTab(index);
    };

    return (
      <div>
        <div className="row my-4 justify-content-center">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`col-3 btn btn-outline-success mx-2 ${
                activeTab === index ? 'active' : ''
              }`}
              onClick={() => changeTab(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            className="w3-container w3-display-container city"
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            <div className="row">
              {error ? (
                <div className="alert alert-danger">{error}</div>
              ) : loading ? (
                <div className="alert alert-primary">Loading...</div>
              ) : (
                section.jobs
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <UserLayout>
      <h1>My Jobs</h1>
      <JobTabs sections={sections} />
    </UserLayout>
  );
};

export default MyJobsPage;
