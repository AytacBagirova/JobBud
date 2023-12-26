import React, { useState } from 'react';

const MicroJobCard = (props) => {
 const { jobData } = props

    const handleSubscribeButton = () => {

    window.open(`https://www.youtube.com/channel/${jobData.channelId}`,'_blank', 'noreferrer')
   }
    const handleProofButton = () => {
         window.open(`https://www.youtube.com/channel/${jobData.channelId}`,'_blank', 'noreferrer')
    }
    return (
  <div className="card w-100 mb-3">
    <div className="card-body d-flex justify-content-between">
      <div>
        <h5 className="card-title">   { jobData.label}</h5>
        <p className="card-text">
                        { jobData.description}
        </p>
      </div>
      <div className="text-end">
        {/* Assume your YouTube channel name is "MyChannel" */}
        <span className="badge bg-success">   { (jobData.budget/jobData.quota) } TL / per sub.</span>
      </div>
    </div>
    <div className="card-footer">
                <div className='btn btn-outline-teal mx-2' onClick={handleSubscribeButton}>Subscribe</div>
                <div className='btn btn-outline-teal mx-2' onClick={handleProofButton}>Proof Your Subscription</div>
  
    </div>
  </div>
    );
};

export default MicroJobCard;