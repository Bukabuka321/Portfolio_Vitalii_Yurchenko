import { TbCircle1 } from "react-icons/tb";
import styles from "../../styles/Border.module.css";
import style from "../../styles/Back.module.css";

const About = () => {
  return (
    <div className={style.secondContainer}>
      <div className="flex justify-start lg:w-screen lg:justify-end mb-16 ">
        <div className="flex flex-col items-start ml-3 lg:flex lg:flex-row lg:items-center lg:mr-16">
          <TbCircle1 className="mr-2 w-24 h-24" />
          <h1 className="text-4xl lg:text-5xl font-bold">
            Let me tell you my story!
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-y-9 lg:flex-row lg:justify-between lg:px-6">
        <div className={styles.container}>
          <h2 className="text-2xl font-medium mb-2">Who am I?</h2>
          <p className="font-light font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            similique quas ipsa odit omnis quam possimus, voluptates aliquam,
            placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur
            dolores accusantium totam?
          </p>
        </div>
        <div className={styles.container}>
          <h2 className="text-2xl font-medium mb-2">Additional information</h2>
          <p className="font-light font-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
            similique quas ipsa odit omnis quam possimus, voluptates aliquam,
            placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur
            dolores accusantium totam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
