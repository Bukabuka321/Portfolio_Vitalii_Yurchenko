import { TbCircle3 } from "react-icons/tb";
import ProjectItem from "./ProjectsItem";

const Projects = () => {
  return (
    <div className="mb-6">
      <div className="w-full flex justify-start lg:justify-end my-16">
        <div className="flex flex-col ml-3 lg:flex-row lg:items-center lg:mr-16">
          <TbCircle3 className="mr-2 w-24 h-24" />
          <h1 className="text-4xl lg:text-5xl font-bold">
            Checkout my projects!
          </h1>
        </div>
      </div>
      <div className="w-full ">
        <ul className=" w-full flex flex-col gap-5">
          <li className="w-full lg:w-3/6  lg:self-end lg:text-right">
            <ProjectItem
              name={"The Wilder's book"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Etsimilique quas ipsa odit omnis quam possimus, voluptates aliquam,placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?"
              }
            />
          </li>
          <li className="w-full lg:w-3/6">
            <ProjectItem
              name={"The Wilder's book"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Etsimilique quas ipsa odit omnis quam possimus, voluptates aliquam,placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?"
              }
            />
          </li>
          <li className="w-full lg:w-3/6 lg:self-end lg:text-right">
            <ProjectItem
              name={"The Wilder's book"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Etsimilique quas ipsa odit omnis quam possimus, voluptates aliquam,placeat pariatur, quos dolore. Numquam eum sit asperiores pariatur dolores accusantium totam?"
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
