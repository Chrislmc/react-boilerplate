import { Icons } from "@/assets/icons";
import { AccountIconComponent } from "@/assets/icons/account.component";
import { CartIconComponent } from "@/assets/icons/cart.component";
import { SearchIconComponent } from "@/assets/icons/search.component";
import { RouteConstant, redirectRouteMap } from "@/utils/routes/route";

export const headerMenuItems = [
    {
        desc: "header.menu.practitioners",
        value: RouteConstant.practitioners,
        link: redirectRouteMap.practitioners,
    },
    {
        desc: "header.menu.services",
        value: RouteConstant.services,
        link: redirectRouteMap.services,
    },
    {
        desc: "header.menu.shop",
        value: RouteConstant.shop,
        link: redirectRouteMap.shop,
    },
    {
        desc: "header.menu.dispensary",
        value: RouteConstant.dispensary,
        link: redirectRouteMap.dispensary,
    },
    {
        desc: "header.menu.healthHub",
        value: RouteConstant.healthHub,
        link: redirectRouteMap.healthHub,
    },
];

export const headerButtons = [
    {
        iconComponent: AccountIconComponent,
        link: redirectRouteMap.accountDetails,
    },
    {
        iconComponent: SearchIconComponent,
    },
    {
        iconComponent: CartIconComponent,
        link: redirectRouteMap.shoppingCart,
    },
];

export const headerRibbonItems = [
    {
        imgUrl: Icons.IconConsultation,
        link: redirectRouteMap.homepage,
        desc: "header.ribbon.consultation",
    },
    {
        imgUrl: Icons.IconLabTests,
        link: redirectRouteMap.homepage,
        desc: "header.ribbon.labTests",
    },
    {
        imgUrl: Icons.IconShop,
        link: redirectRouteMap.shop,
        desc: "header.ribbon.shop",
    },
    {
        imgUrl: Icons.IconDispensary,
        link: redirectRouteMap.dispensary,
        desc: "header.ribbon.dispensary",
    },
];
