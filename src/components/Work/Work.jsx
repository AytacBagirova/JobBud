import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { completeWorkAction, getWorkAction, workChangeStatus } from '../../redux/actions/WorkAction';

const Work = ({ job }) => {
  const jobId = job.id;

  const [workContent, setWorkContent] = useState('');
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const { loading, error, work } = useSelector((state) => state.workDetail);
  const [workStatus, setWorkStatus] = useState('WAITING_FINISH');
  const {
    loading: loadingWork,
    error: workError,
    work: completeWork,
  } = useSelector((state) => state.workComplete);
  const { loading: loadingWorkChange, error: errorWorkChange } = useSelector(
    (state) => state.workChangeStatus
  );

  const [confirmationMessage, setConfirmationMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    dispatch(getWorkAction(jobId));
  }, [dispatch, jobId]);

  useEffect(() => {
    if (work) {
      setWorkContent(work.workContent);
      setWorkStatus(work.status);
    }
  }, [work, dispatch]);

  useEffect(() => {
    if (completeWork) {
      setWorkContent(completeWork.workContent);
      setWorkStatus(completeWork.status);
      setConfirmationMessage('Work Sent To Approve');
      setIsSuccess(true);
    }
  }, [completeWork, dispatch]);

  const handleWorkSubmit = () => {
    dispatch(completeWorkAction(work.id, workContent))
      .then(() => {
        setConfirmationMessage('Work Submitted Successfully');
        setIsSuccess(true);
      })
      .catch((error) => {
        setConfirmationMessage(`Error: ${error.message}`);
        setIsSuccess(false);
      });
  };

  const handleWorkAccept = (workId) => {
    dispatch(workChangeStatus(workId, 'APPROVED'))
      .then(() => {
        setConfirmationMessage('Work has been accepted successfully.');
        setIsSuccess(true);
      })
      .catch((error) => {
        setConfirmationMessage(`Error: ${error.message}`);
        setIsSuccess(false);
      });
  };

  const handleWorkReject = (workId) => {
    dispatch(workChangeStatus(workId, 'REJECTED'))
      .then(() => {
        setConfirmationMessage('Work has been rejected successfully.');
        setIsSuccess(true);
      })
      .catch((error) => {
        setConfirmationMessage(`Error: ${error.message}`);
        setIsSuccess(false);
      });
  };

  return (
    <div>
      {error ? (
        <div className="alert alert-warning my-2" role="alert">
          {error}
        </div>
      ) : loading ? (
        'Loading...'
      ) : work ? (
        work.workerId === userInfo.id || job.jobOwnerId === userInfo.id ? (
          <div className="card mt-4 ">
            <div className="card-body">
              <h4 className="text-center">Work</h4>
              {workError || errorWorkChange ? (
                <div className="alert alert-danger my-2" role="alert">
                  {workError || errorWorkChange}
                </div>
              ) : loadingWork || loadingWorkChange ? (
                'Loading...'
              ) : confirmationMessage ? (
                <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} my-2`} role="alert">
                  {confirmationMessage}
                </div>
              ) : (
                ''
              )}
              <div>
                <div className="mb-3">
                  <label htmlFor="editText" className="form-label">
                    Project:
                  </label>
                  <textarea
                    className="form-control"
                    value={workContent}
                    onChange={(e) => setWorkContent(e.target.value)}
                    readOnly={workStatus !== 'WAITING_FINISH'}
                  ></textarea>
                </div>

                {work.workerId === userInfo.id ? (
                  <button
                    className="btn btn-primary"
                    disabled={workStatus !== 'WAITING_FINISH'}
                    onClick={handleWorkSubmit}
                  >
                    Submit Project
                  </button>
                ) : (
                  job.jobOwnerId == userInfo.id && (
                    <div className="py-4">
                      {work.status === 'WAITING_APPROVE' ? (
                        <>
                          <button
                            className="btn btn-success"
                            onClick={() => handleWorkAccept(work.id)}
                          >
                            Accept
                          </button>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={() => handleWorkReject(work.id)}
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <div className="border p-3 justify-content-center bg-teal text-white">{work.status}</div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        ) : (
          ''
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default Work;
