import DefaultPage from "components/DefaultPage/DefaultPage";
import Footer from "components/Footer/Footer";
import Menu from "components/Menu/Menu";
import AboutMe from "pages/AboutMe/AboutMe";
import Home from "pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// It's common to call the component with the routes like "Routes or AppRoutes"
function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                {/*
                    When the page is rendered, the structure is:
                        <DefaultPage>
                            CHILDREN
                            // In this case:
                            <Home> // If the root is "/"
                            <AboutMe> // If the root is "/about-me"
                        </DefaultPage>
                */}
                <Route path="/" element={<DefaultPage />}>
                    {/* The index references the "path" attribute of the father <Route> */}
                    <Route index element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                </Route>

                <Route path="*" element={<div>404 Error</div>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
