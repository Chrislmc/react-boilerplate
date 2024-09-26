import { Tab } from "@/components/atoms/tab";
import { ContainerX } from "@/components/layout/containerX";
import { i18nHelper } from "@/utils/i18n-helper";
import { useRef, useState } from "react";
import { IMySkillsTab, mySkills, skillTabOptions } from "./homePageConstant";

export const HomePageAboutSection = () => {
    const skillContentContainer = useRef<HTMLDivElement>(null);
    const t = i18nHelper("home-page");

    const [activeTab, setActiveTab] = useState<IMySkillsTab>(
        skillTabOptions[0].value
    );
    const [inTransition, setInTransition] = useState(false);

    const onTabClick = (value: IMySkillsTab) => {
        setInTransition(true);
        setTimeout(() => {
            setActiveTab(value);
            setInTransition(false);
        }, 500);
    };

    return (
        <ContainerX>
            <div className="subsection about-me-container">
                <h2 className="header">{t("about-me.header")}</h2>
                <div className="desc-container">
                    <p className="desc">{t("about-me.desc")}</p>
                </div>
            </div>
            <div className="subsection my-skills-container">
                <h2 className="header">{t("about-me.my-skills.header")}</h2>
                <Tab<IMySkillsTab>
                    options={skillTabOptions.map((tab) => ({
                        ...tab,
                        text: t(tab.text),
                    }))}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    onTabClick={onTabClick}
                    disabled={inTransition}
                />

                <div
                    className={`skill-content-container ${
                        inTransition ? "mod__in-transition" : ""
                    }`}
                    ref={skillContentContainer}
                >
                    {mySkills[activeTab].map((skill) => (
                        <div className="skill-container">
                            {skill?.imageUrl && (
                                <div className="skill-logo-container">
                                    <img src={skill.imageUrl} />
                                </div>
                            )}
                            <p className="desc">{t(skill.text)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerX>
    );
};
