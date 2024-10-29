import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Skills from "./Skills";

const Experience = () => {
  const workExperience = [
    {
      name: "Huawei - Frontend Developer",
      description:
        "Working on R&D projects mostly using React, TypeScript and Angular",
      startDate: "2023/11",
      finishDate: "present",
      link: "https://www.linkedin.com/company/sammteknoloji/",
    },
    {
      name: "Samm Technology - Full Stack Software Engineer",
      description:
        "Creating web applications and writing microservices for ERP mostly using React, Node.js, Flask, MongoDB, MsSQL and Oracle Cloud Services",
      startDate: "2022/02",
      finishDate: "2023/10",
      link: "https://www.linkedin.com/company/sammteknoloji/",
    },

    {
      name: "DDTECH – Frontend Development Internship ",
      description:
        "Creating user interfaces for dynamic web forms and web pages using Html, Css, Javascript and React",
      startDate: "2021/08",
      finishDate: "2021/10",
      link: "https://www.linkedin.com/company/ddtechnology/",
    },

    {
      name: "Samm Technology - Quality Control Internship",
      description:
        "Testing of fiber optic cables with different devices according to ISO standards",
      startDate: "2021/02",
      finishDate: "2021/03",
      link: "https://www.linkedin.com/company/sammteknoloji/",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 mix-blend-lighten mb-12 lg:mb-0 mr-0 lg:mr-10"
          >
            <h2 className="h2 text-accent mb-6 flex justify-center">
              <>Skills & Experience</>
            </h2>
            <Skills />
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              {workExperience.map((wExp, index) => {
                const { name, description, startDate, finishDate, link } = wExp;
                return (
                  <div
                    className="border-b border-white/20 h-[126px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[16px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <p className="text-gradient text-sm font-tertiary">
                        {finishDate}
                        <br />
                        {startDate}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
