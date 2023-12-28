import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeOffer } from '../../redux/actions/OfferAction';

const JobCard = ({ jobData }) => {
  const userState = useSelector((state) => state.userLogin);
    const {userInfo}=userState
  const offerCreateState = useSelector((state) => state.offerCreate);
const {error,loading,offerDetail}=offerCreateState
 const [offerPrice,setOfferPrice]=useState(0)
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const handleMakeOffer = () => {
        if (jobData.budget >= offerPrice) {
                    alert("Your offer price must be higher than budget")
}        else {
            dispatch(makeOffer({price:offerPrice,description,jobId:jobData.id,ownerId:userInfo.id}))
        }

    }        
  return (
    <div>  {error ? <div className="alert alert-danger" role="alert">{error}</div>
      : loading ? <div className="alert alert-primary" role="alert">Loading...</div>
        : offerDetail && <div className="alert alert-success" role="alert">Offer Created!</div>}
      <br/>
        <div className="card w-100 mb-3">
    <div className="card-body d-flex justify-content-between">
      <div>
        <h5 className="card-title">{jobData.label}</h5>
        <p className="card-text">{jobData.description}</p>
      </div>
      <div className="text-end">
        <span className="badge bg-success">
          Budget
          <br /> {jobData.budget} TL
        </span>
      </div>
    </div>
    <div className="card-footer">
      <div className="row">
        <div className="col-6">
          <a className="btn btn-primary" 
         data-bs-toggle="modal" data-bs-target={`#exampleModalLabel${jobData.id}`}
          >
            Make Offer
          </a>
        </div>
        <div className="col-6">
          Owner Username: {jobData.jobOwnerUsername}
        </div>
      </div> <div className="modal fade" id={`exampleModalLabel${jobData.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${jobData.id}`} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Make Offer</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Your offer for price:</label>
            <input type="number" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="message-text" className="col-form-label">Description:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleMakeOffer}>Send Offer</button>
      </div>
    </div>
  </div>
</div>
  </div>
  </div></div> 
    );
};

export default JobCard;