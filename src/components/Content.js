import React, { Component } from "react";
import { Consumer } from "../Context";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Me from "./Me";
import ProjectDetails from "./ProjectDetails";
import NotFound from "./NotFound";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Content extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <TransitionGroup className="route-wrapper">
              <CSSTransition
                classNames="transition"
                key={this.props.location.key}
                appear={true}
                timeout={{ enter: 3000, exit: 1500 }}
                onEntering={value.setIsTransitioning}
                onEntered={value.setNotTransitioning}
              >
                <Switch location={this.props.location}>
                  <Route exact path="/" render={() => <Home value={value} />} />
                  <Route
                    path="/project/:projectId"
                    render={() => <ProjectDetails value={value} />}
                  />
                  <Route
                    exact
                    path="/about"
                    render={() => (
                      <About
                        cursorIn={value.cursorIn}
                        cursorOut={value.cursorOut}
                      />
                    )}
                  />
                  <Route
                    exact
                    path="/me"
                    render={() => (
                      <Me
                        cursorIn={value.cursorIn}
                        cursorOut={value.cursorOut}
                      />
                    )}
                  />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      </Consumer>
    );
  }
}

export default withRouter(Content);
