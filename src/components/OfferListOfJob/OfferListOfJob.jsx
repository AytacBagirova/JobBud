import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSpesificOffers, offerChangeStatus } from '../../redux/actions/OfferAction';

const OfferListOfJob = ({ job }) => {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const dispatch = useDispatch();
  const { loading, error, offers } = useSelector((state) => state.spesificOfferList);
  const { loading: loadingOfferChange, error: errorOfferChange } = useSelector(
    (state) => state.offerChangeStatus
  );

  useEffect(() => {
    dispatch(getSpesificOffers(job.id));
  }, [dispatch, job.id]);

  const handleAccept = (offerId) => {
    dispatch(offerChangeStatus(offerId, 'ACCEPTED'));
  };

  const handleReject = (offerId) => {
    dispatch(offerChangeStatus(offerId, 'DECLINED'));
  };

  return (
    <div>
      {(error || errorOfferChange) && (
        <div className="alert alert-danger my-2" role="alert">
          {error || errorOfferChange}
        </div>
      )}

      {loading || loadingOfferChange ? (
        <div>Loading...</div>
      ) : offers && offers.length > 0 ? (
        <div className="card mt-4">
          <div className="card-body">
            <h3 className="card-title text-center">Offers</h3>

            {offers
              .filter(
                (offer) => userInfo.id === offer.offerOwnerId || userInfo.id === job.jobOwnerId
              )
              .map((offer) => (
                <div className="card my-2" key={offer.id}>
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <label className="text-dark fw-bold">Offer: {offer.price} TL</label>
                      <p className="text-muted">Description: {offer.description}</p>
                      <small className="text-primary">Offered by: {offer.offerOwnerUsername}</small>
                    </div>

                    {userInfo.id === job.jobOwnerId && (
                      <div className="py-4">
                        {offer.status === 'OFFERED' ? (
                          <>
                            <button
                              className="btn btn-success"
                              onClick={() => handleAccept(offer.id)}
                            >
                              Accept
                            </button>
                            <button
                              className="btn btn-danger mx-2"
                              onClick={() => handleReject(offer.id)}
                            >
                              Reject
                            </button>
                          </>
                        ) : (
                          <div className="border p-3">{offer.status}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        'No offers yet'
      )}
    </div>
  );
};

export default OfferListOfJob;
