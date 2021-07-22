import React, { useState, useEffect } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";
import IndividualData from "./individualData";

const Typeheads = () => {
  const [gitUsers, setGitUsers] = useState([]);
  const [gitUserID, setgitUserID] = useState(0);

  useEffect(() => {
    gitUserAPI.getAllUsers().then((res) => {
      if (res) {
        setGitUsers(res);
        setgitUserID(res[0].id);
      }
    });
  }, [gitUserID]);

  return (
    <div className="flex-container">
      {gitUsers.map((user) => (
        <div key={user.id} className="flex-item">
            <IndividualData url={user.url} userData={user}></IndividualData>
        </div>
      ))}
    </div>
  );
};

export default Typeheads;
