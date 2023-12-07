
import Layout from "../../components/Layout/Layout";
import "./FindFreelancersPage.css";

function FindFreelancersPage() {
    const freelancerCard = () => {
      return (
        <div className="col-3 mt-2">
          {" "}
          <div class="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Example_image.svg/600px-Example_image.svg.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
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
  return (
    <>
      <Layout>
        <h1>FIND FREELANCERS</h1>{" "}
        <div className="col-12">
          {" "}
          <div className="row">{listFreelancers()}</div>
        </div>
      </Layout>
    </>
  );
}

export default FindFreelancersPage;
