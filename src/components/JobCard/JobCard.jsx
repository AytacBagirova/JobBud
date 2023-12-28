import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeOffer } from '../../redux/actions/OfferAction';

const JobCard = ({ jobData }) => {
  const userState = useSelector((state) => state.userLogin);
  const { userInfo } = userState;
  const offerCreateState = useSelector((state) => state.offerCreate);
  const { error, loading, offerDetail } = offerCreateState;
  const [offerPrice, setOfferPrice] = useState(0);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleMakeOffer = () => {
    if (jobData.budget >= offerPrice) {
      alert('Your offer price must be higher than budget');
    } else {
      dispatch(
        makeOffer({ price: offerPrice, description, jobId: jobData.id, ownerId: userInfo.id })
      );
    }
  };
  return (
    <div>
      {' '}
      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : loading ? (
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
      <br />
      <div className="card w-100 ">
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
              <a
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModalLabel${jobData.id}`}
              >
                Make Offer
              </a>
            </div>
            <div className="col-6 pt-2 ms-auto text-end">
              Owner:<b> {jobData.jobOwnerUsername}</b>
            </div>
          </div>{' '}
          <div
            class="modal fade"
            id={`exampleModalLabel${jobData.id}`}
            tabindex="-1"
            aria-labelledby={`exampleModalLabel${jobData.id}`}
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Make Offer
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">
                        Your offer for price:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="recipient-name"
                        value={offerPrice}
                        onChange={(e) => setOfferPrice(e.target.value)}
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label">
                        Description:
                      </label>
                      <textarea
                        class="form-control"
                        id="message-text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <div class="btn btn-primary" onClick={() => handleMakeOffer()}>
                    Send Offer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
