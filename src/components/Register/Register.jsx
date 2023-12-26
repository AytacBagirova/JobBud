import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../redux/actions/UserAction";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("FREELANCER");
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;
  const history = useNavigate();
  useEffect(() => {
    if (userInfo) {
      history("/profile");
    }
  }, [history, userInfo]);

  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(register(username, email, password, userType));
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Join as a Freelancer or Employer</h2>
              {error && (
                <div class="alert alert-danger my-2" role="alert">
                  {error}
                </div>
              )}
              <div className="p-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <label>Choose your account type</label>
                <div className="category-container">
                  <div class="row">
                    <div class="col-md-6 col-lg-6 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="userType"
                          class="card-input-element"
                          value={"CUSTOMER"}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === "CUSTOMER"}
                        />

                        <div class="card card-default userType-card">
                          <div class="card-header">Customer</div>
                          <div class="card-body">
                            {" "}
                            publish your work offer and reach to freelancers
                            easily
                          </div>
                        </div>
                      </label>
                    </div>
                    <div class="col-md-6 col-lg-6 col-sm-6">
                      <label>
                        <input
                          type="radio"
                          name="userType"
                          class="card-input-element"
                          value={"FREELANCER"}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === "FREELANCER"}
                        />

                        <div class="card card-default userType-card">
                          <div class="card-header">Freelancer</div>
                          <div class="card-body">
                            complete active works and earn cryptocurrency{" "}
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <center>
                  {" "}
                  <div
                    className="btn btn-success col-12 mt-3"
                    onClick={handleRegister}
                  >
                    Join us
                  </div>
                </center>

                <center>
                  <label className="mt-3">
                    Do you have an account already?{" "}
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
