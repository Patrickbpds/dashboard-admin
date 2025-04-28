"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "./ui/sidebar";
import { Home, Users, Settings, GitPullRequestArrow } from "lucide-react";

const sideBarItems: {
  name: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
  },
  {
    name: "Support",
    href: "/requests",
    icon: GitPullRequestArrow,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function AppSideBar() {
  return (
    <Sidebar side="left">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sideBarItems.map((item, index) => (
            <SidebarMenuItem key={index} href={item.ref}>
              <SidebarMenuButton>
                <item.icon />
                <span>{item.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
