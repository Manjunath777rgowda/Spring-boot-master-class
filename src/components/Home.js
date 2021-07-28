import React, { useState } from "react";
import { getRequest } from "./commons/Axios";
import { getServerUrl, saveServerUrl } from "./commons/commons";
import { serverUrlName } from "./commons/GeneralConstants";

const Home = () => {
  const [serverUrl, setServerUrl] = useState("");


  const save = async (e) => {
    e.preventDefault();

    //check the health 1st
    await healthCheck(serverUrl);

    //Store the server url in local storage
    saveServerUrl(serverUrl);

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

    setServerUrl("");
  };

  const healthCheck = async () => {
    var response = await getRequest("/");

    //update the server url in the DOM
    var element = document.getElementById("server-url-p");
    element.innerHTML = "Server Url is : " + getServerUrl(serverUrlName);
    element.classList.remove("alert");

    element = document.getElementById("server-status");

    if (response) {
      element.innerHTML = "Server is " + response;
    } else {
      element.innerHTML = "Server is Down";
    }
    element.style.background = "tomato";

    console.log("Inside the healcheck : " + response);
  };

  return (
    <div className="ui main content">
      <h1>Configure Base URL</h1>

      <form onSubmit={save}>
        <div className="field">
          <input
            type="text"
            name="server-url"
            placeholder="Configure the Base URL"
            value={serverUrl}
            onChange={(e) => {
              setServerUrl(e.target.value);
            }}
            required
          ></input>
        </div>

        <button type="submit" className="ui button blue">
          Configure
        </button>
      </form>

      <div className="server-url" id="server-url">
        <p id="server-url-p"></p>
      </div>
    </div>
  );
};

export default Home;
