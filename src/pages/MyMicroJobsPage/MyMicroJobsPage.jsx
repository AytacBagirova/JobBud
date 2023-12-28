// src/App.js
import React from 'react';
import UserLayout from '../../components/Layout/UserLayout';

function MyMicroJobsPage() {
  const cardsData = [];

  for (let i = 1; i < 6; i++) {
    const quota = (Math.random() * 100).toFixed(0);
    cardsData.push({
      title: `Channel ${i}`,
      budget: `20$`,
      text: `This is the content of channel ${i}.`,
      quota: ` Quota = ${quota} `,
      remaining: `/ Remaining = ${quota - 10}`,
      totalEarned: (Math.random() * 100).toFixed(0),
    });
  }

  return (
    <UserLayout>
      {cardsData.map((card, index) => (
        <div key={index} className="card mb-3" style={{ marginBottom: '20px' }}>
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.text}</p>
              </div>
              <div>
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ color: 'green' }}
                >
                  <h5 className="card-title">{card.budget}</h5>
                </div>
                <button
                  className="btn btn-danger"
                  style={{ padding: '8px 16px', borderRadius: '4px' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <div>
                <small className="text-muted">{card.quota}</small>
                <small className="text-muted">{card.remaining}</small>
              </div>
              <div>
                <small className="text-muted">Total Earnings: {card.totalEarned}</small>
              </div>
            </div>
          </div>
        </div>
      ))}
    </UserLayout>
  );
}

export default MyMicroJobsPage;
