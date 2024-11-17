import React, { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import { fetchProfiles } from '../api/profileData';
import { useNavigate } from 'react-router-dom'; 
import MapboxGl from "mapbox-gl";
import SearchBar from '../components/SearchBar';
import '../App.css'
MapboxGl.accessToken = "pk.eyJ1IjoiZGV2emFyaW4iLCJhIjoiY20zZzRlamk3MDBseDJpcXBtZnc2dmVhZCJ9.YGJsczDvQwoWPtkun_6stQ";

const ProfileListPage = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  const navigateToAdminPage = () => {
    navigate('/admin');  // Navigate to the admin page
  };

  useEffect(() => {
    const loadProfiles = async () => {
      const data = await fetchProfiles();
      console.log("Fetched Profiles:", data); // Log the data
      setProfiles(data);
      setFilteredProfiles(data); // Initialize filtered profiles
    };
    loadProfiles();
  }, []);

  const handleSearch = (term) => {
    const lowercasedTerm = term.toLowerCase();

    const filtered = profiles.filter((profile) =>
      (profile.name.toLowerCase().includes(lowercasedTerm)) ||
      (profile.location && profile.location.toLowerCase().includes(lowercasedTerm)) ||
      (profile.description && profile.description.toLowerCase().includes(lowercasedTerm))
    );

    setFilteredProfiles(filtered);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", width: "100%", height: "100%" }}>
      {/* Profile List Section - 30% width */}
      <div 
        style={{
          flex: "0 0 30%",  // Ensure profile list takes up 30% of the width
          maxHeight: "90vh", 
          overflowY: "auto",  // Enable scrolling for profile list
          padding: "0 20px",
          marginTop: "20px",
        }}
      >
        {/* Show No Matches Found if no profiles are filtered */}
         {/* Profile Header with Admin Button */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Profiles</h2>
          <button 
            onClick={navigateToAdminPage}  // Trigger navigation to the admin page
            style={{
              padding: "8px 16px", 
              backgroundColor: "#007bff", 
              color: "white", 
              border: "none", 
              borderRadius: "4px", 
              cursor: "pointer"
            }}
          >
            Go to Admin
          </button>
        </div>

        {filteredProfiles.length === 0 ? (
          <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
            No Matches Found
          </div>
        ) : (
          <ProfileCard profiles={filteredProfiles} onProfileSelect={setSelectedProfile} />
        )}
      </div>

      {/* Search Bar and Map Section - 70% width */}
      <div 
        style={{
          flex: "0 0 70%",  // Ensure search bar and map take up 70% of the width
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {/* Search Bar */}
        <div style={{ width: "100%", marginBottom: "10px" }}>
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Map Container */}
        <div 
          style={{
            width: "65vw",  // Ensure the map takes full width of the container
            height: "calc(80vh - 50px)",  // Adjust height based on available space
            position: "relative",
            marginTop: "10px",  // Adjust the space between the search bar and the map
            overflow: "hidden",
            borderRadius: "6px", 
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center"
          }}
        >
          <MapComponent selectedProfile={selectedProfile} />
        </div>
      </div>
    </div>
  );
};

export default ProfileListPage;
