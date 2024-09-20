import { DescSection } from "@/components/descSection";
import { Section } from "@/components/section";
import { useEffect } from "react";
import "./_components-page.scss";
import { componentsHierarchy } from "./componentsPageConstant";

export const ComponentsPage = () => {
    useEffect(() => {
        const siteContentContainer =
            document.getElementsByClassName("site-content")?.[0];

        if (siteContentContainer) {
            (siteContentContainer as HTMLDivElement).style.overflowY = "hidden";
        }
    }, []);

    return (
        <div id="components-page">
            <Section className="components-page-desc-section">
                <DescSection
                    header="Components showcase page"
                    desc={["Try out all the components!"]}
                    customBottomComponent={
                        <div className="custom-bottom-component">
                            <div className="scroll-section">
                                {componentsHierarchy.map((level) => (
                                    <div
                                        className="subsection-container"
                                        key={level.id}
                                    >
                                        <button
                                            className="label-button"
                                            disabled
                                        >
                                            <p className="subsection-label">
                                                {level.text}
                                            </p>
                                        </button>

                                        <div className="subsection-content-container">
                                            {level.children.map((component) => (
                                                <button
                                                    className="label-button"
                                                    key={component.id}
                                                >
                                                    <p className="component-label">
                                                        {component.text}
                                                    </p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="content-section"></div>
                        </div>
                    }
                />
            </Section>
        </div>
    );
};
