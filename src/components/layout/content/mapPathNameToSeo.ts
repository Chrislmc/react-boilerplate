export interface ISeo {
    title: string;
    description: string;
}

export const mapPathNameToSeo: { [key in string]: ISeo } = {
    "/": {
        title: "Home - IMI",
        description: "IMI shop",
    },
};
