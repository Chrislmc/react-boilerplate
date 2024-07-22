import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import { PractitionersPage } from "./pages/practitioners";
import { Services } from "./pages/services";
import "./scss/main.scss";
import { RemoveTrailingSlash } from "./utils/routes/RemoveTrailingSlash";
import { RouteConstant } from "./utils/routes/route";

function App() {
    return (
        <>
            <RemoveTrailingSlash />
            <Routes>
                <Route index element={<HomePage />} />

                <Route element={<Layout />}>
                    <Route
                        path={RouteConstant.practitioners}
                        element={<PractitionersPage />}
                    ></Route>

                    <Route path={RouteConstant.services} element={<Services />}>
                        <Route
                            path={
                                RouteConstant.naturopathicAndFunctionalMedicine
                            }
                            element={<HomePage />}
                        />
                    </Route>

                    <Route
                        path={RouteConstant.shop}
                        element={<HomePage />}
                    ></Route>

                    <Route
                        path={RouteConstant.dispensary}
                        element={<HomePage />}
                    ></Route>

                    <Route
                        path={RouteConstant.healthHub}
                        element={<HomePage />}
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
