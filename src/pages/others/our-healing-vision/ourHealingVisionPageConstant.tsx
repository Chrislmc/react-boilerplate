export enum IOurHealingVision {
    MIND = "mind",
    EMOTIONS = "emotions",
    COMMUNITY = "community",
    ENVIRONMENT = "environment",
    BODY = "body",
    ENERGY = "energy",
    SPIRIT = "spirit",
    OVERVIEW = "overview",
    INACTIVE = "inactive",
}

export const ourHealingVisionColor: { [key in IOurHealingVision]: string } = {
    [IOurHealingVision.MIND]: "#065280",
    [IOurHealingVision.EMOTIONS]: "#35B2E3",
    [IOurHealingVision.COMMUNITY]: "#2DAFA4",
    [IOurHealingVision.ENVIRONMENT]: "#01929F",
    [IOurHealingVision.BODY]: "#995C99",
    [IOurHealingVision.ENERGY]: "#7F407F",
    [IOurHealingVision.SPIRIT]: "#8A00CC",
    [IOurHealingVision.OVERVIEW]: "#transparent",
    [IOurHealingVision.INACTIVE]: "#DBDBDB",
};

export const ourHealingVisionTabList = [
    {
        id: IOurHealingVision.OVERVIEW,
        label: "ourHealingVision.tabs.overview.label",
        descs: [
            "ourHealingVision.tabs.overview.desc1",
            "ourHealingVision.tabs.overview.desc2",
            "ourHealingVision.tabs.overview.desc3",
        ],
    },
    {
        id: IOurHealingVision.MIND,
        label: "ourHealingVision.tabs.mind.label",
        header: "ourHealingVision.tabs.mind.header",
        descs: [
            "ourHealingVision.tabs.mind.desc1",
            "ourHealingVision.tabs.mind.desc2",
            "ourHealingVision.tabs.mind.desc3",
        ],
    },
    {
        id: IOurHealingVision.EMOTIONS,
        label: "ourHealingVision.tabs.emotions.label",
        header: "ourHealingVision.tabs.emotions.header",
        descs: [
            "ourHealingVision.tabs.emotions.desc1",
            "ourHealingVision.tabs.emotions.desc2",
            "ourHealingVision.tabs.emotions.desc3",
            "ourHealingVision.tabs.emotions.desc4",
        ],
    },
    {
        id: IOurHealingVision.COMMUNITY,
        label: "ourHealingVision.tabs.community.label",
        header: "ourHealingVision.tabs.community.header",
        descs: [
            "ourHealingVision.tabs.community.desc1",
            "ourHealingVision.tabs.community.desc2",
            "ourHealingVision.tabs.community.desc3",
            "ourHealingVision.tabs.community.desc4",
        ],
    },
    {
        id: IOurHealingVision.ENVIRONMENT,
        label: "ourHealingVision.tabs.environment.label",
        header: "ourHealingVision.tabs.environment.header",
        descs: [
            "ourHealingVision.tabs.environment.desc1",
            "ourHealingVision.tabs.environment.desc2",
            "ourHealingVision.tabs.environment.desc3",
            "ourHealingVision.tabs.environment.desc4",
        ],
    },
    {
        id: IOurHealingVision.BODY,
        label: "ourHealingVision.tabs.body.label",
        header: "ourHealingVision.tabs.body.header",
        descs: [
            "ourHealingVision.tabs.body.desc1",
            "ourHealingVision.tabs.body.desc2",
            "ourHealingVision.tabs.body.desc3",
            "ourHealingVision.tabs.body.desc4",
        ],
    },
    {
        id: IOurHealingVision.ENERGY,
        label: "ourHealingVision.tabs.energy.label",
        header: "ourHealingVision.tabs.energy.header",
        descs: [
            "ourHealingVision.tabs.energy.desc1",
            "ourHealingVision.tabs.energy.desc2",
            "ourHealingVision.tabs.energy.desc3",
        ],
    },
    {
        id: IOurHealingVision.SPIRIT,
        label: "ourHealingVision.tabs.spirit.label",
        header: "ourHealingVision.tabs.spirit.header",
        descs: [
            "ourHealingVision.tabs.spirit.desc1",
            "ourHealingVision.tabs.spirit.desc2",
            "ourHealingVision.tabs.spirit.desc3",
        ],
    },
];
