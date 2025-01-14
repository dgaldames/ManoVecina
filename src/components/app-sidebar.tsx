"use client"

import * as React from "react"
import {
/*   AudioWaveform,
  BookOpen,
  Bot,
  Command, */
  //Frame,
  GalleryVerticalEnd,
/*   Map,
  PieChart,
  Settings2, */
  //SquareTerminal,
  BadgeDollarSign,
  ReceiptText,
  Star,
  Contact,
  Wrench,
  LogOut,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"

// This is sample data.
const data = {
  user: {
    name: "Diego",
    email: "galdamesdiego98@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "ManoVecina",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Ofrecer Servicios",
      url: "/dashboard/dashboard-ofrecer",
      icon: BadgeDollarSign,
      isActive: true,
      /* items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ], */
    },{
      title: "Contratar Servicios",
      url: "/dashboard",
      icon:  ReceiptText,
      isActive: true,
    }
  ],
  projects: [
    {
      name: "Favoritos",
      url: "#",
      icon: Star,
    },
    {
      name: "Mi Perfil",
      url: '#',
      icon: Contact,
    },
    {
      name:"Ayuda/Soporte",
      url: "#",
      icon: Wrench,
    },
    {
      name: "Cerrar Sesión",
      url: "#",
      icon: LogOut,
    }
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
return (
<Sidebar className="transition-all duration-200 ease-in-out" collapsible="icon" {...props}>
  <SidebarHeader>
    <NavUser user={data.user} /> 
  </SidebarHeader>

  <Separator orientation="horizontal" className="h-min2 dark:bg-white " />

  <SidebarContent>
    <NavMain items={data.navMain}/>

    <Separator orientation="horizontal" className="h-min dark:bg-white " />

    <NavProjects projects={data.projects} />
  </SidebarContent>

  <SidebarFooter>
    <TeamSwitcher teams={data.teams} />
  </SidebarFooter>

  <SidebarRail />
</Sidebar>
)
}
