import Link from "next/link";
import {
  BsGithub,
  BsFacebook,
  BsTelegram,
  BsGoogle,
  BsLinkedin,
} from "react-icons/bs";

const icons = [
  {
    id: 1,
    image: <BsGithub className="w-5 h-5 lg:w-8 lg:h-8" />,
    link: "https://github.com/WildCodeSchool/2022-09-JS-RemoteEN-Project-2-Team-3",
  },
  {
    id: 2,
    image: <BsFacebook className="w-5 h-5 lg:w-8 lg:h-8" />,
    link: "test",
  },
  {
    id: 3,
    image: <BsTelegram className="w-5 h-5 lg:w-8 lg:h-8" />,
    link: "test",
  },
  {
    id: 4,
    image: <BsGoogle className="w-5 h-5 lg:w-8 lg:h-8" />,
    link: "20uva02@gmail.com",
  },
  {
    id: 5,
    image: <BsLinkedin className="w-5 h-5 lg:w-8 lg:h-8" />,
    link: "https://www.linkedin.com/in/vitalii-yurchenko-2299211ab/",
  },
];
const Socials = () => {
  return (
    <div className="">
      <ul className="list-none flex items-center my-5">
        {icons.map((icon) => (
          <li
            className="mx-5 py-5 first:ml-0 md:first:ml-5 lg:first:ml-0"
            key={icon.id}
          >
            <Link href={`${icon.link}`}>{icon.image}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
