import {
    Sidebar,
    SidebarContent,
    SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem,
    SidebarRail
} from "@/components/ui/sidebar.tsx";
import {AppWindowMac, ChevronDownIcon, ChevronRight, Menu, User2} from "lucide-react";
import {Link} from "react-router-dom";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";

export default function LayoutSideBar({...props}: React.ComponentProps<typeof Sidebar>) {
    // const navigate = useNavigate();
    return (
        <Sidebar collapsible="icon" {...props}>
            {/*헤더*/}
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link to="/admin" className="cursor-pointer!">
                            <SidebarMenuButton
                                size="lg"
                                className="data-[slot=sidebar-menu-button]:p-1.5!"
                            >
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    <AppWindowMac className="size-5!"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Acme Inc</span>
                                    <span className="truncate text-xs">Enterprise</span>
                                </div>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            {/*컨텐츠*/}
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Admin</SidebarGroupLabel>
                    <SidebarMenu>
                        <Collapsible
                            key ={'collapsible1'}
                            asChild
                            defaultOpen={true}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild className="w-full">
                                    <SidebarMenuButton >
                                        <Menu/>
                                        <span>시스템관리</span>
                                        <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90"/>
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub className="">
                                        <SidebarMenuSubItem key="asdasdkl;1">
                                            <Link to={'/admin/menuInfo'}>
                                                <SidebarMenuSubButton asChild>
                                                    <span>메뉴관리</span>
                                                </SidebarMenuSubButton>
                                            </Link>
                                        </SidebarMenuSubItem>
                                        <SidebarMenuSubItem  key="asdasdkl;2">
                                            <Link to={'/admin/userInfo'}>
                                                <SidebarMenuSubButton asChild>
                                                    <span>사용자관리</span>
                                                </SidebarMenuSubButton>
                                            </Link>
                                        </SidebarMenuSubItem>
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>

            {/*푸터*/}
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <User2/>
                            <span>Username</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}