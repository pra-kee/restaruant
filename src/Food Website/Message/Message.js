import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile1 = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", number: "", address: "" });
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedNumber, setUpdatedNumber] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");

  useEffect(() => {
    // Load user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setUpdatedName(storedUser.name);
      setUpdatedEmail(storedUser.email);
      setUpdatedNumber(storedUser.number);
      setUpdatedAddress(storedUser.address);
    } else {
      navigate("/register1"); // Redirect to registration if no user found
    }
  }, [navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    // Update only the changed values
    const updatedUser = {
      name: updatedName || user.name,
      email: updatedEmail || user.email,
      number: updatedNumber || user.number,
      address: updatedAddress || user.address,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.number}</p>
      <p>Address: {user.address}</p>

      <h3>Update Profile</h3>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={updatedName}
          onChange={(e) => setUpdatedName(e.target.value)}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          value={updatedEmail}
          onChange={(e) => setUpdatedEmail(e.target.value)}
        />
        <br />
        <label>Phone Number:</label>
        <input
          type="text"
          value={updatedNumber}
          onChange={(e) => setUpdatedNumber(e.target.value)}
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          value={updatedAddress}
          onChange={(e) => setUpdatedAddress(e.target.value)}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Profile1;
