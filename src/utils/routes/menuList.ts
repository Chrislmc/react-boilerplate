import { redirectRouteMap } from "./route";

export interface IMenuItem {
    desc: string;
    link: string;
    noPage?: boolean;
    subMenu?: IMenuItem[];
}

export const menuList: IMenuItem[] = [
    {
        desc: "practitioners",
        link: redirectRouteMap.practitioners,
        noPage: true,
        subMenu: [
            {
                desc: "meetOurPractitioners",
                link: redirectRouteMap.meetOurPractitioners,
            },
        ],
    },
    {
        desc: "services",
        link: redirectRouteMap.services,
        subMenu: [
            {
                desc: "naturopathicAndFunctionalMedicine",
                link: redirectRouteMap.naturopathy,
            },
            {
                desc: "psychologyCounsellingAndCoaching",
                link: redirectRouteMap.psychologyCounsellingAndCoaching,
            },
            {
                desc: "bodyworkAndEnergyMedicine",
                link: redirectRouteMap.bodyworkAndEnergyMedicine,
            },
            {
                desc: "labsIvAndConventionalMedicine",
                link: redirectRouteMap.labsIvAndConventionalMedicine,
            },
        ],
    },
    {
        desc: "shop",
        link: redirectRouteMap.shop,
        subMenu: [
            {
                desc: "imiSupplementOnline",
                link: redirectRouteMap.imiSupplementOnline,
            },
        ],
    },
    {
        desc: "dispensary",
        link: redirectRouteMap.dispensary,
        noPage: true,
        subMenu: [{ desc: "Lorem ipsum", link: redirectRouteMap.homepage }],
    },
    {
        desc: "healthHub",
        link: redirectRouteMap.healthHub,
        noPage: true,
        subMenu: [{ desc: "Lorem ipsum", link: redirectRouteMap.homepage }],
    },
    {
        desc: "others",
        link: redirectRouteMap.others,
        noPage: true,
        subMenu: [{ desc: "insurance", link: redirectRouteMap.insurance }],
    },
];
