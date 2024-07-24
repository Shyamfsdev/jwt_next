// "use client"

// import React, { useState } from 'react';
// import { login } from "./auth";

// export default function Home() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [token, setToken] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     console.log('Attempting to login with:', { username, password });

//     try {
//       const response = await login(username, password);
//       console.log('Login response:', response);

//       // Use the correct key to access the token
//       if (response.access_token) {
//         setToken(response.access_token);
//         localStorage.setItem('token', response.access_token);
//         alert('Login successful');
//       } else {
//         throw new Error('Token is undefined');
//       }
//     } catch (err) {
//       console.error('Login error:', err);
//       setError('Failed to login');
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <label>
//           Username:
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button type="submit">Login</button>
//         {error && <p>{error}</p>}
//         {token && <p>Token: {token}</p>}
//       </form>
//     </div>
//   );
// }

"use client"

import React, { useState } from 'react';
import { login } from "./auth";
import Cookies from 'js-cookie'; // Import js-cookie

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log('Attempting to login with:', { username, password });

    try {
      const response = await login(username, password);
      console.log('Login response:', response);

      // Use the correct key to access the token
      if (response.access_token) {
        setToken(response.access_token);
        // Store the token in a cookie
        Cookies.set('token', response.access_token, { expires: 7 }); // Cookie expires in 7 days
        alert('Login successful');
      } else {
        throw new Error('Token is undefined');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Failed to login');
    }
  };

  return (
    <div className="min-h-screen">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        {error && <p>{error}</p>
        }
        {token && <p>Token: {token}</p>}
      </form>
    </div>
  );
}
