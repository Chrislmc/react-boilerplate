import { LinkedinIconComponent } from "@/assets/icons/shared/linkedin.component";
import { LocationIconComponent } from "@/assets/icons/shared/location.component";
import { MailIconComponent } from "@/assets/icons/shared/mail.component";
import { PhoneIconComponent } from "@/assets/icons/shared/phone.component";
import { Images } from "@/assets/images";
import { IButtonProps } from "@/components/atoms/button";

export const contactMethods = [
    {
        redirectUrl: "https://www.linkedin.com/in/chris-lai-7a5b79119/",
        icon: LinkedinIconComponent,
    },
    {
        redirectUrl: "mailto:chrislmc25@gmail.com",
        icon: MailIconComponent,
    },
];

export enum IMySkillsTab {
    FRONTEND = "frontend",
    POPULAR_FRONTEND_LIBS = "popularFrontendLibs",
    BACKEND = "backend",
    LANGUAGES = "languages",
    TESTING_LIBS = "testingLibs",
    OTHER_TOOLS = "otherTools",
}

export const skillTabOptions = [
    {
        text: "about-me.my-skills.tab.frontend",
        value: IMySkillsTab.FRONTEND,
    },
    {
        text: "about-me.my-skills.tab.popularFrontendLibs",
        value: IMySkillsTab.POPULAR_FRONTEND_LIBS,
    },
    {
        text: "about-me.my-skills.tab.backend",
        value: IMySkillsTab.BACKEND,
    },
    {
        text: "about-me.my-skills.tab.languages",
        value: IMySkillsTab.LANGUAGES,
    },
    {
        text: "about-me.my-skills.tab.testingLibs",
        value: IMySkillsTab.TESTING_LIBS,
    },
    {
        text: "about-me.my-skills.tab.otherTools",
        value: IMySkillsTab.OTHER_TOOLS,
    },
];

export const mySkills = {
    [IMySkillsTab.FRONTEND]: [
        {
            text: "about-me.my-skills.html",
            imageUrl: Images.Html,
        },
        { text: "about-me.my-skills.typescript", imageUrl: Images.Typescript },
        { text: "about-me.my-skills.sass", imageUrl: Images.Sass },
        { text: "about-me.my-skills.react", imageUrl: Images.React },
        {
            text: "about-me.my-skills.reactNative",
            imageUrl: Images.ReactNative,
        },
        { text: "about-me.my-skills.nextjs", imageUrl: Images.Nextjs },
    ],
    [IMySkillsTab.POPULAR_FRONTEND_LIBS]: [
        { text: "about-me.my-skills.reduxThunk", imageUrl: Images.ReduxThunk },
        { text: "about-me.my-skills.reduxSaga", imageUrl: Images.ReduxSaga },
        { text: "about-me.my-skills.bootstrap", imageUrl: Images.Bootstrap },
        { text: "about-me.my-skills.materialUi", imageUrl: Images.MaterialUi },
        { text: "about-me.my-skills.antDesign", imageUrl: Images.Antd },
        { text: "about-me.my-skills.tailwind", imageUrl: Images.Tailwind },
    ],
    [IMySkillsTab.BACKEND]: [
        { text: "about-me.my-skills.nodejs", imageUrl: Images.Nodejs },
        { text: "about-me.my-skills.mySql", imageUrl: Images.Mysql },
        { text: "about-me.my-skills.postgreSql", imageUrl: Images.Postgresql },
        { text: "about-me.my-skills.firebase", imageUrl: Images.Firebase },
        { text: "about-me.my-skills.graphql", imageUrl: Images.Graphql },
        { text: "about-me.my-skills.dotnetCore", imageUrl: Images.DotnetCore },
        { text: "about-me.my-skills.drupal", imageUrl: Images.Drupal },
        { text: "about-me.my-skills.websocket" },
        { text: "about-me.my-skills.soap" },
        { text: "about-me.my-skills.ftp" },
    ],
    [IMySkillsTab.LANGUAGES]: [
        { text: "about-me.my-skills.javascript", imageUrl: Images.Javascript },
        { text: "about-me.my-skills.cSharp", imageUrl: Images.Csharp },
        { text: "about-me.my-skills.php", imageUrl: Images.Php },
    ],
    [IMySkillsTab.TESTING_LIBS]: [
        { text: "about-me.my-skills.jest", imageUrl: Images.Jest },
        { text: "about-me.my-skills.cypress", imageUrl: Images.Cypress },
    ],
    [IMySkillsTab.OTHER_TOOLS]: [
        { text: "about-me.my-skills.docker", imageUrl: Images.Docker },
        { text: "about-me.my-skills.kubernetes", imageUrl: Images.Kubernetes },
        { text: "about-me.my-skills.aws", imageUrl: Images.Aws },
        { text: "about-me.my-skills.azure", imageUrl: Images.Azure },
        { text: "about-me.my-skills.cloudflare", imageUrl: Images.Cloudflare },
        {
            text: "about-me.my-skills.digitalOcean",
            imageUrl: Images.DigitalOcean,
        },
        { text: "about-me.my-skills.netlify", imageUrl: Images.Netlify },
        { text: "about-me.my-skills.git", imageUrl: Images.Git },
        { text: "about-me.my-skills.nx", imageUrl: Images.Nx },
    ],
};

export const portfolios: {
    id: string;
    header: string;
    descs: string[];
    imageUrl: string[];
    button?: IButtonProps;
}[] = [
    {
        id: "kids4kids",
        header: "about-me.portfolio.kids4kids.header",
        descs: ["about-me.portfolio.kids4kids.desc"],
        imageUrl: [Images.Kids4kids1, Images.Kids4kids2],
        button: {
            text: "about-me.portfolio.seeMore",
        },
    },
    {
        id: "sunshine",
        header: "about-me.portfolio.sunshine.header",
        descs: ["about-me.portfolio.sunshine.desc"],
        imageUrl: [Images.Sunshine1, Images.Sunshine2],
        button: {
            text: "about-me.portfolio.seeMore",
        },
    },
    {
        id: "valuePartnerInvest",
        header: "about-me.portfolio.valuePartnerInvest.header",
        descs: ["about-me.portfolio.valuePartnerInvest.desc"],
        imageUrl: [Images.ValuePartnerInvest1, Images.ValuePartnerInvest2],
    },
    {
        id: "imi",
        header: "about-me.portfolio.imi.header",
        descs: ["about-me.portfolio.imi.desc"],
        imageUrl: [Images.Imi1, Images.Imi2],
    },
    {
        id: "systemDesign",
        header: "about-me.portfolio.systemDesign.header",
        descs: ["about-me.portfolio.systemDesign.desc"],
        imageUrl: [Images.Hkgc1, Images.Hkgc2],
    },
    {
        id: "selfHosting",
        header: "about-me.portfolio.selfHosting.header",
        descs: ["about-me.portfolio.selfHosting.desc"],
        imageUrl: [Images.SelfHosting1, Images.SelfHosting2],
    },
];

export const contactMe = [
    {
        id: "mail",
        icon: MailIconComponent,
        text: "contact-me.mail",
        redirectUrl: "mailto:chrislmc25@gmail.com",
    },
    {
        id: "phone",
        icon: PhoneIconComponent,
        text: "contact-me.phone",
        redirectUrl: "tel:85266055503",
    },
    {
        id: "location",
        icon: LocationIconComponent,
        text: "contact-me.location",
    },
];
