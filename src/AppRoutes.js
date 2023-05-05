import DefaultPage from "components/DefaultPage/DefaultPage";
import Footer from "components/Footer/Footer";
import Menu from "components/Menu/Menu";
import AboutMe from "pages/AboutMe/AboutMe";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";
import Post from "pages/Post/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />

            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path="about-me" element={<AboutMe />} />
                    <Route path="posts/:id" element={<Post />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
