import { serverUrlName } from "./GeneralConstants";

export function saveServerUrl(url)
{
    localStorage.setItem(serverUrlName, url);
}

export function getServerUrl()
{
    return localStorage.getItem(serverUrlName);
}