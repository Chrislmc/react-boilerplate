export const convertRemToPx = (px: number) => {
    return (
        px *
        parseInt(
            getComputedStyle(document.documentElement).fontSize.slice(0, -2),
        )
    );
};
