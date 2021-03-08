const initialState = {
  dataUsers: [],
  name: "aji",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_DATA_USER") {
    return {
      ...state,
      dataUsers: action.payload,
    };
  }
  return state;
};

export default globalReducer