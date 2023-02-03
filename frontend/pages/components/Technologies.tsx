import { TbCircle2 } from "react-icons/tb";
import BoxTech from "./BoxTech";
const Technologies = () => {
  return (
    <div className="">
      <div className="w-full flex flex-col lg:flex-row lg:justify-start my-16">
        <div className="flex flex-col items-end mr-3 lg:flex-row lg:items-center lg:ml-16">
          <TbCircle2 className="mr-2 w-24 h-24" />
          <h1 className="text-4xl lg:text-5xl font-bold">What ? can do?</h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:flex-wrap lg:flex-row lg:justify-around gap-10">
        <BoxTech />
      </div>
    </div>
  );
};

export default Technologies;
