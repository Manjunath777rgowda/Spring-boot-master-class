import { configure } from "@testing-library/react";
import React, { useState } from "react";

const Home = () => {
  const [serverUrl, setServerUrl] = useState("");

  const save = (e) => {
    e.preventDefault();
    console.log(serverUrl);
    localStorage.setItem("serverUrl", serverUrl);
    document.getElementById("server-url-p").innerHTML =
      "Server Url is : " + localStorage.getItem("serverUrl");
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
        <p id="server-url-p">
          Server Url is : {localStorage.getItem("serverUrl")}
        </p>
      </div>
    </div>
  );
};

export default Home;
