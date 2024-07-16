export enum RouteConstant {
    "homepage" = "",

    "practitioners" = "practitioners",
    "meetOurPractitioners" = "meetOurPractitioners",

    "services" = "services",
    "naturopathicAndFunctionalMedicine" = "naturopathicAndFunctionalMedicine",
    "psychologyCounsellingAndCoaching" = "psychologyCounsellingAndCoaching",
    "bodyworkAndEnergyMedicine" = "bodyworkAndEnergyMedicine",
    "labsIvAndConventionalMedicine" = "labsIvAndConventionalMedicine",

    "shop" = "shop",
    "imiSupplementOnline" = "imiSupplementOnline",

    "dispensary" = "dispensary",

    "healthHub" = "healthHub",

    "others" = "others",
    "insurance" = "insurance",

    "accountDetails" = "accountDetails",
    "shoppingCart" = "shoppingCart",
}

export const redirectRouteMap = {
    homepage: `/`,

    practitioners: `/${RouteConstant.practitioners}`,
    meetOurPractitioners: `/${RouteConstant.practitioners}/${RouteConstant.meetOurPractitioners}`,

    services: `/${RouteConstant.services}`,
    naturopathicAndFunctionalMedicine: `/${RouteConstant.services}/${RouteConstant.naturopathicAndFunctionalMedicine}`,
    psychologyCounsellingAndCoaching: `/${RouteConstant.services}/${RouteConstant.psychologyCounsellingAndCoaching}`,
    bodyworkAndEnergyMedicine: `/${RouteConstant.services}/${RouteConstant.bodyworkAndEnergyMedicine}`,
    labsIvAndConventionalMedicine: `/${RouteConstant.services}/${RouteConstant.labsIvAndConventionalMedicine}`,

    shop: `/${RouteConstant.shop}`,
    imiSupplementOnline: `/${RouteConstant.shop}/${RouteConstant.imiSupplementOnline}`,

    dispensary: `/${RouteConstant.dispensary}`,

    healthHub: `/${RouteConstant.healthHub}`,

    others: `/${RouteConstant.others}`,
    insurance: `/${RouteConstant.others}/${RouteConstant.insurance}`,

    accountDetails: `/${RouteConstant.accountDetails}`,
    shoppingCart: `/${RouteConstant.shoppingCart}`,
};
