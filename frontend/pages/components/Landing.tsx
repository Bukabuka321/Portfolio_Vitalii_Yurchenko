/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "../../styles/Back.module.css";
import Socials from "./Socials";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className="w-screen h-screen flex flex-col justify-center items-start lg: pl-9">
        <h1 className="text-6xl font-bold leading-[4rem] mb-10 sm:pl-9 lg:pl-0">
          Hi,
          <br /> I'm Vitalii,
          <br /> Full Stack Web Developer
        </h1>
        <button className="px-20 mb-4 lg:px-28 py-3 border border-white rounded-xl sm:mx-5 lg:mx-0">
          <Link href={"/contact"} className="font-light text-3xl">
            Contact me!
          </Link>
        </button>

        <button className="px-12 lg:px-20 py-3 border border-white rounded-xl sm:mx-5 lg:mx-0">
          <Link
            href="/CV_VITALII_YURCHENKO_DE.pdf"
            className="font-light text-3xl"
            locale={false}
          >
            Download resume!
          </Link>
        </button>
        <Socials />
      </div>
    </div>
  );
};

export default Landing;

// import React from 'react'
// import CV from '../../assets/bg.jpg'

// const CTA = () => {
// return (
// <div className='cta'>
// <a href={CV} download className='btn'>Download CV</a>
// <a href="#contact" className="btn btn-primary">Send Message</a>
// </div>
// )
// }

// export default CTA
