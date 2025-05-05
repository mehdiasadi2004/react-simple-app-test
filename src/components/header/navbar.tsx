import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/header/theme-switch";
import {
  TwitterIcon,
  DiscordIcon,
  SearchIcon,
} from "@/components/header/icons";
import { useNavigate } from "react-router-dom";
import AddCarForm from "../addCarForm/AddCarForm";

export const Navbar = () => {
  const searchInput = (
      <Input />
  );
  const navigate = useNavigate();

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky "
      className=" shadow-lg shadow-LightGrayBlue"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <div
            className="flex justify-start items-center gap-1  cursor-pointer"
            color="foreground"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="font-extrabold text-4xl font-serif">
              MOTOR SPORT
            </span>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem><AddCarForm/></NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};
