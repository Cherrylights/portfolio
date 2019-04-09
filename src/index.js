import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import IE from "./components/IE";
import { isSafari, isIE, isEdge } from "react-device-detect";
import ReactGA from "react-ga";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  isIE || isEdge ? <IE /> : <App />,
  document.getElementById("root")
);

if (isSafari) {
  window.onpageshow = event => {
    if (event.persisted) {
      window.location.reload();
    }
  };
}

//Google Analytics
ReactGA.initialize("UA-134734648-1");
ReactGA.pageview(window.location.pathname + window.location.search);

// console.log(
//   "%cDesigned and developed by Yikai 🚀, if you have any questions please contact me at zhangyikai@hotmail.com. Thanks for visiting, have a good one. 😃",
//   "background-color: black; color: white; padding: 5px; line-height: 1.5rem;"
// );

serviceWorker.register();
