import styles from "../../styles/BorderTech.module.css";

const techs = [
  {
    id: 1,
    name: "NEXT.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
  {
    id: 2,
    name: "NEXT.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
  {
    id: 3,
    name: "NEXT.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
  {
    id: 4,
    name: "NEXT.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
];

const BoxTech = () => {
  return (
    <>
      {techs.map((tech) => (
        <div key={tech.id} className={styles.container}>
          <h2 className="text-2xl font-medium text-[#1976D2]">{tech.name}</h2>
          <p className="font-light font-sans text-[#E9DDDD]">
            {tech.description}
          </p>
        </div>
      ))}
    </>
  );
};

export default BoxTech;
