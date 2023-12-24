import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./FindFreelancersPage.css";

function FindFreelancersPage() {
  const freelancerCard = () => {
    return (
      <div className="col-3 mt-2">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <p className="card-text">Hourly Rate: $25</p>
            <button className="btn btn-primary">Hire</button>
          </div>
        </div>
      </div>
    );
  };

  const listFreelancers = () => {
    let list = [];
    for (let i = 0; i < 5; i++) list.push(freelancerCard());
    return list;
  };

  const mockJobs = [
    {
      id: 1,
      workerId: 1,
      jobId: 1,
      workContent: "Test work content 1",
      completedDate: 1627776000000,
      status: "pending",
    },
    {
      id: 2,
      workerId: 2,
      jobId: 2,
      workContent: "Test work content 2",
      completedDate: 1627776000000,
      status: "hire",
    },
    {
      id: 3,
      workerId: 2,
      jobId: 2,
      workContent: "Test work content 3",
      completedDate: 1627776000000,
      status: "pending",
    },
  ];

  const [works, setWorks] = useState([]);

  const getAllFreelancers = async () => {
    const res = await fetch("localhost:8080/works");
    const data = await res.json();
    setWorks(data);
  };

  return (
    <>
      <Layout>
        <h1>FIND FREELANCERS</h1>{" "}
        <div className="col-12">
          {" "}
          <div className="row">{mockJobs.map((job) => {
            return (
              <div className="col-3 mt-2">
                <div className="card">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-text">
                      {job.workContent}
                    </p>
                    <p className="card-text">Hourly Rate: $25</p>
                    <button className="btn btn-primary">{job.status}</button>
                  </div>
                </div>
              </div>
            );
          })}</div>
        </div>
      </Layout>
    </>
  );
}

export default FindFreelancersPage;
