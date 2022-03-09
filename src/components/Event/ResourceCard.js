import React from 'react'
import { baseURL } from '../../axios';
import link from "../../assets/link.svg";
import download from "../../assets/download.svg";

const ResourceCard = (props) => {
    const resource = props.resource;
    const type = props.type;
    let url = "";
    if(type==="resource"){
        url = baseURL + resource.url;
    } else {
        url = resource.link;
    }
  return (
    <div
        className="rounded-2xl flex flex-row py-3 px-3 justify-between mt-5 w-full "
        style={{ backgroundColor: "#F2F2F9" }}
        >
        <div className="flex flex-row justify-start">
            <div className="flex flex-col self-center">
            <div className="text-lg sm:text-xl font-medium">{resource.filename}</div>
            <div className="mr-2">{resource.subtitle?resource.subtitle:"This is Subtitle"}</div>
            </div>
        </div>
        <a
            className="text-white px-4 h-10 text-base rounded-full text-center pt-1.5 font-normal self-center cursor-pointer hover:scale-105 duration-300 flex flex-row gap-1"
            style={{ backgroundColor: "#3C55BF" }}
            href={url}
            // target="_blank"
            download>
            <img src={type==="resource"?download:link} className="w-5 relative -top-1" />
            {type==="resource"?"Download":"Open Link"}
        </a>
    </div>
  )
}

export default ResourceCard