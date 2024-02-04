import lookupRepository from "./repositories/lookupRepository";
import userRepository from "./repositories/userRepository";

const repositories = {
	userRepository,
    lookupRepository
};

const createRepositories = {
    install(app) {
        app.config.globalProperties.$repository = repositories;
    },
};

export default createRepositories;
