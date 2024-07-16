import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import "./scss/main.scss";
import { RouteConstant } from "./utils/routes/route";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route
                    path={RouteConstant.practitioners}
                    element={<HomePage />}
                ></Route>

                <Route path={RouteConstant.services} element={<HomePage />}>
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
