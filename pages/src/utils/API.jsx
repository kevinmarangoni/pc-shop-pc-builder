 
import axios from "axios";

const url = "http://localhost:3000/api";

class APIRequest {
  request = axios.create({
    baseURL: url,
    timeout: 10000,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

async getAllList(){
    try {
        const response = this.request
          .get(`/routes/all/list`)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            return { error: err };
          });
        return response;
      } catch (err) {
        console.log(err);
        return;
      }
    }
}

export default new APIRequest;