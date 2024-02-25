import createHttpClient from "../createHttpClient";

const portfolioService = createHttpClient(process.env.VUE_APP_PORTFOLIO_SERVICE_URL);

export default {
    async login() {
        return await portfolioService.post(`/api/auth/login`, {
            UserName: "jasonhew98",
            Password: "Dferas@98"
        });
    },
    async getMyProfile() {
        // return await portfolioService.get(`api/user/profile/me`, { authType: 'bearer' });

        return [null, 
            {
                firstName: "Jia Sheng",
                lastName: "Hew",
                preferredName: "Jason",
                introduction: "Software Engineer. Anime lover. I have years of experience in full stack development specializing in backend development. I design and develop innovative web applications using modern technologies.",
                countryCode: "+60",
                contactNumber: "126220832",
                email: "jasonhew1211@gmail.com",
                workPreferences: ["Remote", "Hybrid"],
                skillSets: [
                    {
                        name: "C#",
                        skillType: "backend",
                        proficiencyLevel: "expert"
                    },
                    {
                        name: ".Net Core",
                        skillType: "backend",
                        proficiencyLevel: "expert"
                    },
                    {
                        name: "Node.js",
                        skillType: "backend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "Java",
                        skillType: "backend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "Python",
                        skillType: "backend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "MongoDb",
                        skillType: "backend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "HTML",
                        skillType: "frontend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "CSS",
                        skillType: "frontend",
                        proficiencyLevel: "intermediate"
                    },
                    {
                        name: "JavaScript",
                        skillType: "frontend",
                        proficiencyLevel: "expert"
                    },
                    {
                        name: "Vue.js",
                        skillType: "frontend",
                        proficiencyLevel: "expert"
                    },
                    {
                        name: "Angular",
                        skillType: "frontend",
                        proficiencyLevel: "intermediate"
                    },
                ],
                jobHistory: [
                    {
                        companyName: "Fusionex Group",
                        jobTitle: "Android Developer (Intern)",
                        isCurrentJob: false,
                        startDate: "2020-02-17",
                        endDate: "2020-07-31",
                        description: "<ul><li>Actively involved in mobile app development for&nbsp;one of the leading financial institution in South East Asia.</li><li>Developed, enhanced, and debugged existing mobile app.</li><li>Revamped user interface to improve user experience.</li></ul>"
                    },
                    {
                        companyName: "Fusionex Group",
                        jobTitle: "Solutions Developer",
                        isCurrentJob: true,
                        startDate: "2020-08-19",
                        endDate: "",
                        description: "<ul><li>Active involvement in product development and delivery.</li><li>Solution designs and implementation.</li><li>Full stack web development.</li><li>Involve in research and development of modern tecnnologies such as OpenAI.</li></ul>"
                    }
                ],
                projects: [
                    {
                        name: "Property Auction"
                    },
                    {
                        name: "Big Data Analytic"
                    },
                    {
                        name: "Budget Forecast Simulation"
                    },
                    {
                        name: "Gen. AI"
                    }
                ]
            }];
    }
}