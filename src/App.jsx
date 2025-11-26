import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Profile from "./Profile";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    projectLink: "",
    description: "",
    profileImage: null,
  });

  return (
    <Router>
      <div className="container">
        <div className="left" id="showcase">
          <div>
            <h1>Nieto Developer </h1>
            <h1>Form</h1>
            <h1>Very Complete</h1>
          </div>
        </div>
        <div className="right">
          <div className="logo icon-top-right">
            <img src="src/assets/LogoNieto2024.png" alt="Logo" />
          </div>
          <Routes>
            <Route
              path="/"
              element={<Form formData={formData} setFormData={setFormData} />}
            />
            <Route path="/profile" element={<Profile formData={formData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
