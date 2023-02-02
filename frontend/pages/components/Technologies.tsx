import { TbCircle2 } from "react-icons/tb";
import BoxTech from "./BoxTech";
const Technologies = () => {
  return (
    <div className="bg-dark_back">
      <div className="w-full flex justify-start my-16">
        <div className="flex items-center ml-16">
          <TbCircle2 className="mr-2 w-24 h-24" />
          <h1 className="text-5xl font-bold">What ? can do?</h1>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full flex flex-row justify-around">
          <BoxTech />
          <BoxTech />
        </div>
        <div className="w-full flex flex-row justify-around">
          <BoxTech />
          <BoxTech />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
