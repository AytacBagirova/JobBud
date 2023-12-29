import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWithoutAuth } from '../../api/apiCalls';
import UserLayout from '../../components/Layout/UserLayout';
import { createMicroTransaction } from '../../redux/actions/MicroTransactionAction';
import { findChannelId } from '../../redux/actions/YtApiCodeAction';

const CreateNewMicroTransaction = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobBudget, setJobBudget] = useState(0);
  const [microJobQuota, setMicroJobQuota] = useState(0);
  const { channel } = useSelector((state) => state.ytApiChannel);
  const [channelId, setChannelId] = useState('');
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { microtransaction, error, loading } = useSelector((state) => state.microTransactionCreate);

  const handleFormSent = () => {
    const data = {
      label: jobTitle,
      description: jobDescription,
      quota: microJobQuota,
      budget: jobBudget,
      channelId: channelId,
      ownerId: userInfo.id,
    };

    dispatch(createMicroTransaction(data));
  };

  const handleGetYourChannelId = async () => {
    const response = await getWithoutAuth('/api/v1.0/microtransactions/oauth2/youtube/clientUrl');
    window.open(response.data, '_blank', 'noreferrer');
  };

  
  useEffect(() => {
    const checkYtCode = () => {
      const item = localStorage.getItem('ytCode');

      if (item) {
        dispatch(findChannelId(item));
      }
    };

    const fetchData = async () => {
      checkYtCode(); // İlk kontrolü burada yapabilirsiniz.

      window.addEventListener('storage', checkYtCode);
    };

    fetchData();

    return () => {
      window.removeEventListener('storage', checkYtCode);
    };
  }, [dispatch]);

  useEffect(() => {
    setChannelId(channel);
  }, [channel]);

  const renderTransactionStatus = () => {
    if (microtransaction) {
      return (
        <div className="alert alert-success my-2" role="alert">
          Successfully created!
        </div>
      );
    }
    if (error) {
      return (
        <div className="alert alert-danger my-2" role="alert">
          {error}
        </div>
      );
    }
    if (loading) {
      return (
        <div className="alert alert-primary my-2" role="alert">
          Your request is sent. Please wait.
        </div>
      );
    }
  };

  return (
    <UserLayout>
      <div className="px-4">
        <h1>Create New Micro Transaction</h1>
        {renderTransactionStatus()}
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
        </div>{' '}
        <div className="form-group">
          <label htmlFor="jobBudget">Job Quota</label>
          <input
            type="text"
            value={microJobQuota}
            onChange={(e) => setMicroJobQuota(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="row">
          <div className="col-9">
            <div className="form-group">
              <label htmlFor="jobBudget">Channel Id</label>
              <input
                type="text"
                value={channelId}
                onChange={(e) => setChannelId(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary"
              style={{ marginTop: 28 }}
              onClick={handleGetYourChannelId}
            >
              Get Your Channel Id Easily
            </button>
          </div>
        </div>
        <button className="btn btn-success" onClick={handleFormSent}>
          Create New Job
        </button>
      </div>
    </UserLayout>
  );
};

export default CreateNewMicroTransaction;
