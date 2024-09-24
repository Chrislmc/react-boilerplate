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

    const DisplayComponent = component?.component;

    return (
        <div className="content-section">
            <Label text={component?.text || "Select a component to try"} />

            {DisplayComponent && (
                <div className="component-container">
                    <DisplayComponent {...inputProps} />
                </div>
            )}

            {component?.controls?.length && (
                <div className="controls-container">
                    <Label text="Controls" />
                    <div className="controls-grid">
                        {component?.controls.map((control) => {
                            const MappedComponent =
                                mapControlTypeToComponent[control.type];

                            return (
                                <div
                                    key={control.id}
                                    className="control-input-container"
                                >
                                    <Label type="input" text={control.id} />
                                    <MappedComponent
                                        {...controlState[control.id]}
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        setValue={(e: any) =>
                                            setControlState({
                                                ...controlState,
                                                [control.id]: {
                                                    ...controlState[control.id],
                                                    value: e,
                                                },
                                            })
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
