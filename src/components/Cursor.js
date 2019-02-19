import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";

export default class Cursor extends Component {
  constructor(props) {
    super(props);
    this.cursorRef = React.createRef();
  }
  componentDidMount() {
    const cursor = this.cursorRef.current;
    window.addEventListener("mousemove", function(e) {
      TweenMax.to(cursor, 0.2, {
        top: e.clientY - 10 + "px",
        left: e.clientX - 10 + "px"
      });
      //   cursor.style.top = e.clientY + "px";
      //   cursor.style.left = e.clientX + "px";
    });
  }
  render() {
    const { isCursorActive, isCursorInCarousel } = this.props;
    return (
      <div id="cursor" ref={this.cursorRef}>
        {isCursorInCarousel ? (
          <svg width="65" height="20">
            <text
              x="0"
              y="15"
              fontFamily="Eina03"
              fontSize="20"
              fontWeight="700"
              fill="white"
              letterSpacing=".5px"
            >
              NEXT
            </text>
          </svg>
        ) : (
          <svg width="40" height="40">
            <circle
              cx={isCursorActive ? "14" : "7"}
              cy={isCursorActive ? "14" : "7"}
              r={isCursorActive ? "14" : "7"}
              fill="white"
            />
          </svg>
        )}
      </div>
    );
  }
}
