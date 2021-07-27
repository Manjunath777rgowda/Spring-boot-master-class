import axios from "axios";
import { getServerUrl } from "./commons";
import { serverUrlName } from "./GeneralConstants";

export async function getRequest(url) {
  url = getServerUrl(serverUrlName) + url;

 var result = await axios
    .get(url)
     .catch((e) => console.log(e));
    
    if (result) {
        return result.data;
    }
}
