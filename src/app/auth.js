// import axios from 'axios';

// // API endpoint for authentication
// const API_URL = 'http://192.168.29.192:8004/multiple_login'; // Replace with your API endpoint

// export async function login(username, password) {
//   if (username !== 'super_admin' || password !== 'Admin@123') {
//     console.error('Invalid credentials provided:', { username, password });
//     throw new Error('Invalid credentials');
//   }

//   console.log('Sending login request to API with:', { user_name: username, show_password: password });

//   try {
//     const response = await axios.post(API_URL, { user_name: username, show_password: password }, {
//       headers: {
//         'Authorization': 'engguergi09ertgiojg'
//       }
//     });

//     console.log('API response:', response.data);

//     // Assuming response.data has a structure like { status: 200, access_token: 'your_jwt_token' }
//     if (response.data.access_token) {
//       return { access_token: response.data.access_token };
//     } else {
//       throw new Error('Token not found in response');
//     }
//   } catch (error) {
//     console.error('Error logging in', error);
//     throw error;
//   }
// }


import axios from 'axios';
import Cookies from 'js-cookie'; // Import js-cookie

const API_URL = 'http://192.168.29.192:8004/multiple_login'; // Replace with your API endpoint

export async function login(username, password) {
  if (username !== 'super_admin' || password !== 'Admin@123') {
    console.error('Invalid credentials provided:', { username, password });
    throw new Error('Invalid credentials');
  }

  console.log('Sending login request to API with:', { user_name: username, show_password: password });

  try {
    const response = await axios.post(API_URL, { user_name: username, show_password: password }, {
      headers: {
        'Authorization': 'engguergi09ertgiojg'
      }
    });

    console.log('API response:', response.data);

    // Assuming response.data has a structure like { status: 200, access_token: 'your_jwt_token' }
    if (response.data.access_token) {
      // Store token in cookies
      Cookies.set('token', response.data.access_token, { expires: 7 }); // Cookie expires in 7 days
      return { access_token: response.data.access_token };
    } else {
      throw new Error('Token not found in response');
    }
  } catch (error) {
    console.error('Error logging in', error);
    throw error;
  }
}

