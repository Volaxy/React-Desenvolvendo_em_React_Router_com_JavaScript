import Menu from "components/Menu/Menu";
import Home from "pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// It's common to call the component with the routes like "Routes or AppRoutes"
function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<div>ABOUT ME</div>} />
                <Route path="*" element={<div>404 Error</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
