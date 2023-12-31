import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../../redux/actions/UserAction';
import './Register.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('FREELANCER');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;
  const history = useNavigate();

  useEffect(() => {
    if (userInfo) {
      history('/profile');
    }
  }, [history, userInfo]);

  const dispatch = useDispatch();

  const handleRegister = () => {
    setUsernameError('');
    setEmailError('');
    setPasswordError('');

    // Validate username
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError('Valid email is required');
      return;
    }

    // Validate password
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    // Dispatch registration if all validations pass
    dispatch(register({ username, email, password, userType }));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Join as a Freelancer or Employer</h2>
              {error && (
                <div className="alert alert-danger my-2" role="alert">
                  {error}
                </div>
              )}
              <div className="p-3">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className={`form-control ${usernameError && 'is-invalid'}`}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  {usernameError && <div className="invalid-feedback">{usernameError}</div>}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className={`form-control ${emailError && 'is-invalid'}`}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <div className="invalid-feedback">{emailError}</div>}
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className={`form-control ${passwordError && 'is-invalid'}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <label>Choose your account type</label>
                <div className="category-container">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="userType"
                          className="card-input-element"
                          value={'CUSTOMER'}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === 'CUSTOMER'}
                        />
                        <div className="card card-default userType-card">
                          <div className="card-header">Customer</div>
                          <div className="card-body">
                            publish your work offer and reach to freelancers easily
                          </div>
                        </div>
                      </label>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="userType"
                          className="card-input-element"
                          value={'FREELANCER'}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === 'FREELANCER'}
                        />

                        <div className="card card-default userType-card">
                          <div className="card-header">Freelancer</div>
                          <div className="card-body">
                            complete active works and earn cryptocurrency{' '}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <center>
                  <button className="btn btn-success col-12 mt-3" onClick={handleRegister}>
                    Join us
                  </button>
                </center>
                <center>
                  <label className="mt-3">
                    Do you have an account already?&nbsp;
                    <a href="/login" className="fw-bold text-primary">
                      Click here
                    </a>
                    to sign in
                  </label>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
