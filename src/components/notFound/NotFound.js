import React from "react";
import "./notFound.css";

const notFound = () => {
  return (
    <body>
      <a>
        <header className="top-header"></header>
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>

        <section className="error">
          <h1 className="message__title">ERROR 404</h1>
          <h1 className="message__title">Page Not Found</h1>
          <div className="error__content">
            <div className="error__message message"></div>
          </div>
        </section>
      </a>
    </body>
  );
};

export default notFound;
