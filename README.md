# React + Vite

# Profile Explorer Web Application

This project is a web application built using the React framework, designed to allow users to view a list of profiles and interactively explore the addresses of each profile on a map. It provides an intuitive and user-friendly way to navigate through profiles, visualize geographic locations, and manage profile data.

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

src/
├── components/
│   ├── AdminPanel.jsx       # Admin dashboard for profile management
│   ├── MapComponent.jsx     # Interactive map component using Mapbox/Google Maps
│   ├── ProfileCard.jsx      # Displays individual profile cards
│   ├── ProfileDetails.jsx   # Detailed view of a single profile
│   ├── SearchBar.jsx        # Search and filter functionality
├── pages/
│   ├── ProfileListPage.jsx  # Main page displaying profiles and map
│   ├── AdminPage.jsx        # Admin page for managing profiles
├── api/
│   ├── profileData.js       # API calls for fetching and managing profile data
├── styles/
│   ├── App.css              # Global styles
│   ├── ProfileListPage.css  # Styles for ProfileListPage
├── App.js                   # Main application component
├── index.js                 # Entry point


### Features Breakdown
<b>Profile List Page</b>
Displays a list of profiles with a search bar at the top.
Clicking on a profile shows its location on the map.
A "Summary" button next to each profile dynamically updates the map with a marker at the corresponding address.
<b>Admin Panel</b>
Allows admins to add, edit, or delete profiles.
Validates input data before submission.
<b>Search and Filter</b>
Provides an intuitive search bar for filtering profiles by name, location, or description.
<b>Map Component</b>
Integrates with Mapbox (or Google Maps) to display interactive maps.
Dynamically updates markers based on user interaction.
<b>Technologies Used<b>
React: Frontend framework
React Router: For navigation between pages
Mapbox GL JS: For interactive mapping
CSS: For responsive styling
React Hook : For form in the admin panel
Future Enhancements
Add support for bulk import/export of profiles.
Implement user authentication for admin access.
Enhance map functionality with directions and route planning.
Contributing
Fork the repository.
Create a new branch for your feature or bug fix.
Commit your changes and push them to your fork.
Submit a pull request to the main repository.