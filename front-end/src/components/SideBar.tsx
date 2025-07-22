import type { IconType } from "react-icons";
import { FaUsers } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { MdVideoLibrary } from "react-icons/md";

import { Link, useLocation } from "react-router-dom";

type SideBarSectionsType = {
  id: string;
  link: string;
  name: string;
  icon: IconType;
};

export const SideBar = () => {
  const sideBarSections: SideBarSectionsType[] = [
    {
      id: "home",
      link: "/",
      name: "Users",
      icon:FaUsers,
    },

    {
      id: "tutorials",
      link: "/tutorials",
      name: "Tutorials",
      icon: MdVideoLibrary,
    },
    {
      id: "afiliates",
      link: "/afiliates",
      name: "Afiliates",
      icon: TbListDetails,
    },
  ];

  const location = useLocation();
  const path = location.pathname;
  const activeSection = sideBarSections.find((section) => {
    if (section.link === "/") {
      return path === "/";
    }
    return path.startsWith(section.link);
  })?.id;

  return (
    <aside className="w-64 h-dvh bg-[linear-gradient(296.61deg,_#00CF67_13.41%,_#009C4E_29.39%,_#008542_54.49%,_#006131_68.42%,_#004A25_99.14%)] left-0 top-0">
      <div className="flex justify-start items-center gap-x-5 border-b-2 border-white p-2 h-20">
        <img src="/logo.svg" alt="" className="w-[15%]" />
        <h1 className="text-2xl font-semibold text-secondary">Course-seller</h1>
      </div>
      <ul className="flex justify-center flex-col gap-y-5 pt-5">
        {sideBarSections.map((Section) => (
          <li key={Section.id} className="text-base font-semibold text-black">
            <Link
              to={Section.link}
              className={`flex justify-start items-center  border-b-[1px] gap-x-3 border-gray-500 pl-7 hover:bg-green-800 p-2 rounded-md  ${
                activeSection === Section.id ? "bg-green-800" : ""
              }`}
            >
              <Section.icon size={22} className="text-white" />
              {Section.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
