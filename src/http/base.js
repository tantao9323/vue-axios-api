let baseURL;
if (process.env.NODE_ENV == 'development') {
    baseURL = {
        baseA: 'https://www.development.com',
        baseB: 'http://www.development.com'
    };
} else if (process.env.NODE_ENV == 'debug') {
    baseURL = {
        baseA: 'https://www.debug.com',
        baseB: 'http://www.debug.com'
    };
} else if (process.env.NODE_ENV == 'production') {
    baseURL = {
        baseA: 'https://www.production.com',
        baseB: 'http://www.production.com'
    };
}

export default baseURL;