import React, { useState } from "react";
import { getWithoutAuth, postWithoutAuth } from "../../api/apiCalls";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";

const CreateNewMicroTransaction = () => {
  // create new job form
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobBudget, setJobBudget] = useState(0);
  const [microJobQuota, setMicroJobQuota] = useState(0);
  const [channelId, setChannelId] = useState("");

  const handleFormSent = () => {
    console.log("Job Title: ", jobTitle);
    console.log("Job Description: ", jobDescription);
    console.log("Budget: ", jobBudget);
  };

  const handleGetYourChannelId =async () => {
    const response = await getWithoutAuth(
      "/api/v1.0/microtransactions/oauth2/youtube/clientUrl"
    );
    window.open(response.data, "_blank", "noreferrer");
    console.log("🚀 ~ file: CreateNewMicroTransactionPage.jsx:22 ~ handleGetYourChannelId ~ response:", )
    
  }
  return (
    <UserLayout>
      <div className="px-4">
        <h1>Create New Micro Transaction Page</h1>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description</label>
          <input
            type="text"
            id="jobDescription"
            name="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobBudget">Job Budget</label>
          <input
            type="text"
            id="jobBudget"
            name="jobBudget"
            value={jobBudget}
            onChange={(e) => setJobBudget(e.target.value)}
            className="form-control"
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="jobBudget">Job Quota</label>
          <input
            type="text"
            value={microJobQuota}
            onChange={(e) => setMicroJobQuota(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="row">
          <div className="col-9">
            {" "}
            <div className="form-group">
              <label htmlFor="jobBudget">Channel Id</label>
              <input
                type="text"
                value={channelId}
                onChange={(e) => setChannelId(e.target.value)}
                className="form-control"
              />
            </div>{" "}
          </div>
          <div className="col-3">
            <div className="btn btn-primary " style={{marginTop:28}} onClick={handleGetYourChannelId}>
              Get Your Channel Id Easily
            </div>
          </div>
        </div>
        <div className="btn btn-success" onClick={handleFormSent}>
          Create New Job
        </div>
      </div>
    </UserLayout>
  );
};

export default CreateNewMicroTransaction;
