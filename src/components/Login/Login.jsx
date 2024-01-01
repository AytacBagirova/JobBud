import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../../redux/actions/UserAction';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const userLogin = useSelector((state) => state.userLogin);
  const history = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history('/profile');
    }
  }, [history, userInfo]);

  const handleSignIn = () => {
    const validationErrors = {};
    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    if (Object.keys(validationErrors).length === 0) {
      dispatch(login(username, password));
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Sign in</h2>
              <div className="p-3">
                {error && (
                  <div className="alert alert-danger my-2" role="alert">
                    {error}
                  </div>
                )}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setErrors({ ...errors, username: '' });
                    }}
                  />
                  {errors.username && (
                    <div className="invalid-feedback">{errors.username}</div>
                  )}
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setErrors({ ...errors, password: '' });
                    }}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <center>
                  &nbsp;
                  <div className="btn btn-success col-12 mt-3" onClick={handleSignIn}>
                    Sign in
                  </div>
                </center>
                <center>
                  <label className="mt-3">
                    Don&apos;t have an account yet?&nbsp;
                    <a href="/register" className="fw-bold text-primary">
                      Click here&nbsp;
                    </a>
                    to sign up
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

export default Login;
