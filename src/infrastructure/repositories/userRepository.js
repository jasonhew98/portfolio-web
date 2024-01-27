export default {
    getMyProfile() {
        return [null, 
        {
            firstName: "Jia Sheng",
            lastName: "Hew",
            preferredName: "Jason",
            introduction: "I have over 4 years of experience in the tech industry.",
            countryCode: "+60",
            contactNumber: "126220832",
            email: "jasonhew1211@gmail.com",
            workPreferences: ["Remote", "Hybrid"],
            skillSets: [
                {
                    name: "C# .Net Core",
                    proficiencyLevel: 10
                },
                {
                    name: "JavaScript",
                    proficiencyLevel: 10
                },
                {
                    name: "Vue.js",
                    proficiencyLevel: 10
                }
            ],
            jobHistory: [
                {
                    companyName: "Fusionex",
                    jobTitle: "Android Developer (Intern)",
                    isCurrentJob: false,
                    startDate: "2020-02-17",
                    endDate: "2020-07-31",
                    description: "The success of every websites depends on search engine optimisation and digital marketing strategy."
                },
                {
                    companyName: "Fusionex",
                    jobTitle: "Solutions Developer",
                    isCurrentJob: true,
                    startDate: "2020-08-19",
                    endDate: "",
                    description: "The success of every websites depends on search engine optimisation and digital marketing strategy."
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