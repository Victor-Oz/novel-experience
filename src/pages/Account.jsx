import React from "react";
import { UserAuth } from "../context/AuthContext";
import NewLocation from "../components/NewLocation";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="account-container">
      <div className="account-greeting">Welcome, {user?.displayName}</div>
      <img className="account-profile-photo" src={user?.photoURL} alt="" />

      <div className="account-maintext">This weeks location is Asian Town </div>

      <div className="account-subtext">
        38 Forces Ave, Old GRA 500101, Port Harcourt, Rivers
      </div>
      <div className="week-location-img-container">
        <img className="week-location-img" src="/asia1.jpg" alt="" />
        <img className="week-location-img" src="/asia2.jpg" alt="" />
        <img className="week-location-img" src="/asia3.jpg" alt="" />
        <img className="week-location-img" src="/asia4.jpg" alt="" />
        <img className="week-location-img" src="/asia5.jpg" alt="" />
        <img className="week-location-img" src="/asia6.jpg" alt="" />
        <video
          className="week-location-img"
          width="320"
          height="320"
          controls
          muted
        >
          <source src="/asiavid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <img className="week-location-img" src="/asia8.JPG" alt="" />
      </div>
      <div className="account-maintext">Geolocation </div>
      <NewLocation />

      <button onClick={handleSignOut} className="sign-in-button">
        Logout
      </button>
    </div>
  );
};

export default Account;
