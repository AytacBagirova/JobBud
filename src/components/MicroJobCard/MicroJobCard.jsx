import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { getWithAuth } from '../../api/apiCalls';
import {
  completeMicroTransaction,
  createMicroTransaction,
} from '../../redux/actions/MicroTransactionAction';

const MicroJobCard = (props) => {
  const { jobData, withButton = false, withHref = false } = props;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);
  const { loading, error, microtransaction } = useSelector(
    (state) => state.completeMicroTransaction
  );
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const handleSubscribeButton = () => {
    window.open(`https://www.youtube.com/channel/${jobData.channelId}`, '_blank', 'noreferrer');
  };
  const handleProofButton = async () => {
    const response = await getWithAuth('/api/v1.0/microtransactions/oauth2/youtube/clientUrl');
    window.open(response.data, '_blank', 'noreferrer');
  };

  useEffect(async () => {
    function checkYtCode() {
      const item = localStorage.getItem('ytCode');

      if (item) {
        dispatch(completeMicroTransaction(item, id));
      }
    }

    window.addEventListener('storage', checkYtCode);
    if (withButton) {
      const response = await getWithAuth(`/api/v1.0/microtransactions/${id}/isCompleted`, {
        freelancerId: userInfo.id,
      });

      console.log('🚀 ~ file: MicroJobCard.jsx:41 ~ useEffect ~ response:', response);
      setIsCompleted(response);
    }
    return () => {
      window.removeEventListener('storage', checkYtCode);
    };
  }, []);

  return (
    <>
      <div className="my-3">
        {error ? (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        ) : loading ? (
          <div className="alert alert-warning my-2" role="alert">
            Please Wait. Trying to Reach Micro Transactions...
          </div>
        ) : (
          microtransaction && (
            <div className="alert alert-success my-2" role="alert">
              Your subscription is completed.
            </div>
          )
        )}
      </div>
      {isCompleted && (
        <label className="text-center text-danger">
          You already completed this micro transaction.
        </label>
      )}
      <div className="card w-100 mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <a href={withHref && `/microtransactions/${jobData?.id}`}>
              <h5 className="card-title"> {jobData?.label}</h5>
            </a>
            <p className="card-text">{jobData?.description}</p>
          </div>
          <div className="text-end">
            {/* Assume your YouTube channel name is "MyChannel" */}
            <span className="badge bg-success">
              {' '}
              {jobData?.budget / jobData?.quota} TL / per sub.
            </span>
          </div>
        </div>
        <div className="card-footer">
          {withButton && !isCompleted ? (
            <>
              <div className="btn btn-outline-teal mx-2" onClick={handleSubscribeButton}>
                Subscribe
              </div>
              <div className="btn btn-outline-teal mx-2" onClick={handleProofButton}>
                Proof Your Subscription
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default MicroJobCard;
