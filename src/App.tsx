import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import "./scss/main.scss";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />

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
