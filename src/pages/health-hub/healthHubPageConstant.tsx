import { Images } from "@/assets/images";
import { IArticle } from "@/utils/types/article";

export enum IHealthHubPageTab {
    TRENDING = "trending",
    POPULAR = "popular",
    HEALTH_NEEDS = "healthNeeds",
    SUPPLEMENTS = "supplements",
    PRACTITIONER_BLOGS = "practitionerBlogs",
}

export enum IHealthNeedsType {
    ALL_HEALTH_NEEDS = "All health needs",
    MENTAL_HEALTH = "Mental Health",
    ALLERGIES = "Allergies",
    BLOOD_SUGAR_BALANCE = "Blood Sugar Balance",
    BONES_JOINTS_AND_MUSCLES = "Bones, Joints \u0026 Muscles",
    BRAIN_LEARNING_AND_COGNITIVE_HEALTH = "Brain, Learning \u0026 Cognitive Health",
    CARDIOVASCULAR_HEALTH = "Cardiovascular Health",
    IMMUNE_HEALTH = "Immune Health",
    BABIES_AND_CHILDREN = "Babies \u0026 Children",
    DIGESTIVE_AND_GUT_HEALTH = "Digestive \u0026 Gut Health",
    ENERGY_SUPPORT = "Energy Support",
    EYE_HEALTH = "Eye Health",
    LIVER_AND_DETOX = "Liver \u0026 Detox",
    MENS_HEALTH = "Men\u0027s Health",
    PREGNANCY_AND_REPRODUCTIVE_HEALTH = "Pregnancy \u0026 Reproductive Health",
    SKIN_HEALTH = "Skin Health",
    SPORTS_AND_FITNESS = "Sports \u0026 Fitness",
    STRESS_AND_SLEEP = "Stress \u0026 Sleep",
    TRAVEL_HEALTH = "Travel Health",
    WOMENS_HEALTH = "Women\u0027s Health",
    WEIGHTLOSS_AND_WEIGHT_MANAGEMENT = "Weightloss \u0026 Weight Management",
}

export const healthNeedPageFilterOption = [
    {
        text: `healthHub.filterOption.allHealthNeeds`,
        value: IHealthNeedsType.ALL_HEALTH_NEEDS,
    },
    {
        text: `healthHub.filterOption.mentalHealth`,
        value: IHealthNeedsType.MENTAL_HEALTH,
    },
    {
        text: `healthHub.filterOption.allergies`,
        value: IHealthNeedsType.ALLERGIES,
    },
    {
        text: `healthHub.filterOption.bloodSugarBalance`,
        value: IHealthNeedsType.BLOOD_SUGAR_BALANCE,
    },
    {
        text: `healthHub.filterOption.bonesJointsAndMuscles`,
        value: IHealthNeedsType.BONES_JOINTS_AND_MUSCLES,
    },
    {
        text: `healthHub.filterOption.brainLearningAndCognitiveHealth`,
        value: IHealthNeedsType.BRAIN_LEARNING_AND_COGNITIVE_HEALTH,
    },
    {
        text: `healthHub.filterOption.cardiovascularHealth`,
        value: IHealthNeedsType.CARDIOVASCULAR_HEALTH,
    },
    {
        text: `healthHub.filterOption.immuneHealth`,
        value: IHealthNeedsType.IMMUNE_HEALTH,
    },
    {
        text: `healthHub.filterOption.babiesAndChildren`,
        value: IHealthNeedsType.BABIES_AND_CHILDREN,
    },
    {
        text: `healthHub.filterOption.digestiveAndGutHealth`,
        value: IHealthNeedsType.DIGESTIVE_AND_GUT_HEALTH,
    },
    {
        text: `healthHub.filterOption.energySupport`,
        value: IHealthNeedsType.ENERGY_SUPPORT,
    },
    {
        text: `healthHub.filterOption.eyeHealth`,
        value: IHealthNeedsType.EYE_HEALTH,
    },
    {
        text: `healthHub.filterOption.liverAndDetox`,
        value: IHealthNeedsType.LIVER_AND_DETOX,
    },
    {
        text: `healthHub.filterOption.mensHealth`,
        value: IHealthNeedsType.MENS_HEALTH,
    },
    {
        text: `healthHub.filterOption.pregnancyAndReproductiveHealth`,
        value: IHealthNeedsType.PREGNANCY_AND_REPRODUCTIVE_HEALTH,
    },
    {
        text: `healthHub.filterOption.skinHealth`,
        value: IHealthNeedsType.SKIN_HEALTH,
    },
    {
        text: `healthHub.filterOption.sportsAndFitness`,
        value: IHealthNeedsType.SPORTS_AND_FITNESS,
    },
    {
        text: `healthHub.filterOption.stressAndSleep`,
        value: IHealthNeedsType.STRESS_AND_SLEEP,
    },
    {
        text: `healthHub.filterOption.travelHealth`,
        value: IHealthNeedsType.TRAVEL_HEALTH,
    },
    {
        text: `healthHub.filterOption.womensHealth`,
        value: IHealthNeedsType.WOMENS_HEALTH,
    },
    {
        text: `healthHub.filterOption.weightlossAndWeightManagement`,
        value: IHealthNeedsType.WEIGHTLOSS_AND_WEIGHT_MANAGEMENT,
    },
];

export const healthHubPageTabItems = [
    {
        text: "healthHub.tab.trending",
        value: IHealthHubPageTab.TRENDING,
    },
    {
        text: "healthHub.tab.popular",
        value: IHealthHubPageTab.POPULAR,
    },
    {
        text: "healthHub.tab.healthNeeds",
        value: IHealthHubPageTab.HEALTH_NEEDS,
    },
    {
        text: "healthHub.tab.supplements",
        value: IHealthHubPageTab.SUPPLEMENTS,
    },
    {
        text: "healthHub.tab.practitionerBlogs",
        value: IHealthHubPageTab.PRACTITIONER_BLOGS,
    },
];

export const healthHubTrendingList = [1, 2, 1, 1, 2, 1];
export const healthHubPopularList = [1, 2];

export const healthHubArticleList: IArticle[] = [
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "healthHub.card1.date",
        title: "healthHub.card1.title",
        desc: "healthHub.card1.desc",
        content: [
            "healthHub.card1.content1",
            "healthHub.card1.content2",
            "healthHub.card1.content3",
            "healthHub.card1.content4",
        ],
    },
    {
        id: "2",
        imgUrl: Images.HomePageHealthHubCard2,
        date: "healthHub.card2.date",
        title: "healthHub.card2.title",
        desc: "healthHub.card2.desc",
        content: [
            "healthHub.card1.content1",
            "healthHub.card1.content2",
            "healthHub.card1.content3",
            "healthHub.card1.content4",
        ],
    },
];

export const HealthHubPageCardList: {
    [key in IHealthHubPageTab]: string[];
} = {
    [IHealthHubPageTab.TRENDING]: ["1", "2", "1", "1", "2", "1"],
    [IHealthHubPageTab.POPULAR]: ["1", "2"],
    [IHealthHubPageTab.HEALTH_NEEDS]: ["1", "1", "1", "1", "1"],
    [IHealthHubPageTab.SUPPLEMENTS]: ["2"],
    [IHealthHubPageTab.PRACTITIONER_BLOGS]: ["1"],
};
