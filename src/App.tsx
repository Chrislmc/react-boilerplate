import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import { Services } from "./pages/services";
import "./scss/main.scss";
import { RouteConstant } from "./utils/routes/route";

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />

            <Route element={<Layout />}>
                <Route
                    path={RouteConstant.practitioners}
                    element={<HomePage />}
                ></Route>

                <Route path={RouteConstant.services} element={<Services />}>
                    <Route
                        path={RouteConstant.naturopathicAndFunctionalMedicine}
                        element={<HomePage />}
                    />
                </Route>

                <Route path={RouteConstant.shop} element={<HomePage />}></Route>

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
    );
}

export default App;
