import {
    RouteConstant,
    breadcrumbRouteDescMap,
    redirectRouteMap,
} from "@/utils/routes/route";
import { useLocation, useNavigate } from "react-router-dom";
import "./_breadcrumb.scss";
import { ContainerX } from "@/components/layout/containerX";

interface Props {
    customRouteDesc?: string;
}

export const Breadcrumb: React.FC<Props> = ({ customRouteDesc }) => {
    const location = useLocation();
    const navigator = useNavigate();

    const routes = location.pathname
        ?.split("/")
        .map((path) => {
            let pathName: string = "";
            Object.entries(RouteConstant).map(
                ([key, value]: [string, RouteConstant]) => {
                    if (value === path) {
                        pathName = key;
                    }
                }
            );

            return {
                redirectUrl:
                    redirectRouteMap?.[
                        pathName as keyof typeof redirectRouteMap
                    ] || "",
                text: breadcrumbRouteDescMap?.[path as RouteConstant],
            };
        })
        .filter((route) => {
            return (
                Object.values(breadcrumbRouteDescMap).indexOf(route.text) > -1
            );
        });

    if (customRouteDesc) {
        routes[routes?.length - 1] = { text: customRouteDesc, redirectUrl: "" };
    }

    return (
        <div className="breadcrumb-component">
            <ContainerX>
                {routes.map((route, i) => {
                    const isDisabled = i === routes?.length - 1;

                    return (
                        <button
                            key={`breadcrumb-${i}`}
                            className={`breadcrumb-btn${
                                isDisabled ? " mod__disabled" : ""
                            }`}
                            disabled={isDisabled}
                            onClick={() => navigator(route.redirectUrl)}
                        >
                            <span>{route.text}</span>
                        </button>
                    );
                })}
            </ContainerX>
        </div>
    );
};
