import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import UserLayout from "../../components/Layout/UserLayout";

function MyJobsPage() {
    
  const instanceOfJob = (title, description, budget) => {
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

  const listJobs = (sectionTitle, jobCount) => {
    let list = [];
    for (let i = 0; i < jobCount; i++) {
      list.push(
        <li key={i}>{instanceOfJob(`Job ${i + 1}`, `Description for Job ${i + 1}`, `500 TL`)}</li>
      );
    }
    return (
      <div>
        <h2>{sectionTitle}</h2>
        <ul>{list}</ul>
      </div>
    );
  };

  return (
    <>
      <UserLayout>
        <h1>My Jobs</h1>
        {listJobs("Active Jobs", 5)}
        {listJobs("Pending Approval", 3)}
        {listJobs("Completed", 7)}
      </UserLayout>
    </>
  );
}

export default MyJobsPage;
