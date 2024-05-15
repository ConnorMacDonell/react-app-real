import { IconType } from "react-icons";
import { FaArrowRightFromBracket, FaGauge, FaLocationCrosshairs, FaSnowflake, FaUser } from "react-icons/fa6";

export interface SidebarItem {
  icon: IconType;
  label: string;
  linkTo: string;
  group: string;
}

export interface SidebarItemProps {
  sidebarItems: SidebarItem[];
}

export const SidebarItems = [
  {
    icon: FaGauge,
    label: "Dashboard",
    linkTo: "/dashboard",
    group: ""
  },
  {
    icon: FaSnowflake,
    label: "Forecast",
    linkTo: "/forecast",
    group: ""
  },
  {
    icon: FaLocationCrosshairs,
    label: "Location",
    linkTo: "/location",
    group: ""
  },
  {
    icon: FaUser,
    label: "User Settings",
    linkTo: "/user_settings",
    group: "bottom"
  },
  {
    icon: FaArrowRightFromBracket,
    label: "Logout",
    linkTo: "/",
    group: "bottom"
  }
];