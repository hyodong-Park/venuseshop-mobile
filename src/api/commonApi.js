import { authApi,baseApi } from "./axiosInstance";

//임시 로그인
export const login = async () => {

    try {
        const response = await baseApi.post('/auth/login',{username : 'gsm0530test95', password : 'sooin12!'});

        if(response.status == 200) {
            const token = response.data.token
            localStorage.setItem("accessToken",token);
        }

        return response; // 성공 시 response.data 반환
    } catch (error) {
        return error;
    }
};

//임시 로그아웃
export const logout = async () => {

    try {
        //나중에 서버에서 로그아웃 처리 필요하면 추가하면 될듯
        await localStorage.removeItem("accessToken");

        return true; // 성공 시 response.data 반환
    } catch (error) {
        return error;
    }
};

//상품 좋아요 처리
export const changeWishItem = async(like,productid) => {

    const url = `/wish/${productid}`;

    try {
        const response = like ? await authApi.post(url) : await authApi.delete(url);
        return response.data;
    } catch (error) {
        return Promise.reject(error);
    }
}