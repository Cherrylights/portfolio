import React from "react";
import { isMobile } from "react-device-detect";

export default function Overlay() {
  const overlay = [1, 2, 3, 4, 5, 6];
  if (isMobile) {
    return (
      <div className="overlay-wrapper">
        <div className="overlay-mobile" id="overlay-mobile-1" />
      </div>
    );
  }

  return (
    <div className="overlay-wrapper">
      {overlay.map(index => {
        return <div className="overlay" id={`overlay-${index}`} key={index} />;
      })}
    </div>
  );
}
