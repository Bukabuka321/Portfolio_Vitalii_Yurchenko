interface IProjectItem {
  name: string;
  description: string;
}

const projects = [
  {
    id: 1,
    name: "The Wilder's Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
  {
    id: 2,
    name: "The Wilder's Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
  {
    id: 3,
    name: "The Wilder's Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et similique quas ipsa odit omnis quam possimus, voluptates aliquam, placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?",
  },
];

const ProjectItem = ({ name, description }: IProjectItem) => {
  return (
    <>
      <div className="px-10 lg:px-16">
        <h2 className="text-4xl font-bold mb-6">{name}</h2>
        <p className="font-sans">{description}</p>
      </div>
    </>
  );
};

export default ProjectItem;
