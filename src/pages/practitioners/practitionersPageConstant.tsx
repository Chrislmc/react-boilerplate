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
        text: "practitioners.filterOption.allServices",
        value: IPractitionerType.ALL_SERVICES,
    },
    {
        text: "practitioners.filterOption.naturopathicMedicineAndNutrition",
        value: IPractitionerType.NATUROPATHIC_MEDICINE_AND_NUTRITION,
    },
    {
        text: "practitioners.filterOption.homeopathy",
        value: IPractitionerType.HOMEOPATHY,
    },
    {
        text: "practitioners.filterOption.psychologyAndCounselling",
        value: IPractitionerType.PSYCHOLOGY_AND_COUNSELLING,
    },
    {
        text: "practitioners.filterOption.osteopathyAndPhysiotherapy",
        value: IPractitionerType.OSTEOPATHY_AND_PHYSIOTHERAPY,
    },
    {
        text: "practitioners.filterOption.acupunctureAndTcm",
        value: IPractitionerType.ACUPUNCTURE_AND_TCM,
    },
    {
        text: "practitioners.filterOption.holisticTherapiesAndCoaching",
        value: IPractitionerType.HOLISTIC_THERAPIES_AND_COACHING,
    },
    {
        text: "practitioners.filterOption.gpAndLabTesting",
        value: IPractitionerType.GP_AND_LAB_TESTING,
    },
];
