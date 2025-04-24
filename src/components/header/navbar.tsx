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

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
    const navigate = useNavigate();
  
  return (
    <HeroUINavbar maxWidth="xl" position="sticky " className=" shadow-lg shadow-LightGrayBlue">
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
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
      </NavbarContent>
    </HeroUINavbar>
  );
};
