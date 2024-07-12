import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "./components/layout";
import { HomePage } from "./pages";
import { Secret } from "./pages/Secret";
import "./scss/main.scss";

function App() {
    return (
        <Routes>
            <Route
                element={
                    <Layout>
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
                    </Layout>
                }
            />
        </Routes>
    );
}

export default App;
