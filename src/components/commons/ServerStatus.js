import React from "react";
import { getRequest } from "./Axios";
import { getServerUrl } from "./commons";
import { serverUrlName } from "./GeneralConstants";

const ServerStatus = () => {

   const serverStatus = async () => {
    var element = document.getElementById("server-url-p");
    var savedServerUrl = getServerUrl(serverUrlName);

     if (element) {
      if (savedServerUrl) {
        element.innerHTML = "Server Url is : " + savedServerUrl;
        element.style.background = "#6a357b";
      } else {
        element.innerHTML = "Server Url is not configured";
        element.style.background = "tomato";
      }
    }

    var response = await getRequest("/");

    element = document.getElementById("server-status");
    if (element) {
      if (response) {
        element.innerHTML = "Server is UP";
        element.style.background = "#17690c";
      } else {
        element.innerHTML = "Server is Down";
        element.style.background = "tomato";
      }
    }
   };

  setInterval(serverStatus, 5000);
   
    return (
       <div id="server-status" className="server-status"></div>
    )
 };

export default ServerStatus;
