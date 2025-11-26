import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Form({ formData, setFormData }) {
  const navigate = useNavigate();

  // Function to handle form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({
      ...formData,
      profileImage: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
    document.getElementById("showcase").remove();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <h2>User Profile</h2>

      <div className="namecombo">
        <input
          className="firstname"
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="lastname"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        placeholder="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      <input
        type="url"
        placeholder="Project Link"
        name="projectLink"
        value={formData.projectLink}
        onChange={handleChange}
        required
      />

      <textarea
        placeholder="Description"
        name="description"
        rows={6}
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>

      <input
        type="file"
        className="choose-file-button"
        onChange={handleImageUpload}
        accept="image/*"
        required
      />

      <button className="submit" type="submit">
        SUBMIT
      </button>
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default Form;
