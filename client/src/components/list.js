import ServiceItem from "./serviceItem";
// import { useEffect } from "react";
import React from "react";


function List({ service, getAllServices}) {
  return (
    <>
      <div>
        <ServiceItem service={service} getAllServices={getAllServices} />
      </div>
    </>
  );
}

export default List;