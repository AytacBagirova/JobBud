import "./Login.css";

function Login() {
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <div className="col-7">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">Sign in</h2>
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
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
               
                <center>
                  {" "}
                  <div className="btn btn-success col-12 mt-3">Sign in</div>
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
