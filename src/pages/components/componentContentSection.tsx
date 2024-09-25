import { Label } from "@/components/atoms/label";
import { useEffect, useState } from "react";
import {
    IComponent,
    mapControlTypeToComponent,
} from "./componentsPageConstant";

interface Props {
    component?: IComponent;
}

export const ComponentContentSection: React.FC<Props> = ({ component }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [controlState, setControlState] = useState<{ [key in string]: any }>(
        {}
    );

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsedControlState: { [key in string]: any } = {};
        component?.controls?.forEach(
            (control) =>
                (parsedControlState[control.id] = {
                    value: control.initialValue,
                    ...control?.props,
                })
        );

        setControlState(parsedControlState);
    }, [component?.controls]);

    const inputProps = Object.fromEntries(
        Object.entries(controlState).map(([key, value]) => [key, value?.value])
    );
    console.log("inputProps", inputProps);
    const DisplayComponent = component?.component;

    return (
        <div className="content-section">
            <Label text={component?.text || "Select a component to try"} />

            {DisplayComponent && (
                <div className="component-container">
                    <DisplayComponent {...inputProps} />
                </div>
            )}

            {component?.oldComponent && (
                <div className="component-container">
                    {component.oldComponent}
                </div>
            )}

            {component?.controls?.length && (
                <div className="controls-container">
                    <Label text="Controls" />
                    <div className="controls-grid">
                        {component?.controls.map((control) => {
                            const MappedComponent =
                                mapControlTypeToComponent[control.type];

                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            const onChange = (e: any) => {
                                setControlState({
                                    ...controlState,
                                    [control.id]: {
                                        ...controlState[control.id],
                                        value:
                                            e &&
                                            typeof e === "object" &&
                                            "value" in e
                                                ? e.value
                                                : e,
                                    },
                                });
                            };

                            return (
                                <div
                                    key={control.id}
                                    className="control-input-container"
                                >
                                    <Label type="input" text={control.id} />
                                    {controlState[control.id] !== undefined && (
                                        <MappedComponent
                                            {...controlState[control.id]}
                                            onChange={onChange}
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
