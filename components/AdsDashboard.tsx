"use client"

import * as React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { LeftSidebar } from "./ads/LeftSidebar"
import { AdCard, type Ad } from "./ads/AdCard"
import { RightSidebar } from "./ads/RightSidebar"
import { adsData } from "@/lib/data"
import { useSetDocument } from "@veltdev/react"
export function AdsDashboard() {
  const [selectedAd, setSelectedAd] = React.useState<Ad | null>(null)
  const [rightSidebarOpen, setRightSidebarOpen] = React.useState(false)

  const handleCardClick = (ad: Ad) => {
    setSelectedAd(ad)
    setRightSidebarOpen(true)
  }

  // Set the Velt document
  useSetDocument("inline-comments-dash-1", {documentName: "Inline Comments Dashboard"});

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <LeftSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-2 sm:p-4 md:p-6">
          <h1 className="mb-6 text-2xl font-bold">Ads Inventory</h1>
          <div className="space-y-4 w-full max-w-full md:max-w-[calc(100vw-20rem)] lg:max-w-[calc(100vw-32rem)] mx-auto">
            {adsData.map((ad) => (
              <AdCard key={ad.id} ad={ad} onClick={handleCardClick} />
            ))}
          </div>
        </main>

        <RightSidebar
          isOpen={rightSidebarOpen}
          onClose={() => setRightSidebarOpen(false)}
          selectedAd={selectedAd}
        />
      </div>
    </SidebarProvider>
  )
} 