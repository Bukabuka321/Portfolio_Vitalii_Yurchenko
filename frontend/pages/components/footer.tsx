import Link from "next/link";
import {
  BsGithub,
  BsFacebook,
  BsTelegram,
  BsGoogle,
  BsLinkedin,
} from "react-icons/bs";

const footer = () => {
  return (
    <div className="flex justify-center items-center w-full top-full sticky">
      <ul className="list-none flex items-center my-5">
        <li className="mx-2 py-2">
          <Link href={"/test"}>
            <BsGithub />
          </Link>
        </li>
        <li className="mx-2 py-2">
          <Link href={"/test"}>
            <BsFacebook />
          </Link>
        </li>
        <li className="mx-2 py-2">
          <Link href={"/test"}>
            <BsTelegram />
          </Link>
        </li>
        <li className="mx-2 py-2">
          <Link href={"/test"}>
            <BsGoogle />
          </Link>
        </li>
        <li className="mx-2 py-2">
          <Link href={"/test"}>
            <BsLinkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default footer;
