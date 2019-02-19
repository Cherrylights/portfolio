import React, { Component } from "react";
import { isMobile, isMobileOnly, isBrowser } from "react-device-detect";
import { TweenMax } from "gsap/TweenMax";
import { withRouter, Link } from "react-router-dom";

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.state = {
      inHeader: true,
      inFooter: false,
      isScrolling: false
    };
  }
  componentDidMount() {
    this.props.value.cursorOut();

    // Init Project
    const { projects } = this.props.value.state;
    const currentProject = projects.filter(
      project => project.id === this.props.match.params.projectId
    )[0];
    const currentProjectIndex = projects.findIndex(
      project => project.id === currentProject.id
    );
    this.props.value.setCount(currentProjectIndex);

    //Init Scrolling
    this.target = this.contentRef.current;
    this.viewportHeight = window.innerHeight;
  }

  componentWillUnmount() {
    this.props.value.cursorOut();
  }

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

  completeHandler = () => {
    this.setState({
      isScrolling: false
    });
  };

  scrollHandler = event => {
    this.contentHeight = this.target.scrollHeight;
    // console.log(this.target.scrollTop, this.viewportHeight, this.contentHeight);

    if (this.props.value.state.isTransitioning) {
      event.preventDefault();
      return;
    }

    if (this.state.isScrolling) {
      event.preventDefault();
      return;
    }

    // From Header to Main
    if (
      this.target.scrollTop < this.viewportHeight &&
      event.deltaY > 0 &&
      this.state.inHeader
    ) {
      this.setState({
        inHeader: false,
        isScrolling: true
      });
      TweenMax.fromTo(
        this.target,
        1,
        { scrollTop: 0 },
        {
          scrollTop: this.viewportHeight,
          ease: "Power4.easeInOut",
          onComplete: this.completeHandler
        }
      );
      // console.log("Header to Main");
      return;
    }
    // From Main to Header
    if (
      this.target.scrollTop < this.viewportHeight &&
      event.deltaY < 0 &&
      !this.state.inHeader
    ) {
      this.setState({
        inHeader: true,
        isScrolling: true
      });
      TweenMax.to(this.target, 1, {
        scrollTop: 0,
        ease: "Power4.easeInOut",
        onComplete: this.completeHandler
      });
      //console.log("Main to Header");
      return;
    }

    // From Main to Footer
    if (
      this.target.scrollTop >= this.contentHeight - this.viewportHeight * 2 &&
      event.deltaY > 0 &&
      !this.state.inFooter
    ) {
      this.setState({
        inFooter: true,
        isScrolling: true
      });
      TweenMax.to(this.target, 1, {
        scrollTop: this.contentHeight - this.viewportHeight,
        ease: "Power4.easeInOut",
        onComplete: this.completeHandler
      });
      //console.log("Main to Footer");
      return;
    }

    // From Footer to Main
    if (
      this.target.scrollTop < this.contentHeight - this.viewportHeight &&
      event.deltaY < 0 &&
      this.state.inFooter
    ) {
      this.setState({
        inFooter: false,
        isScrolling: true
      });
      TweenMax.to(this.target, 1, {
        scrollTop: this.contentHeight - this.viewportHeight * 2,
        ease: "Power4.easeInOut",
        onComplete: this.completeHandler
      });
      //console.log("Footer to Main");
      return;
    }
  };

  render() {
    const { projects } = this.props.value.state;
    const currentProject = projects.filter(
      project => project.id === this.props.match.params.projectId
    )[0];
    const {
      info,
      images,
      headerImage,
      mobileImage,
      video,
      websiteLink,
      name,
      year,
      type,
      role,
      tools
    } = currentProject;
    const currentProjectIndex = projects.findIndex(
      project => project.id === currentProject.id
    );
    const nextProjectIndex =
      currentProjectIndex === projects.length - 1 ? 0 : currentProjectIndex + 1;
    const prevProjectIndex =
      currentProjectIndex === 0 ? projects.length - 1 : currentProjectIndex - 1;
    const nextProjectId = projects[nextProjectIndex].id;
    const prevProjectId = projects[prevProjectIndex].id;
    let nextProjectImg = null;
    let prevProjectImg = null;
    if (isBrowser || (isMobileOnly && window.orientation === 0)) {
      prevProjectImg = projects[prevProjectIndex].mobileImage;
      nextProjectImg = projects[nextProjectIndex].mobileImage;
    } else {
      prevProjectImg = projects[prevProjectIndex].images[0];
      nextProjectImg = projects[nextProjectIndex].images[0];
    }

    return (
      <div className="details-wrapper">
        <div
          className={`${
            isMobile ? "details-mobile" : "details"
          }-content-wrapper`}
          id="fullpage-wrapper"
          ref={this.contentRef}
          onWheel={this.scrollHandler}
        >
          <div className="details-content-header-wrapper">
            <div className="details-content-img">
              {isMobile && window.orientation === 0 ? (
                <img src={mobileImage} alt="project-img-header" />
              ) : (
                <img src={headerImage} alt="project-img-header" />
              )}
              <div />
            </div>

            <div className="details-content-title">
              <h1>{name}</h1>
            </div>
            <div className="details-content-info">
              <div>
                <div>
                  <h4 className="details-info-subTitle">Year</h4>
                </div>
                <div>
                  <p className="details-info-text">{year}</p>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="details-info-subTitle">Type</h4>
                </div>
                <div>
                  <p className="details-info-text">{type}</p>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="details-info-subTitle">Tools</h4>
                </div>
                <div>
                  <p className="details-info-text">{tools}</p>
                </div>
              </div>

              <div>
                <div>
                  <h4 className="details-info-subTitle">Role</h4>
                </div>
                <div>
                  <p className="details-info-text">{role}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="details-content">
            <Link
              to="/"
              id="close-link"
              onMouseEnter={this.mouseEnterHandler}
              onMouseMove={this.mouseMoveHandler}
              onMouseLeave={this.mouseLeaveHandler}
            >
              Close
            </Link>
            <p>{info}</p>
            {images.map((image, index) => (
              <img
                src={image}
                alt="project-img"
                className="slide-in"
                key={index}
              />
            ))}
            {video && (
              <div className="videoWrapper">
                <iframe
                  src={video}
                  title={name}
                  width="640"
                  height="360"
                  frameBorder="0"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  allowFullScreen={true}
                />
              </div>
            )}
            {websiteLink && (
              <div className="website-link-container">
                <a
                  href={websiteLink}
                  className="website-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={this.props.value.cursorIn}
                  onMouseLeave={this.props.value.cursorOut}
                >
                  Visit site
                </a>
              </div>
            )}
          </div>
          <div className={`prev-next-wrapper ${isMobile ? "mobile" : ""}`}>
            {isBrowser && (
              <div className="prev-project-wrapper">
                <div className="prev-overlay" />
                <div className="prev-link-wrapper">
                  <Link to={`/project/${prevProjectId}`}>Previous Project</Link>
                </div>
                <img
                  src={prevProjectImg}
                  alt="previous-project"
                  className="prev-project-image"
                />
              </div>
            )}
            <div className="next-project-wrapper">
              <div className="next-overlay" />
              <div className="next-link-wrapper">
                <Link to={`/project/${nextProjectId}`}>Next Project</Link>
              </div>
              <img
                src={nextProjectImg}
                alt="next-project"
                className="next-project-image"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectDetail);
