import { Images } from "@/assets/images";

export enum IPractitionerType {
    ALL_SERVICES = "allServices",
    NATUROPATHIC_MEDICINE_AND_NUTRITION = "naturopathicMedicineAndNutrition",
    HOMEOPATHY = "homeopathy",
    PSYCHOLOGY_AND_COUNSELLING = "psychologyAndCounselling",
    OSTEOPATHY_AND_PHYSIOTHERAPY = "osteopathyAndPhysiotherapy",
    ACUPUNCTURE_AND_TCM = "acupunctureAndTcm",
    HOLISTIC_THERAPIES_AND_COACHING = "holisticTherapiesAndCoaching",
    GP_AND_LAB_TESTING = "gpAndLabTesting",
}

export const practitionersPageFilterOption = [
    {
        text: `practitioners.filterOption.${IPractitionerType.ALL_SERVICES}`,
        value: IPractitionerType.ALL_SERVICES,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION}`,
        value: IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.HOMEOPATHY}`,
        value: IPractitionerType.HOMEOPATHY,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.PSYCHOLOGY_AND_COUNSELLING}`,
        value: IPractitionerType.PSYCHOLOGY_AND_COUNSELLING,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.OSTEOPATHY_AND_PHYSIOTHERAPY}`,
        value: IPractitionerType.OSTEOPATHY_AND_PHYSIOTHERAPY,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.ACUPUNCTURE_AND_TCM}`,
        value: IPractitionerType.ACUPUNCTURE_AND_TCM,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.HOLISTIC_THERAPIES_AND_COACHING}`,
        value: IPractitionerType.HOLISTIC_THERAPIES_AND_COACHING,
    },
    {
        text: `practitioners.filterOption.${IPractitionerType.GP_AND_LAB_TESTING}`,
        value: IPractitionerType.GP_AND_LAB_TESTING,
    },
];

export const practitionersPageCardList = [
    {
        id: "1",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "2",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.HOMEOPATHY],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "3",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.PSYCHOLOGY_AND_COUNSELLING],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "4",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.OSTEOPATHY_AND_PHYSIOTHERAPY],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "5",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.ACUPUNCTURE_AND_TCM],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "6",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.HOLISTIC_THERAPIES_AND_COACHING],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "7",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.GP_AND_LAB_TESTING],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "8",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "9",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "10",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION],
        button: {
            text: "practitioners.linkText",
        },
    },
    {
        id: "11",
        imgUrl: Images.GraemeBradshawPortrait,
        name: "Graeme Bradshaw",
        types: [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION],
        button: {
            text: "practitioners.linkText",
        },
    },
];
