import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Menu({ menu, setMenu }: any) {
  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div className="w-full flex justify-end ">
      {!menu ? (
        ""
      ) : (
        <div className="bg-[#010012] absolute flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col items-end">
            <button onClick={handleOnClick} className="text-white mx-3 my-3">
              <AiFillCloseCircle className=" w-7 h-7" />
            </button>
          </div>
          <div className=" flex flex-col items-start text-white text-xl  gap-5 mb-5">
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href=""
            >
              Home
            </a>
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href=""
            >
              About
            </a>
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href=""
            >
              Projects
            </a>
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href=""
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
