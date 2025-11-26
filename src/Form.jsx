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

  // Function to handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
    document.getElementById("showcase").remove();
  };

  return (
    /* Form */
    <form onSubmit={handleSubmit}>
      {/* Title */}
      <h2>User Profile</h2>

      {/* First name and Last name for username input */}
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

      {/* Email ID input */}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      {/* Department name input */}
      <input
        type="text"
        placeholder="Department"
        name="department"
        value={formData.department}
        onChange={handleChange}
        required
      />

      {/* Input field for project links */}
      <input
        type="url"
        placeholder="Project Link"
        name="projectLink"
        value={formData.projectLink}
        onChange={handleChange}
        required
      />

      {/* Description - text area */}
      <textarea
        placeholder="Description"
        name="description"
        rows={6}
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>

      {/* Profile image - upload */}
      <input
        type="file"
        className="choose-file-button"
        onChange={handleImageUpload}
        accept="image/*"
        required
      />

      {/* Submit button */}
      <button className="submit" type="submit">
        SUBMIT
      </button>
    </form>
  );
}

// PropTypes library used to validate prop types that are passed in the component --> in this case it is the "Form" component.
// Here, this is enforcing type-checking rules to catch errors.
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
