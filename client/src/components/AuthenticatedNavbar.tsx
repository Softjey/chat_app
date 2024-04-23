import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import ThemeSwitcher from "./UI/ThemeSwitcher";
import { SignOut } from "./UI/SignOut";
import Logo from "./UI/Logo";

export default function AuthenticatedNavbar() {
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
        <NavbarItem>
          <SignOut />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
