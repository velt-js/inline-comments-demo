import * as React from "react"
import { MessageSquareIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { CommentsSection } from "../CommentsSection"

interface RightSidebarProps {
  targetElementId: string;
}

export const RightSidebar = React.forwardRef<HTMLDivElement, RightSidebarProps>(
  ({ targetElementId }, ref) => {
    return (
      <div ref={ref} className="h-full">
        <div className="h-full bg-white dark:bg-black border-l shadow-lg w-[30rem]">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <MessageSquareIcon className="mr-2 h-5 w-5" />
              <span className="font-semibold">Comments</span>
            </div>
          </div>
          <div className="h-[calc(100%-60px)] overflow-auto">
            <CommentsSection targetElementId={targetElementId} />
          </div>
        </div>
      </div>
    )
  }
) 