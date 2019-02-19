import React, { Component } from "react";
import projects from "./projects";

const Context = React.createContext();

export default class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      count: 0,
      slideDirection: "up",
      isCursorActive: false,
      sliderChangedNum: 0,
      isTransitioning: false,
      isAnimating: false,
      isImageLoaded: false
    };
  }
  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          setCount: currentCount => {
            this.setState({
              count: currentCount
            });
          },
          previousProject: () => {
            if (!this.state.isAnimating) {
              this.setState({
                slideDirection: "down",
                sliderChangedNum: this.state.sliderChangedNum + 1
              });
              if (this.state.count === 0) {
                this.setState({
                  count: this.state.projects.length - 1
                });
              } else {
                this.setState({
                  count: this.state.count - 1
                });
              }
            }
          },

          nextProject: () => {
            // console.log("before clicking next", this.state.count);
            if (!this.state.isAnimating) {
              this.setState({
                slideDirection: "up",
                sliderChangedNum: this.state.sliderChangedNum + 1
              });
              if (this.state.count === this.state.projects.length - 1) {
                this.setState({
                  count: 0
                });
              } else {
                this.setState({
                  count: this.state.count + 1
                });
              }
            }

            // console.log("after clicking next", this.state.count);
            // This is because the this.state.count does not get updated until the component has been re-rendered.
          },

          cursorIn: () => {
            this.setState({
              isCursorActive: true
            });
          },

          cursorOut: () => {
            this.setState({
              isCursorActive: false
            });
          },

          setIsTransitioning: () => {
            this.setState({
              isTransitioning: true
            });
          },

          setNotTransitioning: () => {
            this.setState({
              isTransitioning: false
            });
          },

          setAnimationStatus: status => {
            this.setState({
              isAnimating: status
            });
          },

          setImageStatus: () => {
            this.setState({
              isImageLoaded: true
            });
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { Provider };
export const Consumer = Context.Consumer;
