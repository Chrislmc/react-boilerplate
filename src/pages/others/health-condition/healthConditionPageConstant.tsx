import { Images } from "@/assets/images";
import { IOption } from "@/components/atoms/checkBox";
import { IAccordion } from "@/components/molecules/accordion";

export enum IHealthConditionPageFilter {
    Conditions = "conditions",
    FeaturedConditions = "featuredConditions",
}

export interface IHealthConditionPageActiveFilter {
    [IHealthConditionPageFilter.Conditions]: IOption<string>[];
    [IHealthConditionPageFilter.FeaturedConditions]: IOption<string>[];
}

export const initialFilter = {
    [IHealthConditionPageFilter.Conditions]: [],
    [IHealthConditionPageFilter.FeaturedConditions]: [],
};

export enum IHealthConditionPageConditionsFilter {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I",
    J = "J",
    K = "K",
    L = "L",
    M = "M",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    R = "R",
    S = "S",
    T = "T",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z",
}

export const healthConditionPageConditionsFilterOption = [
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.A}`,
        value: IHealthConditionPageConditionsFilter.A,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.B}`,
        value: IHealthConditionPageConditionsFilter.B,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.C}`,
        value: IHealthConditionPageConditionsFilter.C,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.D}`,
        value: IHealthConditionPageConditionsFilter.D,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.E}`,
        value: IHealthConditionPageConditionsFilter.E,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.F}`,
        value: IHealthConditionPageConditionsFilter.F,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.G}`,
        value: IHealthConditionPageConditionsFilter.G,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.H}`,
        value: IHealthConditionPageConditionsFilter.H,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.I}`,
        value: IHealthConditionPageConditionsFilter.I,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.J}`,
        value: IHealthConditionPageConditionsFilter.J,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.K}`,
        value: IHealthConditionPageConditionsFilter.K,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.L}`,
        value: IHealthConditionPageConditionsFilter.L,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.M}`,
        value: IHealthConditionPageConditionsFilter.M,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.N}`,
        value: IHealthConditionPageConditionsFilter.N,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.O}`,
        value: IHealthConditionPageConditionsFilter.O,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.P}`,
        value: IHealthConditionPageConditionsFilter.P,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.Q}`,
        value: IHealthConditionPageConditionsFilter.Q,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.R}`,
        value: IHealthConditionPageConditionsFilter.R,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.S}`,
        value: IHealthConditionPageConditionsFilter.S,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.T}`,
        value: IHealthConditionPageConditionsFilter.T,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.U}`,
        value: IHealthConditionPageConditionsFilter.U,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.V}`,
        value: IHealthConditionPageConditionsFilter.V,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.W}`,
        value: IHealthConditionPageConditionsFilter.W,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.X}`,
        value: IHealthConditionPageConditionsFilter.X,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.Y}`,
        value: IHealthConditionPageConditionsFilter.Y,
    },
    {
        text: `shared.filter.conditions.${IHealthConditionPageConditionsFilter.Z}`,
        value: IHealthConditionPageConditionsFilter.Z,
    },
];

export const healthConditionPageSampleConditionList: {
    [key in IHealthConditionPageConditionsFilter]: IOption<string>[];
} = {
    [IHealthConditionPageConditionsFilter.A]: [
        { text: "Achilles tendon", value: "Achilles tendon" },
        { text: "Acid reflux", value: "Acid reflux" },
        { text: "Acne", value: "Acne" },
        {
            text: "ADHD/ADD – Attention deficit (hyperactivity) disorder",
            value: "ADHD/ADD – Attention deficit (hyperactivity) disorder",
        },
        { text: "Allergies", value: "Allergies" },
        { text: "Alzheimer’s disease", value: "Alzheimer’s disease" },
        { text: "Anaemia", value: "Anaemia" },
        {
            text: "Anterior cruciate ligament (ACL)",
            value: "Anterior cruciate ligament (ACL)",
        },
        { text: "Anxiety", value: "Anxiety" },
        {
            text: "Autism spectrum disorder (ASD)",
            value: "Autism spectrum disorder (ASD)",
        },
    ],
    [IHealthConditionPageConditionsFilter.B]: [
        { text: "Back pain", value: "Back pain" },
        { text: "Bacterial vaginosis", value: "Bacterial vaginosis" },
        { text: "Bad breath", value: "Bad breath" },
        { text: "Bedwetting", value: "Bedwetting" },
        { text: "Bereavement", value: "Bereavement" },
        { text: "Bipolar disorder", value: "Bipolar disorder" },
        { text: "Blood pressure", value: "Blood pressure" },
        { text: "Blood pressure (high)", value: "Blood pressure (high)" },
        { text: "Brain health", value: "Brain health" },
        { text: "Bronchitis", value: "Bronchitis" },
        { text: "Bunion", value: "Bunion" },
        { text: "Burns and scalds", value: "Burns and scalds" },
    ],
    [IHealthConditionPageConditionsFilter.C]: [
        { text: "Candida overgrowth", value: "Candida overgrowth" },
        { text: "Celiac disease", value: "Celiac disease" },
        { text: "Cholesterol", value: "Cholesterol" },
        { text: "Chronic fatigue", value: "Chronic fatigue" },
        { text: "Chronic pain management", value: "Chronic pain management" },
        { text: "Clinical detox", value: "Clinical detox" },
        { text: "Colds and flu", value: "Colds and flu" },
        { text: "Cold sares", value: "Cold sares" },
        { text: "Colic", value: "Colic" },
        { text: "Concussion", value: "Concussion" },
        { text: "Constipation", value: "Constipation" },
        { text: "Contact dermatitis", value: "Contact dermatitis" },
        { text: "Coronavirus (Covid-2019)", value: "Coronavirus (Covid-2019)" },
        { text: "Cystitis", value: "Cystitis" },
    ],
    [IHealthConditionPageConditionsFilter.D]: [
        {
            text: "Delayed onset muscle soreness (DOMS)",
            value: "Delayed onset muscle soreness (DOMS)",
        },
        { text: "Dementia", value: "Dementia" },
        { text: "Depression", value: "Depression" },
        { text: "Detox", value: "Detox" },
        { text: "Diabetes type 1 & 2", value: "Diabetes type 1 & 2" },
        { text: "Diarrhoea", value: "Diarrhoea" },
        {
            text: "Diet: choosing the right diet for you",
            value: "Diet: choosing the right diet for you",
        },
        { text: "Digestion", value: "Digestion" },
        { text: "Dislocated Shoulder", value: "Dislocated Shoulder" },
        { text: "Domestic abuse", value: "Domestic abuse" },
    ],
    [IHealthConditionPageConditionsFilter.E]: [],
    [IHealthConditionPageConditionsFilter.F]: [],
    [IHealthConditionPageConditionsFilter.G]: [],
    [IHealthConditionPageConditionsFilter.H]: [],
    [IHealthConditionPageConditionsFilter.I]: [],
    [IHealthConditionPageConditionsFilter.J]: [],
    [IHealthConditionPageConditionsFilter.K]: [],
    [IHealthConditionPageConditionsFilter.L]: [],
    [IHealthConditionPageConditionsFilter.M]: [],
    [IHealthConditionPageConditionsFilter.N]: [],
    [IHealthConditionPageConditionsFilter.O]: [],
    [IHealthConditionPageConditionsFilter.P]: [],
    [IHealthConditionPageConditionsFilter.Q]: [],
    [IHealthConditionPageConditionsFilter.R]: [],
    [IHealthConditionPageConditionsFilter.S]: [],
    [IHealthConditionPageConditionsFilter.T]: [],
    [IHealthConditionPageConditionsFilter.U]: [],
    [IHealthConditionPageConditionsFilter.V]: [],
    [IHealthConditionPageConditionsFilter.W]: [],
    [IHealthConditionPageConditionsFilter.X]: [],
    [IHealthConditionPageConditionsFilter.Y]: [],
    [IHealthConditionPageConditionsFilter.Z]: [],
};

export const healthConditionPageFeaturedConditionList = [
    { text: "shared.filter.featuredConditions.allergies", value: "allergies" },
    { text: "shared.filter.featuredConditions.gutHealth", value: "gutHealth" },
    { text: "shared.filter.featuredConditions.immunity", value: "immunity" },
    { text: "shared.filter.featuredConditions.sleep", value: "sleep" },
    { text: "shared.filter.featuredConditions.stress", value: "stress" },
    {
        text: "shared.filter.featuredConditions.hormonalHealth",
        value: "hormonalHealth",
    },
    { text: "shared.filter.featuredConditions.pain", value: "pain" },
    {
        text: "shared.filter.featuredConditions.detoxAndWeightless",
        value: "detoxAndWeightless",
    },
];

export const healthConditionPageDescContent = [
    "healthCondition.desc.desc1",
    "healthCondition.desc.desc2",
    "healthCondition.desc.desc3",
];

export const healthConditionDetailsAccordionItems: IAccordion["content"] = [
    {
        header: "healthCondition.details.accordion1.header",
        details: [
            { desc: "healthCondition.details.accordion1.details.desc1" },
            { desc: "healthCondition.details.accordion1.details.desc2" },
            { desc: "healthCondition.details.accordion1.details.desc3" },
            { desc: "healthCondition.details.accordion1.details.desc4" },
            { desc: "healthCondition.details.accordion1.details.desc5" },
            { desc: "healthCondition.details.accordion1.details.desc6" },
            { desc: "healthCondition.details.accordion1.details.desc7" },
            { desc: "healthCondition.details.accordion1.details.desc8" },
        ],
    },
    {
        header: "healthCondition.details.accordion2.header",
        details: [
            { desc: "healthCondition.details.accordion2.details.desc1" },
            { desc: "healthCondition.details.accordion2.details.desc2" },
            { desc: "healthCondition.details.accordion2.details.desc3" },
            { desc: "healthCondition.details.accordion2.details.desc4" },
            { desc: "healthCondition.details.accordion2.details.desc5" },
            { desc: "healthCondition.details.accordion2.details.desc6" },
            { desc: "healthCondition.details.accordion2.details.desc7" },
            { desc: "healthCondition.details.accordion2.details.desc8" },
            { desc: "healthCondition.details.accordion2.details.desc9" },
            { desc: "healthCondition.details.accordion2.details.desc10" },
            { desc: "healthCondition.details.accordion2.details.desc11" },
            { desc: "healthCondition.details.accordion2.details.desc12" },
            { desc: "healthCondition.details.accordion2.details.desc13" },
        ],
    },
    {
        header: "healthCondition.details.accordion3.header",
        details: [
            { desc: "healthCondition.details.accordion3.details.desc1" },
            { desc: "healthCondition.details.accordion3.details.desc2" },
            { desc: "healthCondition.details.accordion3.details.desc3" },
        ],
    },
];

export const healthConditionPageArticleCardList = [
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "healthCondition.articlesAndVideos.card1.date",
        title: "healthCondition.articlesAndVideos.card1.title",
        desc: "healthCondition.articlesAndVideos.card1.desc",
    },
    {
        id: "2",
        imgUrl: Images.HomePageHealthHubCard2,
        date: "healthCondition.articlesAndVideos.card2.date",
        title: "healthCondition.articlesAndVideos.card2.title",
        desc: "healthCondition.articlesAndVideos.card2.desc",
    },
    {
        id: "1",
        imgUrl: Images.HomePageHealthHubCard1,
        date: "healthCondition.articlesAndVideos.card3.date",
        title: "healthCondition.articlesAndVideos.card3.title",
        desc: "healthCondition.articlesAndVideos.card3.desc",
    },
];
