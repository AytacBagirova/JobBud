import { getWithAuth, putWithAuth } from "../../api/apiCalls";
import { OFFER_CHANGE_STATUS_FAIL, OFFER_CHANGE_STATUS_REQUEST, OFFER_CHANGE_STATUS_SUCCESS, OFFER_CREATE_FAIL, OFFER_CREATE_REQUEST, OFFER_CREATE_SUCCESS, OFFER_LIST_FAIL, OFFER_LIST_REQUEST, OFFER_LIST_SUCCESS, OFFER_SPECIFIC_LIST_FAIL, OFFER_SPECIFIC_LIST_REQUEST, OFFER_SPECIFIC_LIST_SUCCESS } from "../../constants/OfferConstants";

export const getOffers= () => async (dispatch,getState) => {
  try {
    dispatch({
      type: OFFER_LIST_REQUEST,
    });
const {userLogin:{userInfo}}=getState();
    const response = await getWithAuth('/api/v1.0/offers',{ownerId:userInfo.id});
    const data = response.data;
    dispatch({
      type: OFFER_LIST_SUCCESS,
      payload: [ ...data],
    });
  } catch (error) {
    dispatch({
      type: OFFER_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const getSpesificOffers = (jobId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OFFER_SPECIFIC_LIST_REQUEST,
    });
 
    const response = await getWithAuth('/api/v1.0/offers', { jobId});
    const data = response.data;
    dispatch({
      type: OFFER_SPECIFIC_LIST_SUCCESS,
      payload: [...data],
    });
  } catch (error) {
    dispatch({
      type: OFFER_SPECIFIC_LIST_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};




export const makeOffer = (body) => async (dispatch) => {
  try {
    dispatch({
      type: OFFER_CREATE_REQUEST,
    });

    const response = await postWithAuth('/api/v1.0/offers', {
      ...body,
    });
    const data = response.data;
    dispatch({
      type: OFFER_CREATE_SUCCESS,
      payload: {
        ...data,
      },
    });
  } catch (error) {
    dispatch({
      type: OFFER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }

}
export const offerChangeStatus = (offerId,newStatus) => async (dispatch) => {
  try {
    dispatch({
      type: OFFER_CHANGE_STATUS_REQUEST,
    });

    const response = await putWithAuth(`/api/v1.0/offers/${offerId}/status`, {
      status:newStatus
    });
    const data = response.data;
    console.log("🚀 ~ file: OfferAction.js:84 ~ offerChangeStatus ~ data:", data)
    dispatch({
      type: OFFER_CHANGE_STATUS_SUCCESS,
      payload: {
        ...data,
      },
    });
  } catch (error) {
    dispatch({
      type: OFFER_CHANGE_STATUS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }

}