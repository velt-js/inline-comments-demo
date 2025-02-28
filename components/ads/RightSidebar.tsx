import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Ad } from "./AdCard"
import { VeltInlineCommentsSection, useVeltClient, useCommentUtils } from "@veltdev/react"
import { Checkbox } from "@/components/ui/checkbox"

interface RightSidebarProps {
  isOpen: boolean
  onClose: () => void
  selectedAd: Ad | null
}

export function RightSidebar({ isOpen, onClose, selectedAd }: RightSidebarProps) {
  const [title, setTitle] = React.useState("")
  const [type, setType] = React.useState("")
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("desc")
  const [showResolved, setShowResolved] = React.useState(false)
  const { client } = useVeltClient();
  const commentUtils = useCommentUtils();

  React.useEffect(() => {
    if (selectedAd) {
      setTitle(selectedAd.title)
      setType(selectedAd.type)
    }
  }, [selectedAd])

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "desc" ? "asc" : "desc")
  }

  const handleShowResolvedChange = (checked: boolean) => {
    setShowResolved(checked);
    
    if (checked) {
      commentUtils?.showResolvedCommentsOnDom();
    } else {
      commentUtils?.hideResolvedCommentsOnDom();
    }
  }

  const handleAddNewThread = () => {
    console.log(client);
    client?.setUiState({
        showComposer: true,
    });
  }

  if (!selectedAd) return null

  return (
    <Sidebar
      side="right"
      className={`w-80 border-l ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed right-0 top-16 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out bg-background`}
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
              <div className="flex justify-between p-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="show-resolved" checked={showResolved} onCheckedChange={handleShowResolvedChange} />
                  <Label htmlFor="show-resolved" className="text-xs">Show resolved</Label>
                </div>
                <Button variant="outline" size="sm" onClick={toggleSortOrder} className="text-xs">
                  Sort: {sortOrder === "desc" ? "Newest First" : "Oldest First"}
                </Button>
              </div>

              <VeltInlineCommentsSection
                targetElementId={selectedAd.id}
                sortBy="createdAt"
                sortOrder={sortOrder}
                composerPosition="bottom"
                shadowDom={false}
              />

                <Button variant="ghost" size="sm" onClick={handleAddNewThread} className="text-xs">
                  Add new thread
                </Button>

            </div>
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </Sidebar>
  )
} 