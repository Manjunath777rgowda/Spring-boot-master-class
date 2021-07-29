import axios from "axios";
import { getServerUrl } from "./commons";
import { serverUrlName } from "./GeneralConstants";

export async function getRequest(url) {
  url = getServerUrl(serverUrlName) + url;

 var result = await axios
    .get(url)
     .catch((e) => console.log("Get Request Failed"));
    
    if (result) {
        return result.data;
    }
}

export async function postRequest(url,requestBody) {
  url = getServerUrl(serverUrlName) + url;

 var result = await axios
    .post(url,requestBody)
     .catch((e) => console.log("Post request failed"));
    
    if (result) {
        console.log(result.data);
        return result.data;
    }
}

export async function putRequest(url) {
  url = getServerUrl(serverUrlName) + url;

 var result = await axios
    .put(url)
     .catch((e) => console.log("Get Request Failed"));
    
    if (result) {
        return result.data;
    }
}