import React, { useState, useEffect } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";
import IndividualData from "./individualData";

const Typeheads = () => {
  const [gitUsers, setGitUsers] = useState([]);
  const [gitUserID, setgitUserID] = useState(0);
  const [dataLoading, setdataLoading] = useState(true);
  
  useEffect(() => {
    gitUserAPI.getAllUsers().then((res) => {
      if (res) {
        setGitUsers(res);
        setgitUserID(res[0].id);
        setdataLoading(false);
      }else{
        setdataLoading(false);
      }
    });
  }, [gitUserID, setdataLoading]);

  return (
    <div className="flex-container">
      {dataLoading?
        <div className="flex-item">
          <h1> Fetching Data please wait ...</h1>
        </div>
        :gitUsers.length > 0 ? gitUsers.map((user) => (
        <div key={user.id} className="flex-item">
            <IndividualData url={user.url} userData={user}></IndividualData>
        </div>
      )):
        <div className="flex-item">
          <h1> No Users to show..</h1>
        </div>
    }
    </div>
  );
};

export default Typeheads;
