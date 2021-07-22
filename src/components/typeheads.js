import React, { useState, useEffect } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";

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
          <div>{user.login}</div>
          <div>
            <img src={user.avatar_url} alt="avatar"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Typeheads;
