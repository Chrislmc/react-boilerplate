export interface ISeo {
    title: string;
    description: string;
}

export const defaultSeo = {
    title: "IMI: Quality Supplements Online - Hong Kong & Asia",
    description:
        "Showcasing the best clinical grade supplements in Hong Kong, IMI sources the purest and most potent supplements from around the globe, tried and trusted by doctors and clients alike.",
};

export const mapPathNameToSeo: { [key in string]: ISeo } = {
    "/": {
        title: "Home - IMI",
        description: "IMI shop",
    },
};
