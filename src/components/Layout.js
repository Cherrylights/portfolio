import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import Backdrop from "./Backdrop";
import WorkLink from "./WorkLink";
import AboutLink from "./AboutLink";
import Logo from "./Logo";

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {isMobile ? "" : <Backdrop />}
        <WorkLink
          history={this.props.history}
          cursorIn={this.props.cursorIn}
          cursorOut={this.props.cursorOut}
        />
        <AboutLink
          history={this.props.history}
          cursorIn={this.props.cursorIn}
          cursorOut={this.props.cursorOut}
        />
        <Logo cursorIn={this.props.cursorIn} cursorOut={this.props.cursorOut} />
        {this.props.children}
      </div>
    );
  }
}
