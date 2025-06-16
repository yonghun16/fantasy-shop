import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? 'http://13.211.52.203:8080' : 'http://13.211.52.203:8080',    // meta.env.PROD ? 배포서버주소 : 테스트서버주소 
  credentials: 'include',
});

// 매 요청의 HTTP 헤더에 Authorization: Bearer <액세스 토큰>을 자동으로 추가
axiosInstance.interceptors.request.use(function(config) {
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
  return config;
}, function(error) {
  return Promise.reject(error);
})

// 토큰 만료 시 새로고침
axiosInstance.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  if (error.response.data === 'jwt expired') {
    window.location.reload();
  }

  return Promise.reject(error);
})


export default axiosInstance;
