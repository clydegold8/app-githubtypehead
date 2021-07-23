import React, { useState, useEffect, Suspense } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";
import IndividualData from "./individualData";
const LazyindividualData = React.lazy(() => import('./individualData'));

const Typeheads = () => {
  const [gitUsers, setGitUsers] = useState([]);
  const [gitUserID, setgitUserID] = useState(0);
  const [dataLoading, setdataLoading] = useState(true);
  const [isError, setisError] = useState(false);
  
  useEffect(() => {
    gitUserAPI.getAllUsers().then((res) => {
      if (res) {
        setGitUsers(res);
        setgitUserID(res[0].id);
        setdataLoading(false);
        setisError(false);
      }else{
        setdataLoading(false);
        setisError(true);
      }
    });
  }, [gitUserID, setdataLoading, setisError]);

  return (
    <div className="flex-container">
      {((gitUsers.length>0) && !dataLoading && !isError)?gitUsers.map((user) => (
        <div key={user.id} className="flex-item">
            <Suspense fallback={<h1>Loading Individual Data Please Wait...</h1>}>
              <LazyindividualData url={user.url} userData={user}></LazyindividualData>
            </Suspense>
        </div>
      )):
      ((gitUsers.length === 0) && dataLoading && isError)?
      <div className="flex-item">
        <h1>No User Data</h1>
      </div> :
      <div className="flex-item pulse-loading">
        <h2>Loading Data Please Wait...</h2>
      </div>
    }
    </div>
  );
};

export default Typeheads;
