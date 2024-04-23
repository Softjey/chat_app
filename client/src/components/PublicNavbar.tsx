import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { NavbarItem } from "@nextui-org/react";
import Logo from "./UI/Logo";
import ThemeSwitcher from "./UI/ThemeSwitcher";

export default function PublicNavbar() {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
