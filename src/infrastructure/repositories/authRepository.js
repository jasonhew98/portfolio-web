import createHttpClient from "../createHttpClient";

const portfolioService = createHttpClient(process.env.VUE_APP_PORTFOLIO_SERVICE_URL);

export default {
    async login(record) {
        return await portfolioService.post(`/api/auth/login`, record);
    },
    async signup(record) {
        return await portfolioService.post(`/api/auth/signup`, record);
    },
}