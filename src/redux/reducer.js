import constants from "../constants";

const initialState = {
  contact: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SET_CONTACT:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export default reducer;
