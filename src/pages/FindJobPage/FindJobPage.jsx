import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import "./FindJobPage.css";

function FindJobPage() {
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
            <span class="badge bg-success">Budget<br/> 500 TL</span>
          </div>
        </div>
        <div class="card-footer">
          <a href="#" class="btn btn-primary">
            Make Offer
          </a>
        </div>
      </div>
    );
  }

   const listJobs = () => {
    let list = [];
    for (let i = 0; i < 5; i++)
      list.push(<li key={i}>{instanceOfJob()}</li>);
    return list;
  };
  return (
    <>
      <Layout>
        <h1>FIND JOB</h1>

     {listJobs()}

      </Layout>
    </>
  );
}

export default FindJobPage;
