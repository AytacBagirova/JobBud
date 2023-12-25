import { createAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { postWithoutAuth } from "../../api/apiCalls";
import { login } from "../../redux/actions/UserAction";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const history = useNavigate();
  const dispatch = useDispatch();
const {error,loading,userInfo}=userLogin
  useEffect(() => {
    if (userInfo) {
      history("/profile");
    }
  }, [history, userInfo]);

  const handleSignIn = () => {
    dispatch(login(username, password));
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
                  <div class="alert alert-danger my-2" role="alert">
                    {error}
                  </div>
                )}
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <center>
                  {" "}
                  <div
                    className="btn btn-success col-12 mt-3"
                    onClick={handleSignIn}
                  >
                    Sign in
                  </div>
                </center>

                <center>
                  <label className="mt-3">
                    Dont you have an account yet?{" "}
                    <a href="/register" className="fw-bold text-primary">
                      Click here
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
