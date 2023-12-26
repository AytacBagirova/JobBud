import React, { useState } from 'react';
import UserLayout from "../../components/Layout/UserLayout";

const MyJobsPage = () => {
  const InstanceOfJob = (title, description, budget) => {
    return (
      <div className="card w-100 mb-3">
        <div className="card-body d-flex justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <div className="text-end">
            <span className="badge bg-success">Budget<br /> {budget}</span>
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

  const JobTabs = ({ sections }) => {
    const [activeTab, setActiveTab] = useState(0); // Aktif sekmenin indeksi

    const changeTab = (index) => {
      setActiveTab(index);
    };

    return (
      <div>
        <div className="w3-bar w3-black">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`w3-bar-item w3-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => changeTab(index)}
            >
              {section.title}
            </button>
          ))}
        </div>

        {sections.map((section, index) => (
          <div
            key={index}
            id={section.title.replace(/\s+/g, '-').toLowerCase()} // ID'leri oluştururken boşlukları kaldırıp küçük harfe çeviriyoruz
            className="w3-container w3-display-container city"
            style={{ display: activeTab === index ? 'block' : 'none' }}
          >
            <h2>{section.title}</h2>
            <ul>{section.jobs}</ul>
          </div>
        ))}
      </div>
    );
  };

  const listJobs = (jobCount) => {
    let list = [];
    for (let i = 0; i < jobCount; i++) {
      list.push(
        <li key={i}>{InstanceOfJob(`Job ${i + 1}`, `Description for Job ${i + 1}`, `500 TL`)}</li>
      );
    }
    return list;
  };

  const activeJobs = listJobs(5);
  const pendingJobs = listJobs(3);
  const completedJobs = listJobs(7);

  const sections = [
    { title: 'Active Jobs', jobs: activeJobs },
    { title: 'Pending Approval', jobs: pendingJobs },
    { title: 'Completed', jobs: completedJobs },
  ];

  return (
    <>
      <UserLayout>
        <h1>My Jobs</h1>
        <JobTabs sections={sections} />
      </UserLayout>
    </>
  );
};

export default MyJobsPage;
