
import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/Layout/UserLayout';

const ProfilePage = () => {
  return (
    <UserLayout>
      <div>
        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-description">
              <h3>Username</h3>
              <p>
                Freelancer with 10 years of experience in mobile development
              </p>
            </div>
            <label>Name Surname</label>
            <input type="text" className="form-control" />
            <label>Username</label>
            <input type="text" className="form-control" />
            <label>E-mail</label>
            <input type="text" className="form-control" />
           
            <div className='btn btn-success'>Update</div>

           
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default ProfilePage;
