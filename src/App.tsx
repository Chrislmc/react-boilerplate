import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";

function App() {
    return (
        <Routes>
            <Route
                element={
                    <ProtectedRoute>
                        <Route element={<Secret />} />
                    </ProtectedRoute>
                }
            />
            <Route>
                <Route index element={<HomePage />} />

                {/* <Route path="sample-component" element={<SampleComponent />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    );
}

export default App;
