import Link from "next/link";
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
        <div className="bg-[#010012] fixed flex flex-col justify-center items-center w-full">
          <div className="w-full flex flex-col items-end">
            <button onClick={handleOnClick} className="text-white mx-3 my-3">
              <AiFillCloseCircle className=" w-7 h-7" />
            </button>
          </div>
          <div className=" flex flex-col items-start text-white text-xl  gap-5 mb-5">
            <Link
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/"}
            >
              Home
            </Link>
            <a
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href="#about"
            >
              About
            </a>
            <a
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href="#projects"
            >
              Projects
            </a>
            <Link
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/contact"}
            >
              Contact
            </Link>
            <Link
              onClick={handleOnClick}
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/reviews"}
            >
              Reviews
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
