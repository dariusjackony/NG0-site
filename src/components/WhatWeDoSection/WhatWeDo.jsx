import ServiceList from "./list/ServiceList";
import ServiceDetails from "./details/ServiceDetails";
import "./WhatWeDo.css";
export default function WhatWeDo(){
    return(
        <div className="what-we-do-container">
            <ServiceList />
            <ServiceDetails />
        </div>
    )
}