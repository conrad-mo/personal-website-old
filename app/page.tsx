"use client";
import Navbar from "../components/navbar";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

export default function Home() {
  const parallax = useRef<IParallax>(null!);
  return (
    <main className="w-full h-full ctp-latte dark:ctp-mocha">
      <Parallax ref={parallax} pages={4}>
        <ParallaxLayer offset={1} speed={0} className="bg-purple-600" />
        <ParallaxLayer offset={2} speed={0} className="bg-blue-500" />
        {/* <ParallaxLayer offset={3} speed={0} className="bg-green-500" /> */}
        <ParallaxLayer offset={3} speed={0} className="bg-ctp-base" />
        <ParallaxLayer offset={0} speed={1} className="pointer-events-none">
          <Image
            src="/pfp.jpg"
            alt="Profile picture"
            priority={true}
            width={400}
            height={400}
          />
        </ParallaxLayer>
      </Parallax>
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
