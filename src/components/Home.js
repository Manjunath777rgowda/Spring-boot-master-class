import React, { useState } from "react";
import { getRequest } from "./commons/Axios";
import { getServerUrl, saveServerUrl } from "./commons/commons";
import { serverUrlName } from "./commons/GeneralConstants";

const Home = () => {
  const [serverUrl, setServerUrl] = useState("");

  const serverStatus = async () => {
    var response = await getRequest("/");

    var element = document.getElementById("server-status");
    if (response) {
      element.innerHTML = "Server is " + response;
    } else {
      element.innerHTML = "Server is Down";
    }
    element.style.background = "tomato";
  };

  setInterval(serverStatus, 5000);

  const save = async (e) => {
    e.preventDefault();

    //check the health 1st
    await healthCheck(serverUrl);

    //Store the server url in local storage
    saveServerUrl(serverUrl);
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
      <h2>Configure Base URL</h2>

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
        {localStorage.getItem(serverUrlName) ? (
          <div>
            <p id="server-url-p">
              Server Url is : {getServerUrl(serverUrlName)}
            </p>
            <p id="server-status"></p>
          </div>
        ) : (
          <p id="server-url-p" className="alert">
            Server Url is not configured
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
