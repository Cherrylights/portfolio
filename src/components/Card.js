import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { isMobile } from "react-device-detect";
import Charming from "react-charming";
import { TweenMax, Power2 } from "gsap/TweenMax";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.letters = React.createRef();
  }

  render() {
    const { id, name, caption, color, type, year } = this.props.project;
    const {
      count,
      currentIndex,
      slideDirection,
      cursorIn,
      cursorOut,
      sliderChangedNum,
      setAnimationStatus,
      setImageStatus,
      setFinishLoadingCanvas,
      isImageLoaded
    } = this.props;
    return (
      <div className={isMobile ? `card-mobile ${color}` : `card ${color}`}>
        <div className="card-content">
          <div className="project-info">
            <span>{type}</span>
            <span>Year</span>
            <span>{year}</span>
          </div>
          <div
            className={
              isMobile
                ? `carousel-wrapper-mobile ${slideDirection}`
                : `carousel-wrapper ${slideDirection}`
            }
          >
            <Carousel
              count={count}
              slideDirection={slideDirection}
              sliderChangedNum={sliderChangedNum}
              setAnimationStatus={setAnimationStatus}
              setImageStatus={setImageStatus}
              setFinishLoadingCanvas={setFinishLoadingCanvas}
              isImageLoaded={isImageLoaded}
            />
          </div>

          <div
            className={
              isMobile ? "text-content-wrapper-mobile" : "text-content-wrapper"
            }
          >
            <div className="card-background" />
            <TransitionGroup
              component="span"
              className={`card-index-current ${slideDirection}`}
            >
              <CSSTransition
                classNames="card-index"
                key={id}
                timeout={{ enter: 1100, exit: 1100 }}
              >
                <span>{`${currentIndex < 10 && 0}${currentIndex}`}</span>
              </CSSTransition>
            </TransitionGroup>
            <div className="card-type-index">
              <span className="card-type">{type}</span>
            </div>

            <div className="card-title">
              <TransitionGroup
                component="div"
                className={`project-name-wrapper ${slideDirection}`}
                enter={true}
                exit={true}
              >
                <CSSTransition
                  classNames="project-name"
                  key={id}
                  timeout={{ enter: 900, exit: 900 }}
                  onEnter={() => {
                    const letters = Array.prototype.slice.call(
                      this.letters.current.querySelectorAll("span")
                    );
                    if (
                      letters &&
                      this.letters.current.classList.contains("up")
                    ) {
                      TweenMax.staggerTo(
                        letters,
                        0.8,
                        {
                          position: "relative",
                          transform: "translateY(-100%)",

                          delay: 0.1,
                          ease: Power2.easeInOut
                        },
                        0.03
                      );
                    } else {
                      TweenMax.staggerTo(
                        letters,
                        0.8,
                        {
                          position: "relative",
                          transform: "translateY(100%)",

                          delay: 0.1,
                          ease: Power2.easeInOut
                        },
                        0.03
                      );
                    }
                  }}
                  onExit={() => {
                    const letters = Array.prototype.slice.call(
                      this.letters.current.parentElement.nextSibling.firstChild.querySelectorAll(
                        "span"
                      )
                    );
                    if (
                      letters &&
                      this.letters.current.classList.contains("up")
                    ) {
                      TweenMax.staggerFromTo(
                        letters,
                        0.8,
                        {
                          position: "relative",
                          transform: "translateY(0%)",
                          ease: Power2.easeInOut
                        },
                        {
                          position: "relative",
                          transform: "translateY(-100%)",

                          delay: 0.1,
                          ease: Power2.easeInOut
                        },
                        0.03
                      );
                    } else {
                      TweenMax.staggerFromTo(
                        letters,
                        0.8,
                        {
                          position: "relative",
                          transform: "translateY(0%)",

                          ease: Power2.easeInOut
                        },
                        {
                          position: "relative",
                          transform: "translateY(100%)",

                          delay: 0.1,
                          ease: Power2.easeInOut
                        },
                        0.03
                      );
                    }
                  }}
                >
                  <Charming
                    letters={name}
                    render={letters => (
                      <p
                        className={`project-name ${slideDirection}`}
                        ref={this.letters}
                      >
                        {letters}
                      </p>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            </div>
            <TransitionGroup component="div" className="card-caption-wrapper">
              <CSSTransition
                classNames="card-caption"
                key={id}
                timeout={{ enter: 1100, exit: 1100 }}
              >
                <p className="card-caption">{caption}</p>
              </CSSTransition>
            </TransitionGroup>
            <div className="card-btn-wrapper">
              <Link
                to={`/project/${id}`}
                className="learn-more-btn"
                onMouseEnter={cursorIn}
                onMouseLeave={cursorOut}
              >
                <span className="learn-more-text">View Details</span>
                <span className="learn-more-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
