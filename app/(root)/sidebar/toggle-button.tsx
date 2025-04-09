"use client";

import { Switch } from "@/components/ui/switch";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const handleSwithch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="mb-20 flex flex-col justify-center items-center">
      <Switch onClick={handleSwithch}></Switch>

      {theme === "dark" ? (
        <MoonIcon color="#022D62" />
      ) : (
        <SunIcon color="#FFF54E" />
      )}
    </div>
  );
}

export default ToggleButton;
