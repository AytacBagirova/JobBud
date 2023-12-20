// ProfilePage.js

import React from 'react';
import './ProfilePage.css';
import Layout from '../../components/Layout/Layout';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <Layout>
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-description">
              <h3>Username</h3>
              <p>Freelancer with 10 years of experience in mobile development</p>
            </div>
            <div className="profile-wallet">
              <h3>Wallet</h3>
              <p>Balance: $100</p>
              <button className="btn btn-primary">
              <Link to={"/payments"}>Details</Link>
              </button>
            </div>
          </div>
          <div className="profile-active-jobs">
            <h3>Completed Works</h3>
            <div className="profile-active-job">
              <div>
                <h4>Job Title 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis velit nulla error tenetur minus suscipit aliquid, repellendus earum et qui voluptas aspernatur delectus dolore necessitatibus, perspiciatis exercitationem. Corporis, optio?
                Vel commodi harum autem labore voluptatibus quidem perferendis? Dolores illo nisi commodi quos, obcaecati harum molestiae minima consequuntur sequi sint delectus eligendi exercitationem. Sequi quae ratione placeat accusamus eaque eligendi?</p>
              </div>
            </div>
            <div className="profile-active-job">
              <div>
                <h4>Job Title 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique corporis velit nulla error tenetur minus suscipit aliquid, repellendus earum et qui voluptas aspernatur delectus dolore necessitatibus, perspiciatis exercitationem. Corporis, optio?
                Vel commodi harum autem labore voluptatibus quidem perferendis? Dolores illo nisi commodi quos, obcaecati harum molestiae minima consequuntur sequi sint delectus eligendi exercitationem. Sequi quae ratione placeat accusamus eaque eligendi?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfilePage;
