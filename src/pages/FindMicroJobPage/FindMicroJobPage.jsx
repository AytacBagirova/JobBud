import React from "react";
import UserLayout from "../../components/Layout/UserLayout";

function FindMicroJobPage() {
  const instanceOfJob = () => {
    return (
      <div className="card w-100 mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">
              Subscribe to my YouTube Channel
            </h5>
            <p className="card-text">
              Click the button below to subscribe and stay updated with my content.
            </p>
          </div>
          <div className="text-end">
            {/* Assume your YouTube channel name is "MyChannel" */}
            <span className="badge bg-success">2$</span>
          </div>
        </div>
        <div className="card-footer">
          <a
            href="https://www.youtube.com/mychannel"  // Replace with your actual channel URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Subscribe
          </a>
        </div>
      </div>
    );
  };

  const listJobs = () => {
    let list = [];
    for (let i = 0; i < 5; i++)
      list.push(<li key={i}>{instanceOfJob()}</li>);
    return list;
  };

  return (
    <>
      <UserLayout>
        <h1>FIND MICRO JOB</h1>
        {listJobs()}
      </UserLayout>
    </>
  );
}

export default FindMicroJobPage;
