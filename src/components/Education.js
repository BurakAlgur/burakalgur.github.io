import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import pau from "../assets/pau.png";
import harvard from "../assets/harvard.png";
import btk from "../assets/btk.png";

const Education = () => {
  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0  lg:gap-y-36 xl:gap-y-44"
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                Education & <br />
                Certificates
              </h2>
              <p className="max-w-sm mb-16 md:mb-14 xl:mb-14 text-xl">
                To see my all certificates please click{" "}
                <a
                  href="https://drive.google.com/drive/folders/1eatTFozjPYn46zfqHrDka-dxVHr5jek9?usp=share_link"
                  className="text-gradient btn-link"
                >
                  here
                </a>
              </p>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl bg-edu ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <div className="h-72 sm:h-96 md:h-96 lg:h-72 xl:h-80 flex items-center justify-center">
                <img
                  className="group-hover:scale-125 transition-all duration-500 h-3/4"
                  src={pau}
                  alt="certificate-1"
                />
              </div>

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Bachelor's Degree</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">
                  Electrical & Electronics Engineering
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-10 mb-12 lg:mb-0"
          >
            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl bg-edu ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <div className="h-72 sm:h-96 md:h-96 lg:h-72 xl:h-80 flex items-center justify-center">
                <img
                  className="group-hover:scale-125 transition-all duration-500 h-1/3"
                  src={harvard}
                  alt="certificate-2"
                />
              </div>

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-36 transition-all duration-500 z-50 ">
                <span className="text-gradient">Verified Certificate</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white ">
                  CS50's Web Programming with Python and JavaScript
                </span>
              </div>

              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white ">
                  CS50's Web Programming with Python and JavaScript
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl bg-edu ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <div className="h-72 sm:h-96 md:h-96 lg:h-72 xl:h-80 flex items-center justify-center">
                <img
                  className="group-hover:scale-125 transition-all duration-500 h-2/5"
                  src={btk}
                  alt="certificate-3"
                />
              </div>

              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">
                  Certificate of Participation
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                <span className="text-3xl text-white">
                  Basic Network Technologies
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
