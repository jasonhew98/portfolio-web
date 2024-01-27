import userRepository from "./repositories/userRepository";

const repositories = {
	userRepository
};

const createRepositories = {
    install(app) {
        app.config.globalProperties.$repository = repositories;
    },
};

export default createRepositories;
