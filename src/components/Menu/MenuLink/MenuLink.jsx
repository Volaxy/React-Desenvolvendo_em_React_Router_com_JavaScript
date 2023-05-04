import styles from "./assets/css/menulink.module.css";

import { NavLink } from "react-router-dom";

export default function MenuLink({children, to}) {
    // This object has any properties relative to the route page
    // const location = useLocation();
    
    // The "<Link>" is a tag that represents an "<a>" tag, with the "to" property being the "href"
    // <Link>

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDetached : ""}
            `}
            to={to}
        >
            {children}
        </NavLink>
    )
}
