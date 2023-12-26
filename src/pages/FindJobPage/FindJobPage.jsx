import { useEffect, useState } from 'react';
import './FindJobPage.css';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions/JobAction';

// component
const JobCard = ({ jobData }) => (
  <div className="card w-100 mb-3">
    <div className="card-body d-flex justify-content-between">
      <div>
        <h5 className="card-title">{jobData.label}</h5>
        <p className="card-text">{jobData.description}</p>
      </div>
      <div className="text-end">
        <span className="badge bg-success">
          Budget
          <br /> {jobData.budget} TL
        </span>
      </div>
    </div>
    <div className="card-footer">
      <div className="row">
        <div className="col-6">
          <a href="#" className="btn btn-primary">
            Make Offer
          </a>
        </div>
        <div className="col-6">
          Owner Username: {jobData.ownerUsername}
        </div>
      </div>
    </div>
  </div>
);

function FindJobPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const filteredJobs = useSelector((state) => state.jobList);
  const { jobs, loading, error } = filteredJobs;

  const handleSearchButton = () => {
    dispatch(getJobs(searchQuery));
  };

   useEffect(() => {

    dispatch(getJobs(''));
  }, [])
  
 const listJobs = () => {
  return jobs && jobs.length > 0 ? (
    jobs.map((job) => <JobCard key={job.id} jobData={job} />)
  ) : (
    <p>We couldn't find any job about your search</p>
  );
};

  return (
    <UserLayout>
      <h1>FIND JOB</h1>
      <div className="d-flex justify-content-center mx-auto">
        <div className="col-12 my-5">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                className="form-control"
                placeholder="Search Job "
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="col-3">
              <div
                className="btn btn-outline-teal w-auto"
                onClick={handleSearchButton}
              >
                Search It 🔎
              </div>
            </div>
          </div>
        </div>
      </div>
      {error ? (
        <div className="alert alert-danger">{error}</div>
      ) : loading ? (
        <div className="alert alert-primary">Loading...</div>
      ) : (
        listJobs()
      )}
    </UserLayout>
  );
}

export default FindJobPage;
