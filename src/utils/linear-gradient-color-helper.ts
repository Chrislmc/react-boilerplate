type Props = ({
    sourceColorRgb,
    targetColorRgb,
    ratio,
}: {
    sourceColorRgb: number[];
    targetColorRgb: number[];
    ratio: number;
}) => {
    currentColorRgb: number[];
    currentColor: string;
};

export const linearGradientColorHelper: Props = ({
    sourceColorRgb,
    targetColorRgb,
    ratio,
}) => {
    const currentColorRgb = targetColorRgb.map(
        (color, i) => (sourceColorRgb[i] - color) * (1 - ratio) + color
    );
    const currentColor = `rgb(${currentColorRgb[0]},${currentColorRgb[1]},${currentColorRgb[2]})`;

    return {
        currentColorRgb,
        currentColor,
    };
};
