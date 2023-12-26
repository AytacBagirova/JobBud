import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import "./FindJobPage.css";
import UserLayout from "../../components/Layout/UserLayout";

function FindJobPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const instanceOfJob = () => {
    return (
      <div class="card w-100 mb-3">
        <div class="card-body d-flex justify-content-between">
          <div>
            <h5 class="card-title">
              I need someone to be able to develop website similar of freelancer
              or fiverr.
            </h5>
            <p class="card-text">
              We can deal over price. If you have an offer please let me know
            </p>
          </div>
          <div class="text-end">
            <span class="badge bg-success">
              Budget
              <br /> 500 TL
            </span>
          </div>
        </div>
        <div class="card-footer">
          
          <div className="row">

            <div className="col-6">
              {" "}
              <a href="#" class="btn btn-primary">
                Make Offer
              </a>
            </div>{" "}
            <div className="col-6 ">
              {" "}
             
             Owner Username
              
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listJobs = () => {
    let list = [];
    for (let i = 0; i < 5; i++) list.push(<li key={i}>{instanceOfJob()}</li>);
    return list;
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = () => {
    return listJobs().filter((job) =>
      job.props.children[0].props.children[0].props.children
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
  };
  return (
    <>
      <UserLayout>
        <h1>FIND JOB</h1>
        <div className="d-flex justify-content-center mx-auto">
          <div className="col-12 my-5">
            <div className="row">
              {" "}
              <div className="col-9">
                {" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Job "
                />
              </div>{" "}
              <div className="col-3">
                {" "}
                <div className="btn btn-outline-teal w-auto">Search It 🔎</div>
              </div>
            </div>
          </div>
        </div>
        {listJobs()}
      </UserLayout>
    </>
  );
}

export default FindJobPage;
