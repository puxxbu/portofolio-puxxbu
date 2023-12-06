// import { UilMoon, UilSun } from '@iconscout/react-unicons'

import Icon from "@mdi/react";
import { useAppContext } from "../contexts/app-context";
import { CustomProps } from "../interfaces";
import { mergeClassName } from "../utils";
import { mdiMoonFull, mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

export const ThemeToggler = (props: CustomProps) => {
  const appContext = useAppContext();

  return (
    <div
      onClick={() => appContext.toggleTheme()}
      className={mergeClassName(
        `
        rounded-full
        bg-[var(--primary)]
        text-[var(--primary-text)]
        p-[5.5px]
        flex
        items-center
        gap-[3.5px]
        relative
        after:content-['']
        after:absolute
        after:top-[4.5px]
        after:left-[7.5px]
        after:rounded-full
        after:w-[24px]
        after:h-[24px]
        after:bg-[var(--primary-text)]
        after:ease-in-out
        after:transition-transform
        ${appContext.themeMode(
          "after:translate-x-0",
          "after:translate-x-[calc(18px+5.5px)]"
        )}
    `,
        props
      )}
    >
      <Icon path={mdiWeatherNight} size={1}></Icon>
      <Icon path={mdiWeatherSunny} size={1}></Icon>
    </div>
  );
};
