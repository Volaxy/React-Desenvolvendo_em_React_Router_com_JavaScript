import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        // The "<BrowserRouter>" is necessary to manipulate the routes with the router library
        <BrowserRouter>
            {/* The "<Routes>" contains any routes of the application, alternating between the different routes placed inside the component */}
            <Routes>
                {/* The "<Route />" defines a route in the URL's path, with the "element" like the component that will be displayed in the page */}
                <Route path="/" element={<div>INDEX</div>} />
                <Route path="/about-me" element={<div>ABOUT ME</div>} />
                {/* The "*" is a wildcard when the URL's path not contains any route above (in this case, "/" and "/about-me") */}
                <Route path="*" element={<div>404 Error</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
