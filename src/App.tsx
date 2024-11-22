import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { ComponentsPage } from "./pages/components";
import { Secret } from "./pages/Secret";
import { ProtectedRoute } from "./ProtectedRoute";
import "./scss/main.scss";
import { RemoveTrailingSlash } from "./utils/routes/RemoveTrailingSlash";
import { RouteConstant } from "./utils/routes/route";

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

                <Route element={<Layout />}>
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
