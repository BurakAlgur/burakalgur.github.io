import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [exp, setExp] = useState();
  const [isMonth, setIsMonth] = useState(true);

  useEffect(() => {
    const date = new Date();
    const firstJobStartDate = new Date("2022-02-18");
    const internship = 4;
    const year = date.getFullYear() - firstJobStartDate.getFullYear();
    const month = date.getMonth() - firstJobStartDate.getMonth();
    const totalMonth = year * 12 + month + internship;
    if (totalMonth >= 48) {
      setExp(Math.floor(totalMonth / 12));
      setIsMonth(false);
    } else {
      setExp(totalMonth);
    }
  }, []);

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">I am a Full Stack Software Engineer.</h3>
            <p className="mb-6">
              Love learning new things or tools every day. Special interest in
              technology and ability to quickly learn new concepts, and
              software. Effective team member offering critical thinking and
              practical solutions.
            </p>

            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] text-gradient mb-2">
                  {inView ? <CountUp start={0} end={exp} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  {isMonth ? "Months of" : "Years of"} <br /> Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
