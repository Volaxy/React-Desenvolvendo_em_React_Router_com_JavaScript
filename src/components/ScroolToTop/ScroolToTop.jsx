import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // The "useEffect" is executed when the value of the 2º parameter change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}