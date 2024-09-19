import { IPractitionerType } from "./practitionersPageConstant";

export const practitionerTypeHelper = (types: IPractitionerType[]) => {
    return types.map((type) => mapPractitionerTypeToText[type]).join(", ");
};

const mapPractitionerTypeToText = {
    [IPractitionerType.ALL_SERVICES]: "All Services",
    [IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION]:
        "Naturopathic Medicine & Nutrition",
    [IPractitionerType.HOMEOPATHY]: "Homeopathy",
    [IPractitionerType.PSYCHOLOGY_AND_COUNSELLING]: "Psychology & Counselling",
    [IPractitionerType.OSTEOPATHY_AND_PHYSIOTHERAPY]:
        "Osteopathy & Physiotherapy",
    [IPractitionerType.ACUPUNCTURE_AND_TCM]: "Acupuncture & TCM",
    [IPractitionerType.HOLISTIC_THERAPIES_AND_COACHING]:
        "Holistic Therapies & Coaching",
    [IPractitionerType.GP_AND_LAB_TESTING]: "GP & Lab Testing",
};
