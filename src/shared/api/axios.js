import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, //axios, XMLHttpRequest, fetch API에서 요청에 쿠키, 인증 정보(자격 증명)를 포함할지 여부를 지정하는 옵션(기존 옵션: credentials: 'include')
});

// 매 요청의 HTTP 헤더에 Authorization: Bearer <액세스 토큰>을 자동으로 추가
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("accessToken");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 토큰 만료 시 새로고침
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.data === "jwt expired") {
      window.location.reload();
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
