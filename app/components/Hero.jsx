"use client";
import React, { useState } from "react";

const HeroComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      {isVisible && (
        <div className="title-panel text-title h-full grid auto-rows-fr items-center grid-cols-max-1fr font-bold font-barlow">
          <div className="text-9xl [writing-mode:vertical-lr]"> W </div>
          <div className="text-5xl leading-none"> atch </div>
          <div className="text-9xl [writing-mode:vertical-lr]"> B </div>
          <div className="text-5xl"> efore </div>
          <div className="text-9xl [writing-mode:vertical-lr]"> Y </div>
          <div className="text-5xl"> ou </div>
          <div className="text-9xl [writing-mode:vertical-lr]"> D </div>
          <div className="text-5xl"> ie </div>
        </div>
      )}
      {!isVisible && (
        <div className="about-panel">
          <p className="p-3 text-lg">
            If you feel that we share the same kind of{" "}
            <span className="text-title">taste</span> and think of any
            worthwhile addition to this list, please feel free to{" "}
            <a
              className="underline"
              href="https://github.com/ngermeau/watch-before-you-die/issues/new"
            >
              send a request.
            </a>
          </p>
          <p className="p-3">
            Made on{" "}
            <a
              href="https://github.com/ngermeau/wbyd-client"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="w-6 inline-block m-1" src="images/github.png" />
            </a>
          </p>
        </div>
      )}
      <div className="absolute border-2 border-text font-barlow text-1xl bottom-2 right-2 padding px-2 py-4 animate-entranceAbout">
        <button
          className="underline font-bold about-button text-title"
          onClick={toggleVisibility}
        >
          {" "}
          about{" "}
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
