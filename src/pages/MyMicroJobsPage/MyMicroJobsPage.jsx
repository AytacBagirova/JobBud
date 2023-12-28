// src/App.js
import React from 'react';
import UserLayout from '../../components/Layout/UserLayout';
import { Card, Button } from 'react-bootstrap';

function App() {
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
        <Card key={index} style={{ marginBottom: '20px' }}>
          <Card.Body>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </div>
              <div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'green'}}>
                <Card.Title>{card.budget}</Card.Title>
                </div>
                <Button variant="danger" style={{ padding: '8px 16px', borderRadius: '4px' }}>
                  Delete
                </Button>

              </div>
            </div>
          </Card.Body>
          <Card.Footer>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <small className="text-muted">{card.quota}</small>
                <small className="text-muted">{card.remaining}</small>
              </div>
              <div>
                {/* Add the total earnings here */}
                <small className="text-muted">Total Earnings: {card.totalEarned}</small>
              </div>
            </div>
          </Card.Footer>
        </Card>
      ))}
    </UserLayout>
  );
}

export default App;
