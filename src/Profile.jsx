import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./Profile.css";

function Profile({ formData }) {
  let user = formData.firstName + " " + formData.lastName;
  return (
    // The Profile Page that gets redirected once all the inputs are submitted in the form page.
    <div className="profile">
      {/* The Profile Image */}
      {formData.profileImage && (
        <img
          src={formData.profileImage}
          alt="Profile"
          style={{ width: "270px", height: "260px" }}
        />
      )}

      {/* Username */}
      <p>
        <b>Username: </b>
        {user}
      </p>

      {/* Email ID */}
      <p>
        <b>Email ID: </b> {formData.email}
      </p>

      {/* Department name */}
      <p>
        <b>Department: </b> {formData.department}
      </p>

      {/* Link to project */}

      <p>
        <b>Project Link: </b>{" "}
        <a
          href={formData.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {formData.projectLink}
        </a>
      </p>

      {/* Description of the profile */}
      <p>
        <b>Description: </b> {formData.description}
      </p>
    </div>
  );
}

// PropTypes library used to enforce type-checking rules.
Profile.propTypes = {
  formData: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    projectLink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
};

export default Profile;
