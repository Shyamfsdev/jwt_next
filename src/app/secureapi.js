// // import axios from 'axios';

// // const SECURE_API_URL = 'http://192.168.29.192:8004/multiple_login'; // Replace with your secure API endpoint

// // export async function fetchSecureData() {
// //   const token = localStorage.getItem('token');

// //   try {
// //     const response = await axios.get(SECURE_API_URL, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     console.error('Error fetching secure data', error);
// //     throw error;
// //   }
// // }


// // secureapi.js
// import axios from 'axios';
// import Cookies from 'js-cookie'; // Import js-cookie

// const SECURE_API_URL = 'http://192.168.29.192:8004/secure_endpoint'; // Replace with your secure API endpoint

// export async function fetchSecureData() {
//   const token = Cookies.get('token'); // Retrieve token from cookie

//   try {
//     const response = await axios.get(SECURE_API_URL, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching secure data', error);
//     throw error;
//   }
// }
