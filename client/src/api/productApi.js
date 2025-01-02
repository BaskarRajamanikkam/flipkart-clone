import axiosClient from "./axiosClient";


const productApi = {
    getAll: (keyword) => axiosClient.get(`/products?keyword=${keyword}`),
    getDetail : (id) => axiosClient.get(`/product/${id}`)
};


export default productApi;