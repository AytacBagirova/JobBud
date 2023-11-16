import "./Register.css";

function Register() {
  return (
    <>
      <div>
        <div className="selection-card">
        <div>
            <div className="join-container">
              <h2>Join as a Freelancer or Employer</h2>

              <div className="category-container">
                <div className="category">
                  <input
                    type="checkbox"
                    id="freelancer"
                    name="category"
                    value="freelancer"
                  />
                  <label htmlFor="freelancer">Freelancer</label>
                </div>

                <div className="category">
                  <input
                    type="checkbox"
                    id="employer"
                    name="category"
                    value="employer"
                  />
                  <label htmlFor="employer">Employer</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
