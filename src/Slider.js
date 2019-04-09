import * as PIXI from "pixi.js";
import projects from "./projects.js";
import { TimelineMax } from "gsap/TweenMax";
import { isMobileOnly } from "react-device-detect";

class Slider {
  constructor(canvas, currentIndex) {
    this.canvas = canvas;
    this.currentIndex = currentIndex;
    // this.setOptions();
    // this.createApp();
    // this.loadImages();
  }

  setOptions() {
    PIXI.utils.skipHello();
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
    PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
    this.dpr = window.devicePixelRatio && window.devicePixelRatio >= 2 ? 2 : 1;
    this.thumbVisble = false;
    if (isMobileOnly && window.orientation === 0) {
      this.slideData = projects.map(project => project.mobileImage);
    } else {
      this.slideData = projects.map(project => project.headerImage);
    }
  }

  createApp() {
    this.app = new PIXI.Application({
      //   view: this.canvas,
      width: this.canvasWidth,
      height: this.canvasHeight,
      transparent: true,
      resolution: this.dpr,
      autoResize: true
    });
    this.canvas.appendChild(this.app.view);
  }

  addImages() {
    this.slideData.forEach((imgPath, index) => {
      PIXI.loader.add(`${index}`, imgPath);
    });
  }

  loadImages() {
    PIXI.loader.load((loader, images) => {
      this.images = images;
      this.createSlider();
    });
  }

  createSlider() {
    this.slider = new PIXI.Container();
    this.slider.width = this.app.screen.width;
    this.slider.height = this.app.screen.height;
    this.app.stage.addChild(this.slider);

    this.clipRect = new PIXI.Rectangle(
      0,
      0,
      this.app.screen.width,
      this.app.screen.height
    );
    this.slider.filterArea = this.clipRect;

    this.app.stage.interactive = true;

    this.addSlides(this.currentIndex);
    this.createDisplacementFilter();
  }

  addSlides(currentIndex) {
    this.slides = {
      activeIndex: currentIndex,
      count: 0
    };
    let i = 0;

    Object.keys(this.images).forEach(key => {
      const slide = new PIXI.Sprite(this.images[key].texture);
      slide.width = this.app.screen.width;
      slide.height = this.app.screen.height;
      slide.y = i === currentIndex ? 0 : this.app.screen.height;

      this.slides[i] = slide;
      this.slider.addChild(slide);

      i++;
      this.slides.count++;
    });
  }

  createDisplacementFilter() {
    this.dispSprite = PIXI.Sprite.fromImage("/images/displacement.jpg");
    this.dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.dispSprite.skew.x = 0.5;
    this.dispSprite.skew.y = -0.5;
    this.dispSprite.position.x = -760;
    this.dispSprite.position.y = -100;
    this.dispSprite.scale.y = 3;
    this.dispSprite.scale.x = 3;
    this.app.stage.addChild(this.dispSprite);

    this.dispFilter = new PIXI.filters.DisplacementFilter(this.dispSprite, 0);
    this.slider.filters = [this.dispFilter];
  }

  hoverSlide() {}

  nextSlide() {
    // console.log(this);
    return new Promise((resolve, reject) => {
      let tl = new TimelineMax({
        onStart: () => {
          // console.log("onStart", this.slides.activeIndex);
          //console.log("animation starts");
        },
        onComplete: () => {
          this.slides.activeIndex++;
          if (this.slides.activeIndex === this.slides.count) {
            this.slides.activeIndex = 0;
          }
          // console.log("onEnd", this.slides.activeIndex);
          //console.log("animation ends");
          resolve(true);
        }
      });

      if (this.slides.activeIndex === this.slides.count - 1) {
        tl.to(
          this.slides[this.slides.activeIndex],
          1.3,
          {
            y: -this.app.screen.height,
            ease: "Expo.easeInOut"
          },
          0
        )

          .fromTo(
            this.slides[0],
            1.3,
            {
              y: this.app.screen.height
            },
            {
              y: 0,
              ease: "Expo.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 70,
              y: 70,
              ease: "Power2.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 0,
              y: 0,
              ease: "Power2.easeInOut"
            },
            0.65
          );
      } else {
        tl.to(
          this.slides[this.slides.activeIndex],
          1.3,
          {
            y: -this.app.screen.height,
            ease: "Expo.easeInOut"
          },
          0
        )

          .fromTo(
            this.slides[this.slides.activeIndex + 1],
            1.3,
            {
              y: this.app.screen.height
            },
            {
              y: 0,
              ease: "Expo.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 70,
              y: 70,
              ease: "Power2.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 0,
              y: 0,
              ease: "Power2.easeInOut"
            },
            0.65
          );
      }
    });
  }

  prevSlide() {
    return new Promise((resolve, reject) => {
      let tl = new TimelineMax({
        onStart: () => {
          //   console.log("onStart", this.slides.activeIndex);
        },
        onComplete: () => {
          this.slides.activeIndex--;
          if (this.slides.activeIndex < 0) {
            this.slides.activeIndex = this.slides.count - 1;
          }
          resolve(true);
          //   console.log("onEnd", this.slides.activeIndex);
        }
      });

      if (this.slides.activeIndex === 0) {
        tl.to(
          this.slides[this.slides.activeIndex],
          1.3,
          {
            y: this.app.screen.height,
            ease: "Expo.easeInOut"
          },
          0
        )

          .fromTo(
            this.slides[this.slides.count - 1],
            1.3,
            {
              y: -this.app.screen.height
            },
            {
              y: 0,
              ease: "Expo.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 70,
              y: 70,
              ease: "Power2.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 0,
              y: 0,
              ease: "Power2.easeInOut"
            },
            0.65
          );
      } else {
        tl.to(
          this.slides[this.slides.activeIndex],
          1.3,
          {
            y: this.app.screen.height,
            ease: "Expo.easeInOut"
          },
          0
        )

          .fromTo(
            this.slides[this.slides.activeIndex - 1],
            1.3,
            {
              y: -this.app.screen.height
            },
            {
              y: 0,
              ease: "Expo.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 70,
              y: 70,
              ease: "Power2.easeInOut"
            },
            0
          )

          .to(
            this.dispFilter.scale,
            0.65,
            {
              x: 0,
              y: 0,
              ease: "Power2.easeInOut"
            },
            0.65
          );
      }
    });
  }
}

export default Slider;
