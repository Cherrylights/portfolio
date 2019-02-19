import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

export default class Logo extends Component {
  mouseEnterHandler = event => {
    const target = event.target;
    target.classList.add("on");
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
        x: dx * w * 0.5,
        y: dy * h * 0.5
      });
    }
  };

  mouseLeaveHandler = event => {
    const target = event.target;
    // const x = logo.getBoundingClientRect().left;
    // const y = logo.getBoundingClientRect().top;
    target.classList.remove("on");
    this.props.cursorOut();
    TweenMax.to(target, 0.4, {
      x: 0,
      y: 0
    });
  };

  renderContent = () => {
    if (isMobile) {
      return (
        <Link className="logo" to="/me">
          <p id="yikai">Yikai</p>
          <p id="zhang">Zhang</p>
        </Link>
      );
    }
    return (
      <Link
        to="/me"
        className="logo"
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
        onMouseMove={this.mouseMoveHandler}
      >
        <img src="/images/logo.svg" alt="logo" />
        {/* <p id="yikai">Yikai</p>
        <p id="zhang">Zhang</p> */}
      </Link>
    );
  };

  render() {
    return this.renderContent();
  }
}
