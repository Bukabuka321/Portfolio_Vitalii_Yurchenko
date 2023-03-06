import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import { Oswald } from "@next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

const Header = () => {
  return (
    <div className={oswald.className}>
      <div className="visible lg:invisible">
        <BurgerMenu />
      </div>
      <div className="invisible lg:visible flex justify-center">
        <ul className="w-2/5 flex justify-around py-5">
          <li className="hover:underline underline-offset-8 decoration-hover">
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href={"#about"}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:underline underline-offset-8 decoration-hover"
              href={"#projects"}
            >
              Projects
            </a>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline underline-offset-8 decoration-hover"
              href={"/reviews"}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
