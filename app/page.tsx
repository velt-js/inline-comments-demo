"use client"

import { AdsDashboard } from "@/components/AdsDashboard"
import YourAuthComponent from "@/components/YourAuthComponent"
import { VeltComments, VeltCommentsSidebar, VeltProvider } from "@veltdev/react"
import VeltCustomization from "@/components/velt-customization"
export default function AdsInventoryPage() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <YourAuthComponent />
      <VeltCustomization />
      <VeltComments popoverMode={true} textMode={false} commentPinHighlighter={false} dialogOnHover={false} popoverTriangleComponent={false} />
      <VeltCommentsSidebar pageMode={true} />
      <AdsDashboard />
    </VeltProvider>
  )
}

