import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import WorkLink from "./WorkLink";
import AboutLink from "./AboutLink";

export default class About extends Component {
  componentDidMount() {
    this.props.cursorOut();
  }

  componentWillUnmount() {
    this.props.cursorOut();
  }

  render() {
    const { cursorIn, cursorOut } = this.props;
    return (
      <div
        className={`${
          isMobile ? "content-mobile about-wrapper" : "content about-wrapper"
        }`}
      >
        {isMobile ? (
          <WorkLink />
        ) : (
          <React.Fragment>
            <WorkLink
              cursorIn={cursorIn}
              cursorOut={cursorOut}
              isActive={true}
            />
            <AboutLink
              cursorIn={cursorIn}
              cursorOut={cursorOut}
              isActive={false}
            />
          </React.Fragment>
        )}

        <div className="about-title">
          {" "}
          <p>About</p>
        </div>
        <div className="about-text part-1">
          {" "}
          <p>
            Hi, I'm Yikai, a web designer and developer based in Toronto. I
            enjoy creating appealing user experience for the web.
          </p>
        </div>
        <div className="about-text part-2">
          <p>
            I'm currently working on creating compelling content that builds awareness of <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" onMouseEnter={cursorIn}
            onMouseLeave={cursorOut}>Shopify</a>.
          </p>
        </div>
        <div className="contact-title">
          <p>Contact</p>
        </div>

        <div className="contact-text">
          <p>+1 647 838 5874</p>
          <a
            className="contact-email"
            href="mailto:zhangyikai@hotmail.com"
            onMouseEnter={cursorIn}
            onMouseLeave={cursorOut}
          >
            zhangyikai@hotmail.com
          </a>
          <div className="contact-social">
            <a
              href="https://www.linkedin.com/in/zhang-yikai/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={cursorIn}
              onMouseLeave={cursorOut}
            >
              LinkedIn
            </a>
            {/* <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={cursorIn}
              onMouseLeave={cursorOut}
            >
              Github
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}
