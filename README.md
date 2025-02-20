# React + Vite

# Profile Explorer Web Application

This project is a web application built using the React framework, designed to allow users to view a list of profiles and interactively explore the addresses of each profile on a map. It provides an intuitive and user-friendly way to navigate through profiles, visualize geographic locations, and manage profile data.

### Slides

<p align="center">
  <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(216).png" width="350" title="hover text">
   <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(217).png" width="350" title="hover text">
   <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(218).png" width="350" title="hover text">
   <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(219).png" width="350" title="hover text">
   <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(220).png" width="350" title="hover text">
   <img src="https://github.com/user-Zarin/Profile_Mapping_Application/blob/main/PMS/Screenshot%20(221).png" width="350" title="hover text">
</p>

## Features

1. **Profile Display**  
   - Displays a collection of profiles with essential information such as name, photograph, and a brief description.

2. **Interactive Mapping**  
   - Includes a dynamic map component to display the address associated with a selected profile.  
   - Users can view the geographical location on the map with markers.

3. **Summary Integration**  
   - Each profile includes a "Summary" button to trigger the map component, showing the exact location of the selected profile.

4. **Map Services Integration**  
   - Utilizes **Mapbox** for interactive mapping functionality with precise markers.

5. **User-Friendly Experience**  
   - Smooth navigation and easy interaction with profiles and mapped locations.

6. **Profile Data Management**  
   - Provides an admin dashboard for administrators to:
     - Add profiles
     - Edit profiles
     - Delete profiles

7. **Search and Filter Functionality**  
   - Users can search and filter profiles based on criteria like name and location.

8. **Error Handling**  
   - Robust error handling for invalid addresses, failed map service requests, or other issues.

9. **Profile Details View**  
    - A dedicated view to display more detailed information about a profile, such as contact information, interests, etc.

## Getting Started

### Prerequisites

- **Node.js** (>= 14.0)
- **npm** (>= 6.0) or **yarn** (>= 1.22)
- API Key for Mapbox or Google Maps (if using external map services)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/profile-explorer.git
   cd profile-explorer
2. Install dependencies:
    npm install
3. Create a .env file in the root directory and add your Mapbox or place your mapbox token in place of "MapboxGl.accessToken" :
    REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key
4. Start the development server:
    npm run dev
5. Open the application in your browser at http://localhost:portNumber.


#Project Structure

src/<br>
├── components/<br>
│   ├── AdminPanel.jsx       # Admin dashboard for profile management<br>
│   ├── MapComponent.jsx     # Interactive map component using Mapbox/Google Maps<br>
│   ├── ProfileCard.jsx      # Displays individual profile cards<br>
│   ├── ProfileDetails.jsx   # Detailed view of a single profile<br>
│   ├── SearchBar.jsx        # Search and filter functionality<br>
├── pages/<br>
│   ├── ProfileListPage.jsx  # Main page displaying profiles and map<br>
│   ├── AdminPage.jsx        # Admin page for managing profiles<br>
├── api/<br>
│   ├── profileData.js       # API calls for fetching and managing profile data<br>
├── styles/<br>
│   ├── App.css              # Global styles<br>
│   ├── ProfileListPage.css  # Styles for ProfileListPage<br>
├── App.js                   # Main application component<br>
├── index.js                 # Entry point<br>


### Features Breakdown
<b>Profile List Page</b><br>
Displays a list of profiles with a search bar at the top.<br>
Clicking on a profile shows its location on the map.<br>
A "Summary" button next to each profile dynamically updates the map with a marker at the corresponding address.<br>
<b>Admin Panel</b><br>
Allows admins to add, edit, or delete profiles.<br>
Validates input data before submission.<br>
<b>Search and Filter</b><br>
Provides an intuitive search bar for filtering profiles by name, location, or description.<br>
<b>Map Component</b><br>
Integrates with Mapbox (or Google Maps) to display interactive maps.<br>


Dynamically updates markers based on user interaction.<br>
<b>Technologies Used<b><br>
React: Frontend framework
React Router: For navigation between pagesv
Mapbox GL JS: For interactive mapping<br>
CSS: For responsive styling<br>
React Hook : For form in the admin panel<br>
