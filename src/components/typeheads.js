import React, { useState, useEffect } from 'react';
import { GitUser as gitUserAPI } from '../services/gitusers-api';


const Typeheads = () => {
    const [gitUsers, setGitUsers] = useState(null);

    useEffect(() => {
        const getGitUsers = (users) => {
            setGitUsers(users)
        }

        gitUserAPI.getAllUsers().then(res => {
            // setGitUsers(res.data)
            console.log(res,'bb',gitUsers)
        });

        // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        // // Specify how to clean up after this effect:
        // return function cleanup() {
        //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        // };
      },[]);

  return <div className="flex-item">One</div>;
};

export default Typeheads;
