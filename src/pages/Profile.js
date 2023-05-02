import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import man from "./../images/Union.png";
import woman from "./../images/UnionW.png";
import "./../styles/Profile.css";

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const user = userData["Data"]?.user;

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  // console.log(user);
  return (
    <Layout>
      {user && (
        <div className="profile">
          <img src={user?.gender === "Male" ? man : woman} alt="img" />
          <div>
            <h2>Welcome, {user.username}!</h2>
            <p>Email: {user?.email}</p>
            <p>Gender: {user?.gender}</p>
            <p>Location: {user?.location}</p>
            <p>Looking for: {user?.looking_for}</p>
            <p>Phone: {user?.phone}</p>
            <p>Hobbies: {user?.hobbies.join(", ")}</p>
            <p>Movies: {user?.movies.join(", ")}</p>
          </div>
        </div>
      )}
    </Layout>
  );
};
