import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import AccountProvider from "./hooks/useAccount";
import AuthPage from "./pages/AuthPage";
import HistoryPage from "./pages/HistoryPage";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <>
            <Navigation />
            <AccountProvider>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" element={<AuthPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Routes>
            </AccountProvider>
        </>
    );
}

export default App;
