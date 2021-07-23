import React, { useState, useEffect, Suspense } from "react";
import { GitUser as gitUserAPI } from "../services/gitusers-api";

const IndividualData = ({ url, userData }) => {
  const [gitUser, setGitUser] = useState({});
  const [gitUserID, setgitUserID] = useState(0);

  useEffect(() => {
    gitUserAPI.getIndividualUser(url).then((res) => {
      if (res) {
        setGitUser(res);
        setgitUserID(res.id);
      }
    });
  }, [gitUserID, url]);

  const parseDate = (dateString) => {
    let date = new Date(dateString);
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let year = date.getFullYear();
    return month + "/" + day + "/" + year;
  };

  return (
    <Suspense>
      {Object.keys(gitUser).length !== 0 ? (
        <a
          href={userData.html_url}
          target="_blank"
          className="innerFlex-container"
          rel="noreferrer"
        >
          <div className="innerFlex-items">
            <img
              className="userAvatar"
              src={userData.avatar_url}
              alt="avatar"
            ></img>
          </div>

          <div className="innerFlex-items">
            {gitUser.name ? (
              <h1 className="trueName">
                {gitUser.name}{" "}
                <small className="loginName">({gitUser.login})</small>
              </h1>
            ) : (
              <h1 className="trueName">
                No Name Set{" "}
                <small className="loginName">({gitUser.login})</small>
              </h1>
            )}

            <span>Location: </span>
            {gitUser.location ? (
              <span className="textBold">{gitUser.location}</span>
            ) : (
              <span>None</span>
            )}
            <br></br>
            <span>Email: </span>
            {gitUser.email ? (
              <span className="textBold">{gitUser.email}</span>
            ) : (
              <span>None</span>
            )}
            <br></br>
            <span>Joined: </span>
            {gitUser.created_at ? (
              <span className="textBold">{parseDate(gitUser.created_at)}</span>
            ) : (
              <span>None</span>
            )}
            <br></br>
          </div>

          <div className="innerFlex-items">
            <br></br>
            <span>Company: </span>
            {gitUser.company ? (
              <span className="textBold">{gitUser.company}</span>
            ) : (
              <span>No company</span>
            )}
            <br></br>
            <span>Followers: </span>
            {gitUser.followers ? (
              <span className="textBold">{gitUser.followers}</span>
            ) : (
              <span>No Followers</span>
            )}
            <br></br>
            <span>Following: </span>
            {gitUser.following ? (
              <span className="textBold">{gitUser.following}</span>
            ) : (
              <span>Not following</span>
            )}
            <br></br>
            <span>Public Repos: </span>
            {gitUser.public_repos ? (
              <span className="textBold">{gitUser.public_repos}</span>
            ) : (
              <span>No Public Repos</span>
            )}
            <br></br>
          </div>
        </a>
      ) : (
        <h1 className="pulse-loading individualLoadingBx">Loading Profile Data Please Wait...</h1>
      )}
    </Suspense>
  );
};

export default IndividualData;
