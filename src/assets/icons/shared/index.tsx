import { SearchIconComponent } from "./search.component";

export const sharedIcons = { SearchIconComponent };

export interface IBaseSharedIconProps {
    primaryColor?: string;
}

export const sharedIconsOptions = Object.entries(sharedIcons).map(
    ([key, value]) => {
        const Component = value;
        return { text: key, value: <Component /> };
    }
);
