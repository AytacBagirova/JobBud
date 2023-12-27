import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserLayout from '../../components/Layout/UserLayout';
import { getOffers } from '../../redux/actions/OfferAction';

const OfferHistoryPage = () => {
  const dispatch = useDispatch();
  const offerList = useSelector((state) => state.offerList);
  const { error, loading, offers } = offerList;
  useEffect(() => {
   dispatch(getOffers())
 
  }, [])
  
  const timestampToDate = (timestamp) => {
  let date = new Intl.DateTimeFormat("tr-TR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  }).format(timestamp);
    return date;
  }
  return (
    <UserLayout>
      <div className="offer-history-container">
        <h1>Offer History</h1>

      <div className="row">
  {error ? (
    <div className="alert alert-danger my-2" role="alert">
      {error}
    </div>
  ) : loading ? (
    "Loading please wait."
  ) : offers ? (
    offers.map((offer) => (
      <div className="col-md-6" key={offer.id}>
        <div className="card m-3">
          <div className="card-body position-relative">
            <div className="card-content">
              <h4>{offer.description}</h4>
              <p>Price: {offer.price} TL</p>
              <p>Date: {timestampToDate(offer.datetime)}</p>
            </div>
            <div className="badge bg-success">{offer.status}</div>
            <div className="card-action position-absolute top-0 end-0 p-2">
              <a href={`jobdetails/${offer.jobId}`} className="btn btn-outline-primary">Go to Job</a>
            </div>
          </div>
        </div>
      </div>
    ))
  ) : (
    "There is no offer that you have."
  )}
</div>
</div>

    </UserLayout>
  );
};

export default OfferHistoryPage;
