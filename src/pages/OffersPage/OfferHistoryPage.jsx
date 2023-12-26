import React from "react";
import UserLayout from "../../components/Layout/UserLayout";

const OfferHistoryPage = () => {
  // Örnek teklif geçmişi verisi
  const offerHistoryData = [
    { id: 1, offerName: "İlk Teklif", date: "2023-01-01" },
    { id: 2, offerName: "İkinci Teklif", date: "2023-02-15" },
    { id: 3, offerName: "Üçüncü Teklif", date: "2023-03-22" },
    // Daha fazla örnek teklif geçmişi verisi...
  ];

  return (
    <UserLayout>
      <div className="offer-history-container">
        <h1>Offer History</h1>
        <div className="offer-cards">
          {offerHistoryData.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <h2>{offer.offerName}</h2>
              <p>Date: {offer.date}</p>
              {/* Diğer teklif detayları */}
            </div>
          ))}
        </div>
      </div>
    </UserLayout>
  );
};

export default OfferHistoryPage;


