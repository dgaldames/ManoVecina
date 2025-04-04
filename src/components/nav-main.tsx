"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
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
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup className="mt-5">
      <SidebarGroupLabel className="text-sm">Funcionalidades</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isCurrent = pathname === item.url
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <Link href={item.url} passHref>
                    <SidebarMenuButton
                      className={`
                        flex w-full items-center justify-start gap-1 rounded-md h-16 text-xl
                        hover:!bg-orange-500 hover:!text-white
                        ${isCurrent ? "bg-orange-500 text-white" : ""}
                      `}
                      tooltip={item.title}
                    >
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
