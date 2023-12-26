import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWithoutAuth, postWithoutAuth } from "../../api/apiCalls";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";
import { createMicroTransaction } from "../../redux/actions/MicroTransactionAction";

const CreateNewMicroTransaction = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobBudget, setJobBudget] = useState(0);
  const [microJobQuota, setMicroJobQuota] = useState(0);
  const { channel } = useSelector((state) => state.ytApiCode);
  const [channelId, setChannelId] = useState("");
  const channelFromLocalStorage = localStorage.getItem("channelId");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);
  const { microtransaction, error, loading } = useSelector(
    (state) => state.microTransactionCreate
  );

  const handleFormSent = () => {
    const data = {
      label: jobTitle,
      description: jobDescription,
      quota: microJobQuota,
      budget: jobBudget,
      channelId: channelId,
      ownerId: userInfo.id,
    };

    dispatch(createMicroTransaction(data));
  };

  const handleGetYourChannelId = async () => {
    const response = await getWithoutAuth(
      "/api/v1.0/microtransactions/oauth2/youtube/clientUrl"
    );
    window.open(response.data);
  };

  useEffect(() => {
    function checkChannelId() {
      const item = localStorage.getItem("channelId");

      if (item) {
        setChannelId(item);
      }
    }

    window.addEventListener("storage", checkChannelId);

    return () => {
      window.removeEventListener("storage", checkChannelId);
    };
  }, []);
  useEffect(() => {
    setChannelId(channel);
  }, [channel]);

  return (
    <UserLayout>
      <div className="px-4">
        <h1>Create New Micro Transaction</h1>
        {microtransaction ? (
          <div className="alert alert-success my-2" role="alert">
            Successfully created!
          </div>
        ) : error ? (
          <div className="alert alert-danger my-2" role="alert">
            {error}
          </div>
        ) : (
          loading && (
            <div className="alert alert-primary my-2" role="alert">
              Your request is sent. Please wait.
            </div>
          )
        )}
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
            <div
              className="btn btn-primary "
              style={{ marginTop: 28 }}
              onClick={handleGetYourChannelId}
            >
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
