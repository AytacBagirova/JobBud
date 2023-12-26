
import React from 'react';
import './ProfilePage.css';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/UpdateAction';
import { useState } from 'react';
const ProfilePage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);

  const [newUsername, setNewUsername] = useState(userInfo ? userInfo.username : '');
  const [newEmail, setNewEmail] = useState(userInfo ? userInfo.email : '');

  const handleUpdate = () => {
    const userData = {
      username: newUsername,
      email: newEmail,
    };
    dispatch(updateUser(userData));
  };

  return (
    <UserLayout>
      <div>
        <div className="profile-card">
          <div className="profile-info">
            <div className="profile-description">
            <h3>{userInfo ? userInfo.username : 'Guest'}</h3>
              <p>
                Freelancer with 10 years of experience in mobile development
              </p>
            </div>
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <label>E-mail</label>
            <input
              type="text"
              className="form-control"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <div className='btn btn-success' onClick={handleUpdate}>Update</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
}

export default ProfilePage;
