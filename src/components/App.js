import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "../Context";
import { Consumer } from "../Context";
import { isMobile } from "react-device-detect";
import Cursor from "./Cursor";
import Content from "./Content";
import Backdrop from "./Backdrop";

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {value => {
            return (
              <BrowserRouter>
                <React.Fragment>
                  {!isMobile && (
                    <Cursor
                      isCursorActive={value.state.isCursorActive}
                      isCursorInCarousel={value.state.isCursorInCarousel}
                    />
                  )}

                  <div className="app">
                    {isMobile ? "" : <Backdrop />}
                    <Content />
                  </div>
                </React.Fragment>
              </BrowserRouter>
            );
          }}
        </Consumer>
      </Provider>
    );
  }
}
