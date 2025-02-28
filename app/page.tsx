"use client"

import { AdsDashboard } from "@/components/AdsDashboard"
import YourAuthComponent from "@/components/YourAuthComponent"
import { VeltComments, VeltCommentsSidebar, VeltProvider } from "@veltdev/react"
import VeltCustomization from "@/components/velt-customization"
import { Header } from "@/components/Header"

export default function AdsInventoryPage() {
  return (
    <VeltProvider apiKey="j3AwoBkuQMTEgeqrmPve">
      <YourAuthComponent />
      <Header />
      <main className="pt-16">
        <VeltCustomization />
        <VeltComments textMode={false} commentsOnDom={false} />
        <VeltCommentsSidebar />
        <AdsDashboard />
      </main>
    </VeltProvider>
  )
}

