import React, { Component } from "react";
import WorkLink from "./WorkLink";
import AboutLink from "./AboutLink";
import P5Wrapper from "react-p5-wrapper";
import { isBrowser, isMobile } from "react-device-detect";

function sketch(p) {
  let x = 0;
  let y = 0;
  let stepSize = 5;

  //let font = "Georgia";
  let letters = "Hello, I am Yikai. Nice to meet you.";
  let fontSizeMin = 10;
  let angleDistortion = 0.0;
  let counter = 0;

  p.setup = function() {
    p.createCanvas(p.displayWidth, p.displayHeight);
    p.background("#131313");
    x = p.mouseX;
    y = p.mouseY;

    //p.textFont(font);
    p.textAlign(p.LEFT);
    p.fill(255);

    p.textSize(16);
  };

  p.draw = function() {
    if (p.mouseIsPressed) {
      let d = p.dist(x, y, p.mouseX, p.mouseY);
      p.textSize(fontSizeMin + d / 2);
      let newLetter = letters.charAt(counter);
      stepSize = p.textWidth(newLetter);
      if (d > stepSize) {
        let angle = p.atan2(p.mouseY - y, p.mouseX - x);
        p.push();
        p.translate(x, y);
        p.rotate(angle + p.random(angleDistortion));
        p.text(newLetter, 0, 0);
        p.pop();
        counter++;
        if (counter >= letters.length) counter = 0;

        x = x + p.cos(angle) * stepSize;
        y = y + p.sin(angle) * stepSize;
      }
    }
  };

  p.mousePressed = function() {
    x = p.mouseX;
    y = p.mouseY;
  };

  p.keyReleased = function() {
    if (p.key === "s" || p.key === "S") p.saveCanvas("Hello", "png");
    if (p.keyCode === p.DELETE || p.keyCode === p.BACKSPACE) {
      p.background("#131313");
    }
  };
}

export default class Me extends Component {
  componentDidMount() {
    this.props.cursorOut();
  }

  componentWillUnmount() {
    this.props.cursorOut();
  }

  render() {
    const { cursorIn, cursorOut } = this.props;
    return (
      <div className="me-wrapper">
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
              isActive={true}
            />
          </React.Fragment>
        )}
        <div id="me-canvas">
          <P5Wrapper sketch={sketch} />
          {isBrowser ? (
            <p id="canvas-info-browser">
              Try to drag your mouse to reveal the text, press "DELETE" key to
              clear the screen, press "S" key to save your work.
            </p>
          ) : (
            <p id="canvas-info-mobile">
              Try to swipe your finger to reveal the text.
            </p>
          )}
        </div>
      </div>
    );
  }
}
