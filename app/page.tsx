"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <main className="ctp-latte dark:ctp-mocha flex lg:relative flex-col">
      <div className="sticky top-0 max-h-0 z-10">
        <Navbar />
      </div>
      <div className="flex justify-center items-center min-h-screen" id="home">
        <div className="flex flex-col items-start text-6xl lg:text-8xl gap-2 m-16 lg:m-4">
          <motion.div
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            exit="hidden"
            variants={containerVariants}
          >
            <motion.div variants={fadeInLeft}>Cole</motion.div>
            <motion.div variants={fadeInLeft}>Baugh</motion.div>
            <div className="flex flex-col text-4xl lg:text-5xl my-8 gap-6">
              <motion.div className="text-ctp-rosewater" variants={fadeInLeft}>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    "Privacy",
                    1000,
                    "Security",
                    1000,
                    "Cyclist",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.div className="text-ctp-lavender" variants={fadeInLeft}>
                Studying Math and CS @ Arcadia University
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="flex min-h-screen justify-center items-center gap-16 lg:gap-[170px] mx-16 flex-col-reverse lg:flex-row py-16 lg:p-0"
        id="aboutme"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          variants={containerVariants}
          className="flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-11"
        >
          <motion.div className="text-5xl lg:text-6xl" variants={fadeIn}>
            About Me
          </motion.div>
          <motion.div
            className="lg:max-w-md text-ctp-subtext1"
            variants={fadeInLeft}
          >
            Hi! I&apos;m Cole Baugh, a Computer Science undergrad at Arcadia  
            university. I enjoy tinkering with hardware and software as well
            as learning new things. And I am obsessed with justifying my major
            in math by applying concepts from my theory classes to anywhere I can.
          </motion.div>
          <motion.div
            className="lg:max-w-md text-ctp-subtext1"
            variants={fadeInLeft}
          >
            When I am not trying to explain the importance and applications of automita 
            theory to my friends and family, I am usually running or biking.  I also enjoy
            competitive gaming, competing in CTF's. 
          </motion.div>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          variants={containerVariants}
          className="flex items-center"
        >
          <motion.div
            className="flex items-center shrink basis-auto rounded-full overflow-hidden w-[200px] lg:w-[400px] h-[200px] lg:h-[400px]"
            variants={fadeIn}
          >
            <Image
              src="/pfp.jpg"
              alt="Profile picture"
              priority={true}
              width={400}
              height={400}
            />
          </motion.div>
        </motion.div>
      </div>
      <div
        className="flex min-h-screen justify-center items-center my-8 py-16 lg:p-0"
        id="skills"
      >
        <motion.div
          className="flex flex-col items-center lg:items-start gap-4"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          variants={containerVariantsFast}
        >
          <motion.div variants={fadeInFast} className="text-5xl lg:text-6xl">
            Skills
          </motion.div>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-48 justify-center lg:justify-between lg:flex-wrap">
            <div className="flex flex-col text-3xl gap-2 items-center justify-center lg:items-start">
              <motion.div
                variants={fadeInFast}
                className="text-xl text-ctp-mauve"
              >
                Programming
              </motion.div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col items-center lg:items-start">
                <motion.div variants={fadeInFast}>Python</motion.div>
                {/* <motion.div variants={fadeInFast}>C</motion.div> %TODO */}
                <motion.div variants={fadeInFast}>Java</motion.div>
                <motion.div variants={fadeInFast}>Bash</motion.div>
                {/* <motion.div variants={fadeInFast}>Rust</motion.div> %TODO*/}
                <motion.div variants={fadeInFast}>SQL</motion.div>
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-2 items-center lg:items-start">
              <motion.div
                variants={fadeInFast}
                className="text-xl text-ctp-green"
              >
                Tools
              </motion.div>
              <div className="text-ctp-subtext0 gap-2 flex flex-col items-center lg:items-start">
                <motion.div variants={fadeInFast}>Git</motion.div>
                <motion.div variants={fadeInFast}>Github</motion.div>
                <motion.div variants={fadeInFast}>Linux</motion.div>
                <motion.div variants={fadeInFast}>Docker</motion.div>
                <motion.div variants={fadeInFast}>AWS</motion.div>
                <motion.div variants={fadeInFast}>ProxMox VE</motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex min-h-screen justify-center items-center p-16" id="projects">
        <motion.div
          className="flex flex-col items-center lg:items-start justify-start gap-8 max-w-5xl"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          exit="hidden"
          variants={containerVariants}
        >
          <motion.div variants={fadeInDown} className="text-5xl lg:text-6xl">
            Projects
            {/* %TODO replace with my projects */}
          </motion.div>
          <div className="flex flex-wrap gap-8 w-full justify-center lg:justify-start">
            <motion.div
              variants={fadeInDown}
              className="flex flex-col w-80 gap-4 border-ctp-mantle border-solid border-4 relative"
            >
              <a
                href="/ASTRO_STS.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-4 flex flex-col"
              >
                <Image
                  src="/ASTRO.jpg"
                  alt="ASTRO project"
                  priority={true}
                  width={400}
                  height={400}
                />
                <div className="mx-4 mb-3">
                  <div>ASTRO</div>
                  <div>
                    Arcadia Student Transformed Remote Observatory (ASTRO) 
                    is an effort to retrofit Arcadia University&apos;s 
                    observatory built in 1987 to be operated remotely.

                  </div>
                </div>
                <div className="absolute inset-0 bg-ctp-base opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
              </a>
            </motion.div>
            
            <motion.div
              variants={fadeInDown}
              className="w-80 border-ctp-mantle border-solid border-4 relative"
            >
              <a
                href="/amznreview.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-4 flex flex-col"
              >
                <Image
                  src="/amznreviewprev.jpg"
                  alt="Amazon Gift Card Review"
                  priority={true}
                  width={400}
                  height={400}
                />
                <div className="mx-4 mb-3">
                  <div>Amazon Gift Card Review</div>
                  <div>
                    Used Python and Weka to predict product star ratings based on review text.
                  </div>
                </div>
                <div className="absolute inset-0 bg-ctp-base opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
              </a>
            </motion.div>

            {/* <motion.div
              variants={fadeInDown}
              className="w-80 border-ctp-mantle border-solid border-4 relative"
            >
              <a
                href="https://github.com/eveev26/SpeechSummarizer"
                target="_blank"
                rel="noopener noreferrer"
                className="gap-4 flex flex-col"
              >
                <Image
                  src="/speechsummarizer.png"
                  alt="Speech Summarizer Banner"
                  priority={true}
                  width={400}
                  height={400}
                />
                <div className="mx-4 mb-3">
                  <div>Speech Summarizer</div>
                  <div>
                    A mobile app that summarizes long meetings into short
                    meeting summaries. Winner of Best Mobile Hack at Ignition
                    Hacks 2023
                  </div>
                </div>
                <div className="absolute inset-0 bg-ctp-base opacity-0 hover:opacity-60 transition-opacity duration-300 ease-in-out"></div>
              </a>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

const fadeInLeft: Variants = {
  hide: {
    opacity: 0,
    x: -20,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeInDown: Variants = {
  hide: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeIn: Variants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const fadeInFast: Variants = {
  hide: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const containerVariantsFast = {
  show: {
    transition: {
      staggerChildren: 0.25, // Delay children by 1 second
      delayChildren: 0.25, // Start delaying children after 1 second
    },
  },
};

const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.5, // Delay children by 1 second
      delayChildren: 0.5, // Start delaying children after 1 second
    },
  },
};
