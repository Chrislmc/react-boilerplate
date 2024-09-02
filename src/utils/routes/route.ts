export enum RouteConstant {
    "homepage" = "",

    "practitioners" = "practitioners",
    "meetOurPractitioners" = "meet-our-practitioners",

    "services" = "services",
    "naturopathy" = "naturopathy",
    "psychologyCounsellingAndCoaching" = "psychology-counselling-and-coaching",
    "bodyworkAndEnergyMedicine" = "bodywork-and-energy-medicine",
    "labsIvAndConventionalMedicine" = "labs-iv-and-conventional-medicine",

    "shop" = "shop",
    "products" = "products",
    "productDetail" = "product",
    "imiSupplementOnline" = "imi-supplement-online",

    "dispensary" = "dispensary",

    "healthHub" = "health-hub",
    "article" = "article",

    "labTest" = "lab-test",

    "others" = "others",
    "healthCondition" = "health-condition",
    "insurance" = "insurance",

    "accountDetails" = "account-details",
    "shoppingCart" = "shopping-cart",
}

export const dynamicRouteConstant = {
    meetOurPractitioners: ":practitionerId",
    productDetail: ":productId",
    article: ":articleId",
};

export const redirectRouteMap = {
    homepage: `/`,

    practitioners: `/${RouteConstant.practitioners}`,
    meetOurPractitioners: `/${RouteConstant.practitioners}/${RouteConstant.meetOurPractitioners}/${dynamicRouteConstant.meetOurPractitioners}`,

    services: `/${RouteConstant.services}`,
    naturopathy: `/${RouteConstant.services}/${RouteConstant.naturopathy}`,
    psychologyCounsellingAndCoaching: `/${RouteConstant.services}/${RouteConstant.psychologyCounsellingAndCoaching}`,
    bodyworkAndEnergyMedicine: `/${RouteConstant.services}/${RouteConstant.bodyworkAndEnergyMedicine}`,
    labsIvAndConventionalMedicine: `/${RouteConstant.services}/${RouteConstant.labsIvAndConventionalMedicine}`,

    shop: `/${RouteConstant.shop}`,
    products: `/${RouteConstant.shop}/${RouteConstant.products}`,
    productDetail: `/${RouteConstant.shop}/${RouteConstant.productDetail}/${dynamicRouteConstant.productDetail}`,
    imiSupplementOnline: `/${RouteConstant.shop}/${RouteConstant.imiSupplementOnline}`,

    dispensary: `/${RouteConstant.dispensary}`,

    healthHub: `/${RouteConstant.healthHub}`,
    article: `/${RouteConstant.healthHub}/${RouteConstant.article}/${dynamicRouteConstant.article}`,

    labTest: `/${RouteConstant.labTest}`,

    others: `/${RouteConstant.others}`,
    healthCondition: `/${RouteConstant.others}/${RouteConstant.healthCondition}`,
    insurance: `/${RouteConstant.others}/${RouteConstant.insurance}`,

    accountDetails: `/${RouteConstant.accountDetails}`,
    shoppingCart: `/${RouteConstant.shoppingCart}`,
};

export const breadcrumbRouteDescMap = {
    [RouteConstant.homepage]: `Home`,

    [RouteConstant.practitioners]: "Practitioners",
    [RouteConstant.meetOurPractitioners]: "Meet Our Practitioners",

    [RouteConstant.services]: "Services",
    [RouteConstant.naturopathy]: "Naturopathy",
    [RouteConstant.psychologyCounsellingAndCoaching]:
        "Psychology Counselling AndCoaching",
    [RouteConstant.bodyworkAndEnergyMedicine]: "Bodywork And Energy Medicine",
    [RouteConstant.labsIvAndConventionalMedicine]:
        "Labs Iv And Conventional Medicine",

    [RouteConstant.shop]: "Shop",
    [RouteConstant.products]: "All products",
    [RouteConstant.productDetail]: "Product detail",
    [RouteConstant.imiSupplementOnline]: "Imi Supplement Online",

    [RouteConstant.dispensary]: "Dispensary",

    [RouteConstant.healthHub]: "Health Hub",
    [RouteConstant.article]: "Article",

    [RouteConstant.labTest]: "Lab Test",

    [RouteConstant.others]: "Others",
    [RouteConstant.healthCondition]: "Health Condition",
    [RouteConstant.insurance]: "Insurance",

    [RouteConstant.accountDetails]: "Account Details",
    [RouteConstant.shoppingCart]: "Shopping Cart",
};
