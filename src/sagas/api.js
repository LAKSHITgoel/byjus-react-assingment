import axios from "axios";
import { SET_LOADING } from "../store/types";
import { store } from "../store";

export const getData = async () => {
  let res = await axios.get("https://nut-case.s3.amazonaws.com/jobs.json", {
    onDownloadProgress: e => {
      let c = e.loaded;
      let t = e.total;
      let load = Math.round((c / t) * 100);
      store.dispatch({
        type: SET_LOADING,
        payload: load
      });
    }
  });
  console.log(res);
  let dataObj = res.data;
  // console.log("data", dataObj);
  return dataObj;
};
