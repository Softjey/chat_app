"use client";

import sunIcon from "../../../public/icons/sun-icon.svg";
import moonIcon from "../../../public/icons/moon-icon.svg";
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Switch />;
  }

  return (
    <Switch
      defaultSelected
      color="secondary"
      isSelected={theme === "light"}
      onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <Image src={sunIcon} className={className} alt="Light mode" />
        ) : (
          <Image src={moonIcon} className={className} alt="Dark mode" />
        )
      }
    />
  );
}
