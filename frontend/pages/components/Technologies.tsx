import { TbCircle2 } from "react-icons/tb";
import BoxTech from "./BoxTech";
const Technologies = () => {
  return (
    <div className="">
      <div className="w-full flex justify-start my-16">
        <div className="flex items-center ml-16">
          <TbCircle2 className="mr-2 w-24 h-24" />
          <h1 className="text-5xl font-bold">What ? can do?</h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-10">
        <BoxTech />
      </div>
    </div>
  );
};

export default Technologies;
