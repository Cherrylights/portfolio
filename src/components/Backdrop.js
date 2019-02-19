import React, { Component } from "react";

export default class Backdrop extends Component {
  render() {
    return (
      <div id="backdrop">
        <span className="backdrop" id="col-1" />
        <span className="backdrop" id="col-2" />
        <span className="backdrop" id="col-3" />
        <span className="backdrop" id="col-4" />
        <span className="backdrop" id="col-5" />
      </div>
    );
  }
}
