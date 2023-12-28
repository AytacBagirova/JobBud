import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import { getMyJobs } from '../../redux/actions/JobAction';
import { getMyWorks } from '../../redux/actions/WorkAction';

const MyJobsPage = () => {
  const { loading, error, works } = useSelector((state) => state.myWorkList);
  const dispatch = useDispatch();
  const [status, setStatus] = useState('WAITING_FINISH');

  useEffect(() => {
    dispatch(getMyWorks(status));
  }, [dispatch, status]);

  const InstanceOfWorkCard = (work) => {
    return (
      <div key={work.id} className="card mb-3" style={{ marginBottom: '20px' }}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div>
              <h5 className="card-title">{work.jobLabel}</h5>
              <p className="card-text">{work.jobDescription}</p>
            </div>
            <div>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ color: 'green' }}
              >
                <div>
                  <small className="text-danger text-sm">
                    Actual Job Price: {work.actualJobPrice} TL
                  </small>
                  <label className=" fw-bold"> Your earn: {work.acceptedOfferPrice} TL</label>
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-between">
            <a href={`jobdetails/${work.jobId}`} className="btn btn-outline-teal">
              Job Detail
            </a>
            <div className='pt-2 ms-auto'>
              <small className="text-muted">
               Waiting you to complete it.
              </small>
            </div>

            <div></div>
          </div>
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
             works?.map(
              (work) =>
                status === work.status && (
                  <div key={work.id} className="col-6">
                    {InstanceOfWorkCard(work)}
                  </div>
                )
            )
          )}
        </div>
      </div>
    );
  };

  const sections = [
    { title: 'WAITING TO FINISH ⌛️', status: 'WAITING_FINISH' },
    { title: 'COMPLETED ✅', status: 'APPROVED' },
  ];

  return (
    <UserLayout>
      <h1>My Works</h1>
      <JobTabs sections={sections} />
    </UserLayout>
  );
};

export default MyJobsPage;
