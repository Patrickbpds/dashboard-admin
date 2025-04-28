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

import { usePathname } from "next/navigation";

const sideBarItems: {
  name: string;
  href: string;
  icon: React.ElementType;
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
  const pathname = usePathname();
  return (
    <Sidebar side="left">
      <SidebarHeader>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sideBarItems.map((item, index) => (
            <SidebarMenuItem key={index} href={item.ref}>   
              <SidebarMenuButton isActive={pathname === item.href}>
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
