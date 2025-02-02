import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Profile from "./Profile";
import "./App.css";

function App() {
  // useState React hook used to manage the form state, the initial states are initiated as an empty string.
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
    // React router - used to route to specific pages. In this case it is to redirect from Forms page to the Profile page once
    // data is submitted in the form.
    <Router>
      <div className="container">
        <div className="left" id="showcase">
          <div>
            <h1>Showcase </h1>
            <h1>your details</h1>
            <h1>with clarity</h1>
          </div>
        </div>
        <div className="right">
          <div className="logo icon-top-right">
            <img src="src/assets/logo-favicon.jpg" alt="Logo" />
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
