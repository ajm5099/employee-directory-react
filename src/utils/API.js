import axios from "axios";
// be sure to change results back to 200
const BASEURL = "https://randomuser.me/api/?results=25&nat=us";
const APIKEY = "";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};