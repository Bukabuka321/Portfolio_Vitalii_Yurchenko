import { TbCircle1 } from "react-icons/tb";
import styles from "../../styles/Border.module.css";
import style from "../../styles/Back.module.css";

const About = () => {
  return (
    <div className={style.secondContainer}>
      <div className="w-screen flex justify-end mb-16">
        <div className="flex items-center mr-16">
          <TbCircle1 className="mr-2 w-24 h-24" />
          <h1 className="text-5xl font-bold">Let me tell you my story!</h1>
        </div>
      </div>
      <div className="w-full">
        <div className={styles.container}>
          <h2 className="text-2xl font-medium">Who am I?</h2>
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
