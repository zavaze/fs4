import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = () => {
  if (
    JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken
  ) {
    return JSON.parse(JSON.parse(localStorage.getItem('persist:root')).user)
      .currentUser.accessToken;
  } else {
    return '';
  }
};
// const TOKEN =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2YzOWVkZWNjZjg2MjQ5MmM4MWYwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTg3ODEwOSwiZXhwIjoxNjcyMTM3MzA5fQ.9J3FWfhDi4ou7BlCUT-XkSvIscj5gnba38lENPUDFvc';
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
