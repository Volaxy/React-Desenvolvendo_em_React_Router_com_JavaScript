import React from "react";

import "./assets/css/notFound.css";

import error404 from "assets/erro_404.png";

export default function NotFound() {
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

                <div className="containerButton">
                    <button>To Go Back</button>
                </div>

                <img className="dogImage" src={error404} alt="Dog wearing glasses and dressed like a human" />
            </div>

            <div className="whiteSpace"></div>
        </React.Fragment>
    )
}
