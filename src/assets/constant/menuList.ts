export interface IMenuItem {
    desc: string;
    link: string;
    noPage?: boolean;
    subMenu?: IMenuItem[];
}

export const menuList: IMenuItem[] = [
    {
        desc: "practitioners",
        link: "/practitioners",
        noPage: true,
        subMenu: [
            { desc: "meetOurPractitioners", link: "/meet-our-practitioners" },
        ],
    },
    {
        desc: "services",
        link: "/services",
        subMenu: [
            {
                desc: "naturopathicAndFunctionalMedicine",
                link: "/naturopathic&functional-medicine",
            },
            {
                desc: "psychologyCounsellingAndCoaching",
                link: "/psychology-counselling&coaching",
            },
            {
                desc: "bodyworkAndEnergyMedicine",
                link: "/bodywork&energy-medicine",
            },
            {
                desc: "labsIvAndConventionalMedicine",
                link: "/labs-iv&conventional-medicine",
            },
        ],
    },
    {
        desc: "shop",
        link: "/shop",
        subMenu: [
            { desc: "imiSupplementOnline", link: "/imi-supplement-online" },
        ],
    },
    {
        desc: "dispensary",
        link: "/dispensary",
        noPage: true,
        subMenu: [{ desc: "Lorem ipsum", link: "/dispensary" }],
    },
    {
        desc: "healthHub",
        link: "/health-hub",
        noPage: true,
        subMenu: [{ desc: "Lorem ipsum", link: "/health-hub" }],
    },
    {
        desc: "others",
        link: "/others",
        noPage: true,
        subMenu: [{ desc: "insurance", link: "/insurance" }],
    },
];
