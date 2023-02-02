import Link from "next/link";
import BurgerMenu from "./BurgerMenu";

import { Oswald } from "@next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={oswald.className}>
      <div className="visible lg:invisible">
        <BurgerMenu />
      </div>
      <div className="invisible sm:visible flex justify-center">
        <ul className="w-2/5 flex justify-around py-5">
          <li className="hover:underline underline-offset-8 decoration-hover">
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/test"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/test"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/test"}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/test"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
