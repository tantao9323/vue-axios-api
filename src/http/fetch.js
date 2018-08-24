import Vue from 'vue';
import store from '../store'; // 引入Vuex
import router from '../router'; // 引入Vue-Router

Vue.axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.reject(error);
    });

Vue.axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 403:
                    localStorage.removeItem('token');
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                default:
            }
            return Promise.reject(error.response);
        } else {
            // Network Error Handler
        }
    });

export default function (options) {
    return Vue.axios(options);
}