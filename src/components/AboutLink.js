import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TweenMax } from "gsap/TweenMax";
import { isMobile } from "react-device-detect";

export default class AboutLink extends Component {
  mouseEnterHandler = event => {
    event.target.classList.add("on");
    this.props.cursorIn();
  };

  mouseMoveHandler = event => {
    const target = event.target;
    if (target.classList.contains("on")) {
      const w = target.clientWidth;
      const h = target.clientHeight;
      const x = target.getBoundingClientRect().left;
      const y = target.getBoundingClientRect().top;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const dx = (mouseX - x) / w - 0.5;
      const dy = (mouseY - y) / h - 0.5;

      TweenMax.to(target, 0.2, {
        x: dx * w * 0.6,
        y: dy * h * 0.6
      });
    }
  };

  mouseLeaveHandler = event => {
    const target = event.target;
    target.classList.remove("on");
    this.props.cursorOut();
    TweenMax.to(target, 0.4, {
      x: 0,
      y: 0
    });
  };

  render() {
    const { isActive } = this.props;
    if (isMobile) {
      if (isActive) {
        return (
          <Link to="/about" id="about-link">
            About
          </Link>
        );
      } else {
        return <span id="about-link">About</span>;
      }
    }
    if (isActive) {
      return (
        <Link
          to="/about"
          id="about-link"
          onMouseEnter={this.mouseEnterHandler}
          onMouseMove={this.mouseMoveHandler}
          onMouseLeave={this.mouseLeaveHandler}
        >
          About
        </Link>
      );
    } else {
      return <span id="about-link">About</span>;
    }
  }
}
