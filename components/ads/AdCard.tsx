import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { VeltCommentBubble } from "@veltdev/react"
import { VeltCommentTool } from "@veltdev/react"

export interface Ad {
  id: string
  title: string
  type: string
  impressions: number
  clicks: number
  ctr: string
}

interface AdCardProps {
  ad: Ad
  onClick: (ad: Ad) => void
}

export function AdCard({ ad, onClick }: AdCardProps) {
  return (
    <Card
      key={ad.id}
      id={ad.id}
      data-id={ad.id}
      className="cursor-pointer transition-all hover:shadow-md w-full"
      onClick={() => onClick(ad)}
    >
      <div className="flex items-center justify-between w-full">
        <CardHeader className="flex-shrink-0">
          <CardTitle>{ad.title}</CardTitle>
          <CardDescription>{ad.type}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-end space-x-8 p-6">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Impressions</p>
            <p className="text-xl ">{ad.impressions.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">Clicks</p>
            <p className="text-xl ">{ad.clicks.toLocaleString()}</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground">CTR</p>
            <p className="text-xl ">{ad.ctr}</p>
          </div>
          <div className="w-16 flex items-center justify-center">
            <VeltCommentTool targetElementId={ad.id} />
            <VeltCommentBubble targetElementId={ad.id} />
          </div>
        </CardContent>
      </div>
    </Card>
  )
} 