export enum RouteConstant {
    "homepage" = "",

    "practitioners" = "practitioners",
    "meetOurPractitioners" = "meet-our-practitioners",

    "services" = "services",
    "naturopathicAndFunctionalMedicine" = "naturopathic-and-functional-medicine",
    "psychologyCounsellingAndCoaching" = "psychology-counselling-and-coaching",
    "bodyworkAndEnergyMedicine" = "bodywork-and-energy-medicine",
    "labsIvAndConventionalMedicine" = "labs-iv-and-conventional-medicine",

    "shop" = "shop",
    "imiSupplementOnline" = "imi-supplement-online",

    "dispensary" = "dispensary",

    "healthHub" = "health-hub",

    "others" = "others",
    "insurance" = "insurance",

    "accountDetails" = "account-details",
    "shoppingCart" = "shopping-cart",
}

export const dynamicRouteConstant = {
    meetOurPractitioners: ":practitionerId",
};

export const redirectRouteMap = {
    homepage: `/`,

    practitioners: `/${RouteConstant.practitioners}`,
    meetOurPractitioners: `/${RouteConstant.practitioners}/${RouteConstant.meetOurPractitioners}/${dynamicRouteConstant.meetOurPractitioners}`,

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
