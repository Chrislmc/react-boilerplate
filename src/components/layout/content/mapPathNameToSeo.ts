export interface ISeo {
    title: string;
    description: string;
}

export const defaultSeo = {
    title: "React Boilerplate",
    description: "Showcasing simple usage of most commonly used component",
};

export const mapPathNameToSeo: { [key in string]: ISeo } = {
    "/": {
        title: "Home - Chris Lai",
        description: "Welcome to Chris Lai's party",
    },
};
