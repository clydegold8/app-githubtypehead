import React, { useState, useEffect } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";

const Typeheads = () => {
  const [gitUsers, setGitUsers] = useState([]);
  const [gitUserID, setgitUserID] = useState(0);

  useEffect(() => {
    gitUserAPI.getAllUsers().then((res) => {
      if (res && res.data && res.status === 200) {
        setGitUsers(res.data);
        setgitUserID(res.data[0].id);
      }
      console.log(res, "bb", gitUsers, gitUserID);
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
