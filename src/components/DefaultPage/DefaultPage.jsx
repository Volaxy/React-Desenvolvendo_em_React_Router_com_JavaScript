import Banner from "components/Banner/Banner";
import { Outlet } from "react-router-dom";

export default function DefaultPage() {
    return (
        <main>
            <Banner />

            {/* The <Outlet /> render the routes children nodes inside a root */}
            <Outlet />
        </main>
    )
}
