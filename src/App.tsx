import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { ComponentsPage } from "./pages/components";
import { DispensaryPage } from "./pages/dispensary";
import { HealthHubPage } from "./pages/health-hub";
import { ArticlePage } from "./pages/health-hub/article";
import { LabTestPage } from "./pages/lab-test";
import { OldHomePage } from "./pages/old-home-page";
import { CorporateWellnessPage } from "./pages/others/corporate-wellness";
import { HealthConditionPage } from "./pages/others/health-condition";
import { InsurancePage } from "./pages/others/insurance";
import { OurHealingVisionPage } from "./pages/others/our-healing-vision";
import { PractitionersPage } from "./pages/practitioners";
import { MeetOurPractitionersPage } from "./pages/practitioners/meet-our-practitioners";
import { Secret } from "./pages/Secret";
import { ServicesPage } from "./pages/services";
import { NaturopathyPage } from "./pages/services/naturopathy";
import { ShopPage } from "./pages/shop";
import { ProductDetailPage } from "./pages/shop/product-detail";
import { ProductsPage } from "./pages/shop/products";
import { ProtectedRoute } from "./ProtectedRoute";
import "./scss/main.scss";
import { RemoveTrailingSlash } from "./utils/routes/RemoveTrailingSlash";
import { RouteConstant, dynamicRouteConstant } from "./utils/routes/route";

function App() {
    return (
        <>
            <RemoveTrailingSlash />
            <Routes>
                <Route index element={<HomePage />} />
                <Route
                    path={RouteConstant.components}
                    element={<ComponentsPage />}
                />
                <Route
                    path={RouteConstant.oldHomePage}
                    element={<OldHomePage />}
                />

                <Route element={<Layout />}>
                    <Route path={RouteConstant.practitioners}>
                        <Route index element={<PractitionersPage />} />
                        <Route
                            path={`${RouteConstant.meetOurPractitioners}/${dynamicRouteConstant.meetOurPractitioners}`}
                            element={<MeetOurPractitionersPage />}
                        />
                    </Route>

                    <Route path={RouteConstant.services}>
                        <Route index element={<ServicesPage />} />

                        <Route
                            path={RouteConstant.naturopathy}
                            element={<NaturopathyPage />}
                        />
                    </Route>

                    <Route path={RouteConstant.shop}>
                        <Route index element={<ShopPage />} />

                        <Route
                            path={RouteConstant.products}
                            element={<ProductsPage />}
                        />
                        <Route
                            path={`${RouteConstant.productDetail}/${dynamicRouteConstant.productDetail}`}
                            element={<ProductDetailPage />}
                        />
                    </Route>

                    <Route
                        path={RouteConstant.dispensary}
                        element={<DispensaryPage />}
                    ></Route>

                    <Route path={RouteConstant.healthHub}>
                        <Route index element={<HealthHubPage />} />
                        <Route
                            path={`${RouteConstant.article}/${dynamicRouteConstant.article}`}
                            element={<ArticlePage />}
                        />
                    </Route>

                    <Route
                        path={RouteConstant.labTest}
                        element={<LabTestPage />}
                    ></Route>

                    <Route path={RouteConstant.others}>
                        <Route
                            path={RouteConstant.corporateWellness}
                            element={<CorporateWellnessPage />}
                        />
                        <Route
                            path={RouteConstant.healthCondition}
                            element={<HealthConditionPage />}
                        />
                        <Route
                            path={RouteConstant.insurance}
                            element={<InsurancePage />}
                        />
                        <Route
                            path={RouteConstant.ourHealingVision}
                            element={<OurHealingVisionPage />}
                        />
                    </Route>

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
