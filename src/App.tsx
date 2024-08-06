import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import { DispensaryPage } from "./pages/dispensary";
import { HealthHubPage } from "./pages/health-hub";
import { PractitionersPage } from "./pages/practitioners";
import { MeetOurPractitionersPage } from "./pages/practitioners/meet-our-practitioners";
import { ServicesPage } from "./pages/services";
import { NaturopathicAndFunctionalMedicinePage } from "./pages/services/naturopathic-and-functional-medicine";
import { ShopPage } from "./pages/shop";
import { ProductsPage } from "./pages/shop/products";
import "./scss/main.scss";
import { RemoveTrailingSlash } from "./utils/routes/RemoveTrailingSlash";
import { RouteConstant, dynamicRouteConstant } from "./utils/routes/route";

function App() {
    return (
        <>
            <RemoveTrailingSlash />
            <Routes>
                <Route index element={<HomePage />} />

                <Route element={<Layout />}>
                    <Route path={RouteConstant.practitioners}>
                        <Route index element={<PractitionersPage />} />
                        <Route
                            path={`${RouteConstant.meetOurPractitioners}/${dynamicRouteConstant.meetOurPractitioners}`}
                            element={<MeetOurPractitionersPage />}
                        />
                    </Route>

                    <Route
                        path={RouteConstant.services}
                        element={<ServicesPage />}
                    >
                        <Route
                            path={
                                RouteConstant.naturopathicAndFunctionalMedicine
                            }
                            element={<NaturopathicAndFunctionalMedicinePage />}
                        />
                    </Route>

                    <Route path={RouteConstant.shop}>
                        <Route index element={<ShopPage />} />

                        <Route
                            path={RouteConstant.products}
                            element={<ProductsPage />}
                        />
                    </Route>

                    <Route
                        path={RouteConstant.dispensary}
                        element={<DispensaryPage />}
                    ></Route>

                    <Route
                        path={RouteConstant.healthHub}
                        element={<HealthHubPage />}
                    ></Route>
                    <Route
                        element={
                            <ProtectedRoute>
                                <Route path={"secret"} element={<Secret />} />
                            </ProtectedRoute>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;
