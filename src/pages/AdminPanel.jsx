import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { fetchProfiles } from '../api/profileData';
import '../assets/style.css'; // Import the external CSS file

const AdminPage = () => {
  const navigate = useNavigate();  // Hook to navigate to other pages
  const [profiles, setProfiles] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({
    id: null,
    name: '',
    description: '',
    location: '',
    photo: '',
    phoneNo:'',
    gender:'',
    age:'',
    displayDetails:false,
  });
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const loadProfiles = async () => {
      const data = await fetchProfiles();
      setProfiles(data);
    };
    loadProfiles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProfile({ ...currentProfile, [name]: value });
  };

  const handleAddProfile = () => {
    // Form validation for required fields
    if (!currentProfile.name || !currentProfile.description || !currentProfile.location) {
      setFormError('Please fill out Name, Description and Location fields.');
      return;
    }

    const newProfile = {
      ...currentProfile,
      id: profiles.length + 1,
    };
    setProfiles([...profiles, newProfile]);
    resetForm();
  };

  const handleEditProfile = (id) => {
    const profile = profiles.find((p) => p.id === id);
    setCurrentProfile(profile);
    setEditMode(true);
    setFormError(''); // Reset any previous form error
  };

  const handleSaveProfile = () => {
    // Form validation for required fields
    if (!currentProfile.name || !currentProfile.description || !currentProfile.location) {
      setFormError('Please fill out Name, Description and Location Fields.');
      return;
    }

    setProfiles(
      profiles.map((p) => p.id === currentProfile.id ? currentProfile : p )
    );
    resetForm();
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  const resetForm = () => {
    setCurrentProfile({
      id: null,
      name: '',
      description: '',
      location: '',
      photo: '',
    });
    setEditMode(false);
    setFormError(''); // Clear any errors when resetting the form
  };

  const navigateToProfileList = () => {
    navigate('/');  // Navigate back to Profile List page
  };

  return (
    <div className="admin-page">
      <div className="form-section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>{editMode ? "Edit Profile" : "Add Profile"}</h2>
          <button
            onClick={navigateToProfileList}
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </div>
        <form className="profile-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={currentProfile.name}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={currentProfile.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={currentProfile.location}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={currentProfile.photo}
            onChange={handleInputChange}
          />

          <input
            type="number"
            name="phoneNo"
            placeholder="Contact Details"
            value={currentProfile.phoneNo}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={currentProfile.age}
            onChange={handleInputChange}
          />
          <label for="gender">Select gender: </label>
          <select name="gender" style={{marginBottom:"8vh", padding:"10px"}}>
            <option value="female" onChange={handleInputChange}>Female</option>
            <option value="male" onChange={handleInputChange}>Male</option>
            <option value="other" onChange={handleInputChange}>Other</option>
          </select>
          {formError && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {formError}
            </div>
          )}
          <div className="button-group">
            {editMode ? (
              <button type="button" onClick={handleSaveProfile}>Save</button>
            ) : (
              <button type="button" onClick={handleAddProfile}>Add</button>
            )}
            <button type="button" onClick={resetForm}>Cancel</button>
          </div>
        </form>
      </div>

      <div className="profile-list-section">
        <h2>Profile List</h2>
        <ul className="profile-list">
          {profiles.map((profile) => (
            <li key={profile.id} className="profile-item">
              <div className="profile-details">
                <p><strong>{profile.name}</strong></p>
                <p>{profile.description}</p>
              </div>
              <div className="action-buttons">
                <button onClick={() => handleEditProfile(profile.id)}>Edit</button>
                <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
