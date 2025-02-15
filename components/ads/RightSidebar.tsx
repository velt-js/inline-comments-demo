import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Ad } from "./AdCard"
import { VeltInlineCommentsSection } from "@veltdev/react"

interface RightSidebarProps {
  isOpen: boolean
  onClose: () => void
  selectedAd: Ad | null
}

export function RightSidebar({ isOpen, onClose, selectedAd }: RightSidebarProps) {
  const [title, setTitle] = React.useState("")
  const [type, setType] = React.useState("")

  React.useEffect(() => {
    if (selectedAd) {
      setTitle(selectedAd.title)
      setType(selectedAd.type)
    }
  }, [selectedAd])

  if (!selectedAd) return null

  return (
    <Sidebar
      side="right"
      className={`w-80 border-l ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed right-0 h-full transition-transform duration-300 ease-in-out bg-background`}
    >
      <SidebarHeader className="border-b">
        <div className="flex w-full items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Ad Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div className="space-y-6 p-4">
              <h3 className="text-xl font-semibold text-primary">{selectedAd.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Type</p>
                  <p className="text-lg">{selectedAd.type}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">CTR</p>
                  <p className="text-lg">{selectedAd.ctr}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Impressions</p>
                  <p className="text-lg">{selectedAd.impressions.toLocaleString()}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Clicks</p>
                  <p className="text-lg">{selectedAd.clicks.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="performance">
            <div className="space-y-4 p-4 text-left">
              <h3 className="font-semibold">Performance Metrics</h3>
              <p>CTR: {selectedAd.ctr}</p>
              <p>Engagement Rate: 3.5%</p>
              <p>Conversion Rate: 2.1%</p>
            </div>
          </TabsContent>
          <TabsContent value="comments" className="">
            <div data-id={selectedAd.id}>
              <VeltInlineCommentsSection
                multiThread={false}
                targetElementId={selectedAd.id}
                shadowDom={false}
              />

            </div>
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  )
} 