import {
  OFFER_LIST_REQUEST,
  OFFER_LIST_SUCCESS,
  OFFER_LIST_FAIL,
  OFFER_CREATE_REQUEST,
  OFFER_CREATE_SUCCESS,
  OFFER_CREATE_FAIL,
  OFFER_SPECIFIC_LIST_REQUEST,
  OFFER_SPECIFIC_LIST_SUCCESS,
  OFFER_SPECIFIC_LIST_FAIL,
  OFFER_CHANGE_STATUS_FAIL,
  OFFER_CHANGE_STATUS_SUCCESS,
} from '../../constants/OfferConstants';

export const offerListReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_LIST_REQUEST:
      return { loading: true };

    case OFFER_LIST_SUCCESS:
      return { loading: false, offers: action.payload };

    case OFFER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const offerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_CREATE_REQUEST:
      return { loading: true };

    case OFFER_CREATE_SUCCESS:
      return { loading: false, offerDetail: action.payload };

    case OFFER_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const offerSpesificListReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_SPECIFIC_LIST_REQUEST:
      return { loading: true };

    case OFFER_SPECIFIC_LIST_SUCCESS:
      return { loading: false, offers: action.payload };

    case OFFER_SPECIFIC_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const offerChangeStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case OFFER_CHANGE_STATUS_FAIL:
      return { loading: true };

    case OFFER_CHANGE_STATUS_SUCCESS:
      return { loading: false, offer: action.payload };

    case OFFER_CHANGE_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};