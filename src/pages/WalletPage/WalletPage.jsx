import './WalletPage.css';
import UserLayout from '../../components/Layout/UserLayout';

const paymentsData = [
  {
    id: 1,
    jobTitle: 'React Projesi',
    jobDescription: 'web uygulamasi',
    incomingAmount: 500,
    outgoingAmount: 200,
  },
  {
    id: 2,
    jobTitle: 'Node.js Projesi',
    jobDescription: 'backend uygulamasi',
    incomingAmount: 800,
    outgoingAmount: 300,
  },
  {
    id: 3,
    jobTitle: 'React Native Uygulaması',
    jobDescription: 'mobil uygulama',
    incomingAmount: 600,
    outgoingAmount: 150,
  },
];

const PaymentsPage = () => {
  const totalIncoming = paymentsData.reduce((total, payment) => total + payment.incomingAmount, 0);
  const totalOutgoing = paymentsData.reduce((total, payment) => total + payment.outgoingAmount, 0);
  const totalBalance = totalIncoming - totalOutgoing;

  return (
    <UserLayout>
      <h1>Payment History</h1>
      <div className="payments-container">
        {paymentsData.map((payment) => (
          <div key={payment.id} className="payment-card">
            <div className="payment-details">
              <h2>{payment.jobTitle}</h2>
              <p>{payment.jobDescription}</p>
            </div>
            <div className="payment-amounts">
              <p>Gelen Para: {payment.incomingAmount} </p>
              <p>Çıkan Para: {payment.outgoingAmount}</p>
            </div>
            <hr />
          </div>
        ))}
        <div className="total-balance">
          <p>Toplam Cüzdan Miktarı: {totalBalance}</p>
        </div>
      </div>
    </UserLayout>
  );
};

export default PaymentsPage;
