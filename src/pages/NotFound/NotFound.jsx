import React from "react";

import "./assets/css/notFound.css";

import error404 from "assets/erro_404.png";
import Button from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    // Variable to manipulate the navigation between the pages with JS
    const navigator = useNavigate();

    return (
        <React.Fragment>
            <div className="contentContainer">
                <span className="text404">404</span>

                <h1 className="title">
                    Ops! Page not found
                </h1>

                <p className="paragraph">
                    Are you sure this is what you were looking for?
                </p>

                <p className="paragraph">
                    Wait a few moments and reload the page.
                </p>

                <div
                    className="containerButton"
                    onClick={() => navigator("/")} // The value as a parameter indicates the URL route that will be accessed
                >
                    <Button height="lg">To Go Back</Button>
                </div>

                <img className="dogImage" src={error404} alt="Dog wearing glasses and dressed like a human" />
            </div>

            <div className="whiteSpace"></div>
        </React.Fragment>
    )
}
