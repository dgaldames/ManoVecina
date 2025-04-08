

import * as React from "react"
import {
/*   AudioWaveform,
  BookOpen,
  Bot,
  Command, */
  //Frame,
 //GalleryVerticalEnd,
/*   Map,
  PieChart,
  Settings2, */
  //SquareTerminal,
  BadgeDollarSign,
  ReceiptText,
  Contact,
  Wrench,
  Pencil,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
//import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
//import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
// SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import LogoutButton from "./logout-button"

// This is sample data.
const data = {
  user: {
    name: "Diego",
    /* avatar: "/dashboard-imgs/kurisu.png", */
  },
  /* teams: [
    {
      name: "ManoVecina",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ], */
  navMain: [
    {
      title: "Contratar Servicios",
      url: "/dashboard",
      icon:  ReceiptText,
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
      title: "Ofrecer Servicios",
      url: "/dashboard/dashboard-ofrecer",
      icon: BadgeDollarSign,
      isActive: true,
    },{
      title: "Mi Perfil",
      url: "/dashboard/dashboard-my-profile",
      icon: Contact,
    },
    {
      title: "Editar Perfil",
      url: "/dashboard/dashboard-edit-profile",
      icon: Pencil,
    },
    {
      title: "Ayuda/Soporte",
      url: "/dashboard/dashboard-soporte",
      icon: Wrench,
    },
    /* {
      title: "Cerrar Sesión",
      url: "#",
      icon: LogOut,
    } */
  ],
    projects: [
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
        <LogoutButton/>

        <Separator orientation="horizontal" className="h-min dark:bg-white " />

      </SidebarContent>

      <SidebarRail /> 
</Sidebar>
)
}
