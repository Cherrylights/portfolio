import React, { Component } from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Slider from "../Slider.js";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.carouselMobileRef = React.createRef();
  }

  componentDidMount() {
    if (isMobile) {
      //this.slider = new Slider(this.carouselMobileRef.current);
      if (this.props.isImageLoaded) {
        this.slider = new Slider(
          this.carouselMobileRef.current,
          this.props.count
        );
        this.slider.setOptions();
        this.slider.createApp();
        this.slider.loadImages();
      } else {
        this.slider = new Slider(
          this.carouselMobileRef.current,
          this.props.count
        );
        this.slider.setOptions();
        this.slider.createApp();
        this.slider.addImages();
        this.slider.loadImages();
      }
    } else {
      if (this.props.isImageLoaded) {
        this.slider = new Slider(this.carouselRef.current, this.props.count);
        this.slider.setOptions();
        this.slider.createApp();
        this.slider.loadImages();
        this.carouselRef.current.addEventListener(
          "mouseenter",
          this.slider.hoverSlide.bind(this.slider)
        );
      } else {
        this.slider = new Slider(this.carouselRef.current, this.props.count);
        this.slider.setOptions();
        this.slider.createApp();
        this.slider.addImages();
        this.slider.loadImages().then(result => {
          // console.log(result);
          this.props.setFinishLoadingCanvas();
        });
      }
    }
  }

  componentWillUnmount() {
    this.props.setImageStatus();
    this.slider = null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.sliderChangedNum !== prevProps.sliderChangedNum) {
      if (this.props.slideDirection === "up") {
        this.props.setAnimationStatus(true);
        this.slider.nextSlide().then(result => {
          this.props.setAnimationStatus(false);
          //console.log("Promise result: " + result);
        });
      } else {
        this.props.setAnimationStatus(true);
        this.slider.prevSlide().then(result => {
          this.props.setAnimationStatus(false);
        });
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <BrowserView>
          <div className="carousel" ref={this.carouselRef} />
        </BrowserView>

        <MobileView>
          <div className="carousel-mobile" ref={this.carouselMobileRef} />
          <div className="carousel-mobile-overlay" />
        </MobileView>
      </React.Fragment>
    );
  }
}
