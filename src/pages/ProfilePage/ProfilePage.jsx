import './ProfilePage.css';
import UserLayout from '../../components/Layout/UserLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateUser } from '../../redux/actions/UserAction';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [newUsername, setNewUsername] = useState(userInfo ? userInfo.username : '');
  const [newEmail, setNewEmail] = useState(userInfo ? userInfo.email : '');

  const handleUpdate = async () => {
    const userData = {
      username: newUsername,
      email: newEmail,
    };
    try {
      dispatch(updateUser(userData));
      setShowSuccessAlert(true);
    } catch (error) {
      setShowErrorAlert(true);
    }
  };

  useEffect(() => {
    if (showSuccessAlert) {
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated Successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      setShowSuccessAlert(false);
    }

    if (showErrorAlert) {
      Swal.fire({
        icon: 'error',
        title: 'Error Updating Profile',
        text: 'Please try again later.',
      });
      setShowErrorAlert(false);
    }
  }, [showSuccessAlert, showErrorAlert]);

  return (
    <UserLayout>
      <div>
        <div className="profile-card">
          <div className="profile-info">
            <h3 className='text-center'>Edit Your Profile</h3>
            <div className="profile-description">
              <h3>{userInfo?.username || 'Guest'}</h3>
              <p>Freelancer with 10 years of experience in mobile development</p>
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
            <div className='btn btn-success mt-3' onClick={handleUpdate}>Update</div>
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default ProfilePage;
