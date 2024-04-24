import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import ThemeSwitcher from "../UI/ThemeSwitcher";
import SignOut from "../UI/buttons/SignOut";
import Logo from "../UI/Logo";
import SearchField from "../UI/SearchField";

export default function AuthenticatedNavbar() {
  return (
    <Navbar classNames={{ wrapper: "max-w-full" }}>
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <SearchField />
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
