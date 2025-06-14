import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? 'http://13.211.52.203:8080' : 'http://13.211.52.203:8080',    // meta.env.PROD ? 배포서버주소 : 테스트서버주소 
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
});

export default axiosInstance;
