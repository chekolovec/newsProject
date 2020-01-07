import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.data;
    case FETCH_DATA_ERROR:
      return state;
    default:
      return state;
  }
};
