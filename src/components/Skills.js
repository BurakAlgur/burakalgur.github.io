import React from "react";

import Html from "../assets/skills/html.png";
import Css from "../assets/skills/css.png";
import Javascript from "../assets/skills/javascript.png";
import Reactjs from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import Typescript from "../assets/skills/typescript.png";
import Express from "../assets/skills/express.png";
import Python from "../assets/skills/python.png";
import Django from "../assets/skills/django.png";
import Flask from "../assets/skills/flask.png";
import Sql from "../assets/skills/sql.png";
import Mongo from "../assets/skills/mongo.png";
import Docker from "../assets/skills/docker.png";
import Git from "../assets/skills/git.png";
import Angular from "../assets/skills/angular.png";
import Next from "../assets/skills/next.webp";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col mb-12 lg:mb-0 ">
      <div className="flex flex-row justify-evenly	 mb-10 items-center">
        <div className="group relative flex cursor-pointer">
          <img
            src={Html}
            alt="html"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <div className="w-20 h-20">
                <CircularProgressbar
                  value={93}
                  styles={buildStyles({
                    pathColor: "darkorchid",
                    trailColor: "white",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Css}
            alt="css"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={81}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Javascript}
            alt="Javascript"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={87}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Reactjs}
            alt="react"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={85}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly	 mb-10 items-center">
        <div className="group relative flex cursor-pointer">
          <img
            src={Node}
            alt="Node"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={85}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Express}
            alt="Express"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={83}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Typescript}
            alt="Typescript"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={50}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Angular}
            alt="Angular"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={30}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly	 mb-10 items-center">
        <div className="group relative flex cursor-pointer">
          <img
            src={Python}
            alt="Python"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={70}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Django}
            alt="Django"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={40}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Flask}
            alt="Flask"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out rounded-full bg-slate-100"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={65}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Next}
            alt="Next"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={55}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-evenly	 mb-10 items-center">
        <div className="group relative flex cursor-pointer">
          <img
            src={Sql}
            alt="Sql"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={75}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Mongo}
            alt="Mongo"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={70}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Docker}
            alt="Docker"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={20}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="group relative flex cursor-pointer">
          <img
            src={Git}
            alt="Git"
            className="object-contain w-24 h-24 filter group-hover:blur-md transition duration-300 ease-in-out"
            style={{ opacity: 1, transform: "none" }}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out w-24 h-24 z-0 ">
            <div className="flex items-center justify-center h-full">
              <p className="smallScreen:text-md smallScreen:font-medium md:text-2xl font-bold lg:text-3xl text-white opacity-100 text-right">
                <div className="w-20 h-20">
                  <CircularProgressbar
                    value={80}
                    styles={buildStyles({
                      pathColor: "darkorchid",
                      trailColor: "white",
                    })}
                  />
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
