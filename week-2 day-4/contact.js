import React, { useState } from 'react';

const Contact = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleContactChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <div>
        <label>
          Contact Number:
          <input
            type="text"
            value={contactNumber}
            onChange={handleContactChange}
            placeholder="Enter your contact number"
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Enter your address"
          />
        </label>
      </div>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div>
          <p>Contact Number: {contactNumber}</p>
          <p>Address: {address}</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
