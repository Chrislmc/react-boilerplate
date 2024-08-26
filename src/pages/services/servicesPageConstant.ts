import { Icons } from "@/assets/icons";
import { redirectRouteMap } from "@/utils/routes/route";

export const naturopathicAndFunctionalMedicineList = [
    {
        text: "services.naturopathicAndFunctionalMedicine.naturopathicMedicine",
        imgUrl: Icons.Naturopathy,
        redirectUrl: redirectRouteMap.naturopathy,
    },
    {
        text: "services.naturopathicAndFunctionalMedicine.homeopathy",
        imgUrl: Icons.Homeopathy,
        redirectUrl: redirectRouteMap.homepage,
    },
    {
        text: "services.naturopathicAndFunctionalMedicine.clinicalNutrition",
        imgUrl: Icons.ClinicalNutrition,
        redirectUrl: redirectRouteMap.homepage,
    },
    {
        text: "services.naturopathicAndFunctionalMedicine.functionalMedicine",
        imgUrl: Icons.FunctionalMedicine,
        redirectUrl: redirectRouteMap.homepage,
    },
];

export const psychologyCounsellingAndCoachingList = [
    {
        text: "services.psychologyCounsellingAndCoaching.clinicalPsychology",
        imgUrl: Icons.ClinicalPsychology,
    },
    {
        text: "services.psychologyCounsellingAndCoaching.psychotherapy",
        imgUrl: Icons.ClinicalPsychology,
    },
    {
        text: "services.psychologyCounsellingAndCoaching.counselling",
        imgUrl: Icons.Counselling,
    },
    {
        text: "services.psychologyCounsellingAndCoaching.coaching",
        imgUrl: Icons.Coaching,
    },
];

export const bodyworkAndEnergyMedicineList = [
    {
        text: "services.bodyworkAndEnergyMedicine.osteopathy",
        imgUrl: Icons.Osteopathy,
    },
    {
        text: "services.bodyworkAndEnergyMedicine.physiotherapy",
        imgUrl: Icons.Physiotherapy,
    },
    {
        text: "services.bodyworkAndEnergyMedicine.craniosacralTherapyAndEnergyTreatments",
        imgUrl: Icons.CraniosacralTherapyAndEnergyTreatments,
    },
    {
        text: "services.bodyworkAndEnergyMedicine.acupunctureAndTcm",
        imgUrl: Icons.AcupunctureAndTcm,
    },
];

export const LabsIvAndConventionalMedicineList = [
    {
        text: "services.labsIvAndConventionalMedicine.gpServices",
        imgUrl: Icons.GpServices,
    },
    {
        text: "services.labsIvAndConventionalMedicine.labTests",
        imgUrl: Icons.LabTestsColorless,
    },
    {
        text: "services.labsIvAndConventionalMedicine.ivTherapy",
        imgUrl: Icons.IvTherapy,
    },
];
