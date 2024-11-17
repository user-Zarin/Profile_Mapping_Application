import React, { useState } from "react";
import "../App.css";

function ProfileCard({ profiles, onProfileSelect }) {
  // State to manage which profile's details are being displayed
  const [displayDetailsId, setDisplayDetailsId] = useState(null);

  const handleDetailsToggle = (id) => {
    setDisplayDetailsId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {profiles.map((profile) => (
        <div className="profileCard" key={profile.id} style={{ border: "1px solid #ccc", cursor: "pointer", marginBottom: "10px", padding: "10px" }}>
          <div className="one" style={{ display: "flex" }}>
            <img src={profile.photo} alt={profile.name} style={{ width: "100px", maxHeight: "200px", height: "100px" }} />
            <div className="one_2" style={{ margin: "10px" }}>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              {displayDetailsId === profile.id && (
                <div>
                  <h4>{profile.location}</h4>
                  <h4>{profile.phoneNo}</h4>
                  <h4>{profile.age} Y/O</h4>
                  <h4>{profile.gender}</h4>
                </div>
              )}
            </div>
          </div>
          <div className="buttons" style={{ display: "flex", justifyContent: "space-between" }}>
            <button onClick={() => onProfileSelect(profile)} style={{ background: "yellow", border: "0"}}>Summary</button>
            <button onClick={() => handleDetailsToggle(profile.id)} style={{ background: "gray", border: "0"}}>
              {displayDetailsId === profile.id ? "Hide Details" : "Details"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
