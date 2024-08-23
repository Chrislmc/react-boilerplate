import { Icons } from "@/assets/icons";
import { IImiAccordion } from "@/components/imiAccordion";
import { redirectRouteMap } from "@/utils/routes/route";

export const naturopathyDescRibbonItems = [
    {
        imgUrl: Icons.Testing,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.testing",
    },
    {
        imgUrl: Icons.HerbalMedicine,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.herbalMedicine",
    },
    {
        imgUrl: Icons.HerbalMedicine,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.nutrition",
    },
    {
        imgUrl: Icons.Supplements,
        link: redirectRouteMap.homepage,
        desc: "naturopathicMedicine.desc.ribbon.supplements",
    },
];

export const naturopathyDetailsAccordionItems: IImiAccordion["content"] = [
    {
        header: "naturopathicMedicine.details.accordion1.header",
        details: [
            "naturopathicMedicine.details.accordion1.details.desc1",
            "naturopathicMedicine.details.accordion1.details.desc2",
            "naturopathicMedicine.details.accordion1.details.desc3",
            "naturopathicMedicine.details.accordion1.details.desc4",
        ],
    },
    {
        header: "naturopathicMedicine.details.accordion2.header",
        details: [
            "naturopathicMedicine.details.accordion2.details.desc1",
            "naturopathicMedicine.details.accordion2.details.desc2",
        ],
    },
    {
        header: "naturopathicMedicine.details.accordion3.header",
        details: [
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc1Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc1Suffix",
            },
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc2Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc2Suffix",
            },
            {
                boldText:
                    "naturopathicMedicine.details.accordion3.details.desc3Bold",
                suffix: "naturopathicMedicine.details.accordion3.details.desc3Suffix",
            },
        ],
    },
];
