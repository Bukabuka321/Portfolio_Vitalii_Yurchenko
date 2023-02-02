/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styles from "../../styles/Back.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className="w-screen h-screen flex flex-col justify-center items-start lg: pl-9">
        <h1 className="text-6xl font-bold leading-[4rem] mb-10 sm:pl-9 lg:pl-0">
          Hi,
          <br /> I'm Vitalii,
          <br /> Full Stack Web Developer
        </h1>
        <button className="px-24 py-3 border border-white rounded-xl sm:mx-5 lg:mx-0">
          <Link href={"/contact"} className="font-light text-3xl">
            Contact me!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Landing;
