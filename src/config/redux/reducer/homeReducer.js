const initialStateHome = {
  dataUser: [],
};

const homeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_USER") {
    return {
      ...state,
      dataUser: action.payload,
    };
  }
  return state;
};

export default homeReducer