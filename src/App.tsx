import { useEffect, useState } from "react";

import "./App.css";
import { AppContext } from "./contexts/app-context";
import { AppHeader } from "./components/app-header";
import { AppBody } from "./components/app-body";
import { AppFooter } from "./components/app-footer";

type Theme = "light" | "dark";
function App() {
  const [sectionActive, setSectionActive] = useState("home");

  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem("@theme-mode") as Theme) || "light"
  );

  const initTheme = () => {
    document.documentElement.setAttribute("data-mode", theme);
    localStorage.setItem("@theme-mode", theme);
  };

  useEffect(() => {
    initTheme();
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        onSectionActive(id, val) {
          if (sectionActive === id) return val;
        },
        sectionActive,
        setSectionActive,
        toggleTheme() {
          switch (theme) {
            case "dark":
              setTheme("light");
              break;

            default:
              setTheme("dark");
              break;
          }
        },
        themeMode(light, dark) {
          switch (theme) {
            case "dark":
              return dark;

            default:
              return light;
          }
        },
      }}
    >
      {/* header */}
      <AppHeader></AppHeader>
      {/* body */}
      <AppBody></AppBody>
      {/* footer */}
      <AppFooter></AppFooter>
    </AppContext.Provider>
  );
}

export default App;
