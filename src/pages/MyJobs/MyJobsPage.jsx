import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import { getMyJobs } from '../../redux/actions/JobAction';

const MyJobsPage = () => {
  const { loading, error, jobs } = useSelector((state) => state.myJobList);
  const dispatch = useDispatch();
  const [status, setStatus] = useState('WAITING_OFFERS');

  useEffect(() => {
    dispatch(getMyJobs(status));
  }, [dispatch, status]);

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

  const JobTabs = ({ sections }) => {
    const changeTab = (status) => {
      setStatus(status);
    };

    return (
      <div>
        <div className="row my-4 justify-content-center">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`col-3 btn btn-outline-success mx-2 ${
                status === section.status ? 'active' : ''
              }`}
              onClick={() => changeTab(section.status)}
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="row">
          {error ? (
            <div className="alert alert-danger">{error}</div>
          ) : loading ? (
            <div className="alert alert-primary">Loading...</div>
          ) : (
            jobs?.map(
              (job) =>
                status === job.status && (
                  <div key={job.id} className="col-4">
                    {InstanceOfJob(job.id, job.label, job.description, job.budget)}
                  </div>
                )
            )
          )}
        </div>
      </div>
    );
  };

  const sections = [
    { title: 'WAITING FOR OFFERS 🚀', status: 'WAITING_OFFERS' },
    { title: 'WAITING TO FINISH ⌛️', status: 'WAITING_FINISH' },
    { title: 'COMPLETED ✅', status: 'FINISHED' },
  ];

  return (
    <UserLayout>
      <h1>My Jobs</h1>
      <JobTabs sections={sections} />
    </UserLayout>
  );
};

export default MyJobsPage;
