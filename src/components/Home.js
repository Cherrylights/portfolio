import React, { Component } from "react";
import { TweenMax } from "gsap/TweenMax";
import { BrowserView, MobileView } from "react-device-detect";
import Card from "./Card";
import Overlay from "./Overlay";
import ChevronUp from "./ChevronUp";
import ChevronDown from "./ChevronDown";
import WorkLink from "./WorkLink";
import AboutLink from "./AboutLink";
import Logo from "./Logo";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ts: {
        x: 0,
        y: 0
      }
    };
  }

  touchStartHandler = event => {
    this.setState({
      ts: {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      }
    });
  };

  touchEndHandler = event => {
    const te = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY
    };

    if (!this.props.value.state.isAnimating) {
      if (this.state.ts.y > te.y + 100) {
        // swipe up
        this.props.value.nextProject();
      } else if (this.state.ts.y < te.y - 100) {
        // swipe down
        this.props.value.previousProject();
      }
    }
  };

  scrollHandler = event => {
    if (!this.props.value.state.isAnimating) {
      if (event.deltaY > 0) {
        this.props.value.nextProject();
      } else {
        this.props.value.previousProject();
      }
    }
  };

  mouseEnterHandler = event => {
    event.target.classList.add("on");
    this.props.value.cursorIn();
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
    this.props.value.cursorOut();
    TweenMax.to(target, 0.4, {
      x: 0,
      y: 0
    });
  };

  componentDidMount() {
    const thumbnails = this.props.value.state.projects.map(
      project => project.headerImage
    );
    thumbnails.forEach(thumbnail => {
      const img = new Image();
      img.src = thumbnail;
    });
  }

  render() {
    const project = this.props.value.state.projects[
      this.props.value.state.count
    ];
    // const totalProjectNum = this.props.value.state.projects.length;
    const currentIndex = this.props.value.state.count + 1;
    const {
      count,
      slideDirection,
      sliderChangedNum,
      isImageLoaded,
      isCanvasLoaded
    } = this.props.value.state;
    const {
      nextProject,
      previousProject,
      cursorIn,
      cursorOut,
      setAnimationStatus,
      setImageStatus,
      setFinishLoadingCanvas
    } = this.props.value;
    return (
      <React.Fragment>
        <div className="home-wrapper">
          <BrowserView>
            <div
              className="content project-wrapper"
              onWheel={this.scrollHandler}
            >
              <WorkLink
                cursorIn={cursorIn}
                cursorOut={cursorOut}
                isActive={false}
              />
              <AboutLink
                cursorIn={cursorIn}
                cursorOut={cursorOut}
                isActive={true}
              />
              <Logo cursorIn={cursorIn} cursorOut={cursorOut} />
              <Card
                project={project}
                count={count}
                currentIndex={currentIndex}
                slideDirection={slideDirection}
                cursorIn={cursorIn}
                cursorOut={cursorOut}
                sliderChangedNum={sliderChangedNum}
                setAnimationStatus={setAnimationStatus}
                setImageStatus={setImageStatus}
                setFinishLoadingCanvas={setFinishLoadingCanvas}
                isImageLoaded={isImageLoaded}
              />
              <div className="chevrons">
                <button
                  onClick={previousProject}
                  onMouseEnter={this.mouseEnterHandler}
                  onMouseMove={this.mouseMoveHandler}
                  onMouseLeave={this.mouseLeaveHandler}
                >
                  <ChevronUp />
                </button>
                <button
                  onClick={nextProject}
                  onMouseEnter={this.mouseEnterHandler}
                  onMouseMove={this.mouseMoveHandler}
                  onMouseLeave={this.mouseLeaveHandler}
                >
                  <ChevronDown />
                </button>
              </div>
            </div>
            <Overlay />
            {isCanvasLoaded ? (
              ""
            ) : (
              <div
                className="loader-wrapper"
                style={{
                  position: "absolute",
                  width: "100vw",
                  height: "100vh",
                  background: "white",
                  top: 0,
                  left: 0,
                  zIndex: 1000
                }}
              >
                <h1
                  style={{
                    fontFamily: "Arial, Helvetica, sans-serif",
                    display: "block",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate3d(-50%, -50%, 0)"
                  }}
                >
                  Hi, I'm Yikai, Welcome.
                </h1>
              </div>
            )}
          </BrowserView>

          <MobileView>
            <div
              className="content-mobile project-wrapper"
              onTouchStart={this.touchStartHandler}
              onTouchEnd={this.touchEndHandler}
            >
              <AboutLink
                cursorIn={cursorIn}
                cursorOut={cursorOut}
                isActive={true}
              />
              <Logo />
              <Card
                project={project}
                count={count}
                currentIndex={currentIndex}
                slideDirection={slideDirection}
                sliderChangedNum={sliderChangedNum}
                setAnimationStatus={setAnimationStatus}
                setImageStatus={setImageStatus}
                isImageLoaded={isImageLoaded}
              />
            </div>
            <Overlay />
          </MobileView>
        </div>
      </React.Fragment>
    );
  }
}
