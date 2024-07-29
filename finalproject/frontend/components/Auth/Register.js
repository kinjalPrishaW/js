// // /src/components/Auth/Register.js

// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('accountHolder');
//   const { register } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register({ username, email, password, role });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <div>
//         <label>Role:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="accountHolder">Account Holder</option>
//           <option value="manager">Manager</option>
//         </select>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;


// import React, { useState, useContext } from 'react';
// import { AuthContext } from '../../context/AuthContext';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('accountHolder');
//   const { register } = useContext(AuthContext);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await fetch('http://localhost:3000/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password, role }),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         setError(errorData.message || 'Registration failed');
//         return;
//       }

//       const data = await response.json();
//       register(data); // Call the register function from AuthContext
//       // You can also redirect the user or show a success message here
//     } catch (err) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div>
//         <label>Username:</label>
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//       </div>
//       <div>
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//       </div>
//       <div>
//         <label>Role:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="accountHolder">Account Holder</option>
//           <option value="manager">Manager</option>
//         </select>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

import React, { useState, useContext } from 'react';
import axios from 'axios'; // Import axios
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('accountHolder');
  const { register } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      console.log("123456")
      const response = await axios.post('http://localhost:3000/auth/register', {
        username,
        email,
        password,
        role,
      });
      register(response.data); // Call the register function from AuthContext
      // You can also redirect the user or show a success message here
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="accountHolder">Account Holder</option>
          <option value="manager">Manager</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
