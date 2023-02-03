import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./Menu";

const BurgerMenu = () => {
  const [menu, setMenu] = useState(false);

  function handleOnClick() {
    setMenu(!menu);
  }

  return (
    <div className={menu ? "" : "w-full flex justify-end"}>
      <div className={menu ? "" : "fixed mx-2 my-2"}>
        {menu ? (
          ""
        ) : (
          <button onClick={handleOnClick}>
            <GiHamburgerMenu className="w-12 h-12" />
          </button>
        )}
        {menu ? (
          <div className="">
            <Menu menu={menu} setMenu={setMenu} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
