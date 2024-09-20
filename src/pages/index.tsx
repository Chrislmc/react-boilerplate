import { SectionLabel } from "@/components/atoms/sectionLabel";
import { DescSection } from "@/components/descSection";
import { Section } from "@/components/section";
import { useEffect, useState } from "react";
import "./_components-page.scss";
import { componentsHierarchy, IComponent } from "./componentsPageConstant";

export const ComponentsPage = () => {
    const [activeComponentId, setActiveComponentId] = useState<
        string | undefined
    >(undefined);

    const activeComponent = componentsHierarchy
        .map((level) => level.children)
        .flat()
        .find((component) => component?.id === activeComponentId);

    useEffect(() => {
        const siteContentContainer =
            document.getElementsByClassName("site-content")?.[0];

        if (siteContentContainer) {
            (siteContentContainer as HTMLDivElement).style.overflowY = "hidden";
        }
    }, []);

    const onComponentLabelClick = (component: IComponent) => {
        if (component.id === activeComponentId) {
            return;
        } else {
            setActiveComponentId(component.id);
        }
    };

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
                                            title={level.text}
                                        >
                                            <p className="subsection-label">
                                                {level.text}
                                            </p>
                                        </button>

                                        <div className="subsection-content-container">
                                            {level.children?.map(
                                                (component) => (
                                                    <button
                                                        className={`label-button ${
                                                            component.id ===
                                                            activeComponentId
                                                                ? "mod__active"
                                                                : ""
                                                        }`}
                                                        key={component.id}
                                                        title={level.text}
                                                        onClick={() =>
                                                            onComponentLabelClick(
                                                                component
                                                            )
                                                        }
                                                    >
                                                        <p className="component-label">
                                                            {component.text}
                                                        </p>
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="content-section">
                                <SectionLabel
                                    text={
                                        activeComponent?.text ||
                                        "Select a component to try"
                                    }
                                />
                                {activeComponent && (
                                    <div className="component-container">
                                        <div className="component-wrapper">
                                            {activeComponent?.component}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    }
                />
            </Section>
        </div>
    );
};
