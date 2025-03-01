"use client"

import * as React from "react"
import { MessageSquareIcon } from "lucide-react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LeftSidebar } from "./ads/LeftSidebar"
import { RightSidebar } from "./ads/RightSidebar"
import { Button } from "./ui/button"
import { type Ad } from "./ads/AdCard"
import { adsData } from "@/lib/data"
import { useSetDocument } from "@veltdev/react"

export function AdsDashboard() {
  // Set the Velt document
  useSetDocument("inline-comments-dash-2", {documentName: "Inline Comments Dashboard"});
  
  // State to control the visibility of the right sidebar
  const [showComments, setShowComments] = React.useState(false);
  
  // Reference to the right sidebar
  const rightSidebarRef = React.useRef<HTMLDivElement>(null);
  const rightSidebarButtonRef = React.useRef<HTMLButtonElement>(null);
  
  // Handle clicking outside of the sidebar
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        showComments &&
        rightSidebarRef.current &&
        !rightSidebarRef.current.contains(event.target as Node) &&
        rightSidebarButtonRef.current &&
        !rightSidebarButtonRef.current.contains(event.target as Node)
      ) {
        // If click is outside the sidebar and not on the toggle button, close the sidebar
        setShowComments(false);
      }
    };

    // Add event listener when sidebar is open
    if (showComments) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showComments]);
  
  return (
    <SidebarProvider>
      <div className="flex h-screen relative">
        <LeftSidebar />

        {/* Main Content - Using a fixed width that doesn't change */}
        <main className="flex-1 overflow-auto p-4 md:p-8 mx-auto max-w-4xl" id="ads-dashboard">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Ads Inventory</h1>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1"
              ref={rightSidebarButtonRef}
            >
              <MessageSquareIcon className="h-4 w-4" />
              {showComments ? "Hide Comments" : "Show Comments"}
            </Button>
          </div>
        </main>
        
        {/* Right Sidebar for Comments - positioned absolutely */}
        {showComments && (
          <div className="fixed top-0 right-0 h-screen z-20">
            <RightSidebar targetElementId="ads-dashboard" ref={rightSidebarRef} />
          </div>
        )}
      </div>
    </SidebarProvider>
  )
} 