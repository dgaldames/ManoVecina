"use client"
import React from 'react'
import { 
  //ChevronRight, 
  type LucideIcon } from "lucide-react"

import {
  Collapsible,
/*   CollapsibleContent, */
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
/*   SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem, */
} from "@/components/ui/sidebar"

import Link from 'next/link'

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
})
{

  return (
    <SidebarGroup className="mt-5">
      <SidebarGroupLabel className="text-sm">Funcionalidades</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible /* Creo que esta es la clave */
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
            <CollapsibleTrigger asChild>
            <Link href={item.url} passHref> {/* Con <Link aqui le pasamos la url de /dashboard/dashboard-ofrecer, en app-siderbar.tsx */}
              <SidebarMenuButton className="flex w-full items-center justify-start gap-1 rounded-md h-16 text-xl hover:!bg-orange-500 hover:!text-white" tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </Link>
            </CollapsibleTrigger>


              {/*  <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
