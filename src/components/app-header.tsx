// import { Icon, UilApps, UilArrow, UilMessage, UilPicture, UilTimes, UilUser } from '@iconscout/react-unicons'
import { useEffect, useRef, useState } from "react";

import Icon from "@mdi/react";
import { useAppContext } from "../contexts/app-context";
import { Container } from "./container";
import { ThemeToggler } from "./theme-toggler";

import {
  mdiAccount,
  mdiApps,
  mdiClose,
  mdiHumanGreetingProximity,
  mdiImageFrame,
  mdiTools,
} from "@mdi/js";

interface Menu {
  title: string;
  href: string;
  icon?: any;
}

const Menus: Menu[] = [
  {
    title: "About",
    href: "#about",
    icon: mdiAccount,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: mdiTools,
  },
  {
    title: "Portofolio",
    href: "#portofolio",
    icon: mdiImageFrame,
  },
  {
    title: "Contactme",
    href: "#contactme",
    icon: mdiHumanGreetingProximity,
  },
];

export const AppHeader = () => {
  const appContext = useAppContext();
  const [openSidebar, setOpenSidebar] = useState(false);

  const openSidebarRef = useRef(false);

  const onResize = () => {
    if (openSidebarRef.current) {
      setOpenSidebar(false);
    }
  };

  const sidebarMode = (open: any, close: any) => {
    if (openSidebar) return open;

    return close;
  };

  useEffect(() => {
    openSidebarRef.current = openSidebar;
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="
        sticky
        top-0
        z-[1]
        before:content-['']
        before:absolute
        before:left-0
        before:right-0
        before:top-0
        before:bottom-0
        before:bg-light/75
        dark:before:bg-dark/75
        before:backdrop-blur-md
    "
    >
      {/* sidebar open overlay */}

      {sidebarMode(
        <div
          onClick={() => setOpenSidebar(false)}
          className="
            fixed
            z-[1]
            left-0
            right-0
            top-0
            bottom-0
            bg-dark/50
            dark:bg-light/50
            backdrop-blur-sm
        "
        ></div>,
        ""
      )}

      <Container className="relative flex items-center gap-3.5">
        {/* open sidebar */}
        <button
          onClick={() => setOpenSidebar(true)}
          className="hidden mobile:block"
          title="close sidebar"
        >
          <Icon path={mdiApps} size={1}></Icon>
        </button>

        {/* title */}
        <a
          href="#home"
          className={`text-2xl  ${appContext.onSectionActive(
            "home",
            "text-[var(--primary)]"
          )}`}
        >
          Profile
        </a>

        {/* menu */}
        <div
          className={`
            flex-1
            flex
            items-center
            gap-3.5
            mobile:fixed
            mobile:z-[1]
            mobile:flex-col
            mobile:items-start
            mobile:p-3
            mobile:top-0
            mobile:bottom-0
            mobile:left-0
            mobile:w-[200px]
            mobile:bg-[var(--body)]
            mobile:ease-in-out
            mobile:transition-transform
            ${sidebarMode(
              "mobile:translate-x-0",
              "mobile:translate-x-[-200px]"
            )}
        `}
        >
          {/* close sidebar */}
          <button
            className="hidden ml-auto mobile:block"
            title="close sidebar"
            onClick={() => setOpenSidebar(false)}
          >
            <Icon path={mdiClose} size={1}></Icon>
          </button>

          {/* menu items */}
          {Menus.map((menu, i) => (
            <a
              href={menu.href}
              key={i}
              className={`
                flex items-center gap-3.5
                ${appContext.onSectionActive(
                  menu.href.replace("#", ""),
                  "text-[var(--primary)]"
                )}
            `}
            >
              <Icon
                className="hidden mobile:block"
                path={menu.icon}
                size={1}
              ></Icon>
              <span>{menu.title}</span>
            </a>
          ))}
        </div>

        {/* theme toggler */}
        <ThemeToggler className="ml-auto"></ThemeToggler>
      </Container>
    </div>
  );
};
