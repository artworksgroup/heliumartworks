export type SidebarLink = {
  icon: any;
  label: String;
  to: string;
};

const buildSidebarLinks = (): Array<SidebarLink> => [
  {
    to: "/dashboard",
    label: "home",
    icon: resolveComponent("HomeIcon"),
  },
  {
    to: "/dashboard/medias",
    label: "Medias",
    icon: resolveComponent("ImageIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Sells",
    icon: resolveComponent("ReceiptTextIcon"),
  },
  {
    to: "/dashboard/downloads",
    label: "Downloads",
    icon: resolveComponent("ImportIcon"),
  },
  {
    to: "/dashboard/settings",
    label: "Settings",
    icon: resolveComponent("SettingIcon"),
  },
  /* {
    to: "/dashboard/profile",
    label: "Users",
    icon: resolveComponent("PeopleIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Moderators",
    icon: resolveComponent("CubeIcon"),
  },
  {
    to: "/dashboard/profile",
    label: "Tickets",
    icon: resolveComponent("MoreIcon2"),
  }, */
  {
    to: "/dashboard/profile",
    label: "Administration",
    icon: resolveComponent("SmsIcon"),
  },
];

export { buildSidebarLinks };
