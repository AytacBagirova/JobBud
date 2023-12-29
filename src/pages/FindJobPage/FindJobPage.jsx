import { useEffect, useState } from 'react';
import './FindJobPage.css';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../redux/actions/JobAction';
import JobCard from '../../components/JobCard/JobCard';

function FindJobPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const filteredJobs = useSelector((state) => state.jobList);
  const { jobs, loading, error } = filteredJobs;
  const offerCreateState = useSelector((state) => state.offerCreate);
  const { error: offerCreateError, loading: offerCreateLoading, offerDetail } = offerCreateState;

  const handleSearchButton = () => {
    dispatch(getJobs(searchQuery));
  };

  useEffect(() => {
    dispatch(getJobs(''));
  }, []);

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
              <div className="btn btn-outline-teal w-auto" onClick={handleSearchButton}>
                Search It 🔎
              </div>
            </div>
          </div>
        </div>
      </div>
      {offerCreateError ? (
        <div className="alert alert-danger" role="alert">
          {offerCreateError}
        </div>
      ) : offerCreateLoading ? (
        <div className="alert alert-primary" role="alert">
          Loading...
        </div>
      ) : (
        offerDetail && (
          <div className="alert alert-success" role="alert">
            Offer Created!
          </div>
        )
      )}
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
