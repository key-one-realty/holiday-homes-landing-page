"use client";
import React, { useState, useRef, useEffect, RefObject } from "react";
import Image from "next/image";
import ReactPlayer from "react-player/lazy";
import LoadingIcon from "./LoadingIcon";

const VideoSection = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);
  const modalContainerRef = useRef<HTMLDivElement | null>(null); // Update the type of modalContainerRef
  const handleModalScroll = () => {
    if (play) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      if (modalContainerRef.current) {
        // Check if modalContainerRef.current is not null
        modalContainerRef.current.style.top = `${window.scrollY}px`;
      }
    } else {
      document.body.style.overflow = "auto";
      document.body.style.height = "";
    }
  };

  useEffect(() => {
    handleModalScroll();
  }, [play]);

  const handlePlayBtn = () => {
    if (!play) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    setPlay(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (videoRef.current && !videoRef.current.contains(e.target as Node)) {
      setPlay(false);
    }
  };

  return (
    <section className="video w-full flex justify-center items-center">
      <div className="max-w-[81.481vw] flex flex-col-reverse lg:flex-row gap-8 justify-around lg:justify-between lg:gap-32 xl:justify-around items-center pb-28 w-full">
        <div className="lhs video-container bg-opacity-30 rounded-[10px] bg-lime-500 w-full lg:w-[35.402vw] h-[52.953vh] flex justify-start items-center">
          <div className="relative w-[90vw] lg:w-[35.865vw] h-[50.314vh]">
            <Image
              src="/video-thumbnail.jpeg"
              className="lg:ml-8 rounded-[10px] object-cover"
              alt="video"
              fill
            />
            <div className="play-button flex justify-center items-center absolute top-1/2 transform translate-x-[32.02vw] md:translate-x-[38.02vw] lg:translate-x-[32.02vw]  -translate-y-1/2 cursor-pointer">
              <div
                className="w-[20vw] md:w-[9.259vw] h-[14.257vh] relative cursor-pointer"
                onClick={handlePlayBtn}
              >
                <Image src="/play.svg" alt="play" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="rhs flex flex-col gap-4 justify-center items-center w-full lg:w-[423px]">
          <h2 className="text-[27.65px] text-center lg:text-left xl:text-[40px] font-extrabold text-text-color">
            Looking for a better way to manage your holiday home?
          </h2>
          <p className="text-text-color text-center text-sm md:text-base lg:text-left">
            We take out all the day-to-day issues of managing a holiday home
            rental and bring in happy faces and wide smiles.
          </p>
        </div>
      </div>
      {play && (
        <div className="flex flex-col">
          <div className="video-player text-center" ref={modalContainerRef}>
            <div ref={videoRef}>
              <p
                className="md:w-[53svw] text-right text-white cursor-pointer"
                onClick={() => setPlay(false)}
              >
                Close
              </p>
              <ReactPlayer
                width={"100%"}
                style={{
                  maxHeight: "50svh",
                }}
                height={"50svh"}
                url="https://www.youtube.com/watch?v=TvtVDwwRnSY&ab_channel=KeyOneHolidayHomes"
                fallback={<LoadingIcon />}
                playing={play}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoSection;
