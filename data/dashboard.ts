import type { RouteLocationRaw } from "vue-router";

export type SidebarLink = {
  icon: any;
  label: String;
  to: RouteLocationRaw;
};

const sidebarLinks: Array<SidebarLink> = [
  {
    to: "/dashboard/home",
    label: "home",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "dashboard-profile",
    label: "Medias",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Sells",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Downloads",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Profile",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Settings",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Users",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Moderators",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Tickets",
    icon: resolveComponent("SmsIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Administration",
    icon: resolveComponent("SmsIcon"),
  },
];

export { sidebarLinks };
