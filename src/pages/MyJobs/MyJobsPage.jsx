import React, { useState } from "react";
import UserLayout from "../../components/Layout/UserLayout";

const MyJobsPage = () => {
 
  const InstanceOfJob = (title, description, budget) => {
  
    return (
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-end">
            <span className="badge bg-success">
              Budget
              <br /> {budget}
            </span>
          </div>
        </div>
        <div className="card-footer">
          <a href="jobdetails" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    );
  };

  const listJobs = (jobCount) => {
    let list = [];
    for (let i = 0; i < jobCount; i++) {
      list.push(
        <div className="col-6" key={i}>
          {InstanceOfJob(
            `Job ${i + 1}`,
            `Description for Job ${i + 1}`,
            `500 TL`
          )}
        </div>
      );
    }
    return list;
  };

  const activeJobs = listJobs(5);
  const pendingJobs = listJobs(3);
  const completedJobs = listJobs(7);
  const sections = [
    { title: "Active Jobs 🚀", jobs: activeJobs },
    { title: "In Progress ⌛️", jobs: pendingJobs },
    { title: "Completed ✅", jobs: completedJobs },
  ];

  const JobTabs = ({ sections }) => {

    const [activeTab, setActiveTab] = useState(0); // Aktif sekmenin indeksi
 const changeTab = (index) => {
    setActiveTab(index)
  }
    return (
      <div>
        <div className="row my-4 justify-content-center">
          {sections.map((section, index) => (
            <button
              key={index}
              className={` col-3 btn btn-outline-success mx-2 ${
                activeTab === index ? "active" : ""
              }`}
              onClick={() => changeTab(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
        {sections.map((section, index) => (
          <div
            key={index}
            className="w3-container w3-display-container city"
            style={{ display: activeTab === index ? "block" : "none" }}
          >
            <div className="row">{section.jobs}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <UserLayout>
      <h1>My Jobs</h1>
      <JobTabs sections={sections} />
    </UserLayout>
  );
};

export default MyJobsPage;
