import DefaultPage from "components/DefaultPage/DefaultPage";
import Footer from "components/Footer/Footer";
import Menu from "components/Menu/Menu";
import ScrollToTop from "components/ScroolToTop/ScroolToTop";
import AboutMe from "pages/AboutMe/AboutMe";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Post from "pages/Post/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            {/* Every time when the page loads, the scrool go to top */}
            <ScrollToTop />

            <Menu />

            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path="about-me" element={<AboutMe />} />
                </Route>

                {/* If new descendant routes appear from this specific route, such as "posts/:id/example", the route would not be rendered. Anything else, in case there are future modifications */}
                <Route path="posts/:id/*" element={<Post />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
