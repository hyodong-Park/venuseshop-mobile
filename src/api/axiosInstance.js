import axios from "axios";

const BASE_URL = "http://52.79.198.9:8000/eshop/api/";

// JWT 필수 instance
export const authApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

// JWT 선택 instance(있을때만 헤더 추가)
export const baseApi = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

// 요청 인터셉터 (토큰 없으면 요청 불가)
authApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            throw new Error("로그인 후 이용해주세요.");
        }
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// 요청 인터셉터 추가 (optionalApi는 토큰 있으면 추가)
baseApi.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// 응답 인터셉터 (401 에러처리)
const responseInterceptor = (error) => {
    if (error.response?.status === 401) {
        console.log("토큰이 만료되었습니다. 다시 로그인하세요.");
        localStorage.removeItem("accessToken");
    }
    return Promise.reject(error);
};

authApi.interceptors.response.use((res) => res, responseInterceptor);
baseApi.interceptors.response.use((res) => res, responseInterceptor);
