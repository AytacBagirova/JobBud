import { useState } from "react";
import "./Register.css";

function Register() {
  const [userType, setUserType] = useState("freelancer");
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Join as a Freelancer or Employer</h2>
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
                  />
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
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
                          value={"customer"}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === "customer"}
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
                          value={"freelancer"}
                          onChange={(e) => setUserType(e.target.value)}
                          checked={userType === "freelancer"}
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
                  <div className="btn btn-success col-12 mt-3">Join us</div>
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
