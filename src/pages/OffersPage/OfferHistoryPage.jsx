import UserLayout from '../../components/Layout/UserLayout';

const OfferHistoryPage = () => {
  // Örnek teklif geçmişi verisi
  const offerHistoryData = [
    { id: 1, offerName: 'İlk Teklif', date: '2023-01-01' },
    { id: 2, offerName: 'İkinci Teklif', date: '2023-02-15' },
    { id: 3, offerName: 'Üçüncü Teklif', date: '2023-03-22' },
    // Daha fazla örnek teklif geçmişi verisi...
  ];

  return (
    <UserLayout>
      <div className="offer-history-container">
        <h1>Offer History</h1>
        <div className="offer-cards">
          {offerHistoryData.map((offer) => (
            <div className="card m-3" key={offer.id}>
              <div className="card-body">
                <div className="card-content">
                  <h4>{offer.offerName}</h4>
                  <p>Date: {offer.date}</p>
                </div>
                <div className="card-action">
                  <div className="btn btn-outline-primary">
                    Go to Job Detail
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default OfferHistoryPage;
