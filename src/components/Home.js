/** @format */

import React from "react";
import { Schedule } from "./Test/Schedule";
import Table from "./Test/Table";



const Home = () => {
 

  const en = {
    home: "Home",
    service: "Service",
    users: "Users",
    form: "Form"
  }


  const az ={
    home: "Ev",
    service: "Service",
    users: "Istifadeciler",
    form: "Form"
  }







  

  return (
    <div className="">
      <div className="mt-5">

      <div className="row mt-2">
          <div className="col-6">
              <Schedule test={"FAiq"}/>
          </div>
          <div className="col-6">
            <Table/>
          </div>
      </div>


      </div>
      
      
    </div>
    
  );
};

export default Home;
