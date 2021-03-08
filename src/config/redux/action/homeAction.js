import Axios from 'axios'
export const setDataUser = () => (dispatch) => {
  Axios.get("http://localhost:4000/user")
    .then((result) => {
      console.log("data API", result.data.data);
      const responseAPI = result.data;

      dispatch({ type: "UPDATE_DATA_USER", payload: responseAPI.data });
    })
    .catch((err) => {
      console.log("error", err);
    });
};
     
