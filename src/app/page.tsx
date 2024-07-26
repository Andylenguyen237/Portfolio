"use client";
import Image from "next/image";
import NavBar from "./NavBar";
import SolarCanvas from "./SolarCanvas";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BallCanvas from "./Ball";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-full flex-col items-center justify-between bg-gradient-to-r from-[#04081B] via-[#1B244D] to-[#04081B] overflow-hidden">
        <NavBar />
        <div className="flex w-screen h-screen flex-grow">
          <SolarCanvas />
        </div>
      </div>
      <div
        className="bg-cover bg-center h-screen w-full z-10 relative"
        style={{ backgroundImage: "url('/12.jpg')" }}
        data-aos="fade-up"
      >
        <div className="mt-32 text-4xl text-center text-white"></div>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          <div className="w-28 h-28" key="Javascript">
            <BallCanvas icon="javascript-1.png" />
            <BallCanvas icon="C.png" />
            <BallCanvas icon="java.jpg" />
            <BallCanvas icon="python.jpg" />
            <BallCanvas icon="html.png" />
            <BallCanvas icon="css.png" />
            <BallCanvas icon="typescript.svg" />
          </div>
        </div>
      </div>

      <div className="w-full h-screen content-center" data-aos="fade-up">
        <div className="grid grid-cols-2">
          <img src="astronaut.png" className="animate-upDown"></img>
          <p>Hi my name is Andy</p>
        </div>
      </div>

      <div className="flex h-screen flex-col items-center justify-between bg-gradient-to-r from-[#04081B] via-[#1B244D] to-[#04081B] overflow-hidden">
        <div
          className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
          data-aos="fade-up"
        >
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">This page</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              About me{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">More</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Projects{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Blah blah</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Resume{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              Haha
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
