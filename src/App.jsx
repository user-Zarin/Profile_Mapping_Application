import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileListPage from './pages/ProfileListPage';
import AdminPage from './pages/AdminPanel';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<ProfileListPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
  );
}

export default App;
