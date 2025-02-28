import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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
      className="cursor-pointer transition-all hover:shadow-md w-full overflow-hidden"
      onClick={() => onClick(ad)}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
        <CardHeader className="flex-shrink-0 p-4 sm:p-6">
          <CardTitle className="text-lg sm:text-xl">{ad.title}</CardTitle>
          <CardDescription>{ad.type}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-row flex-wrap items-center justify-end gap-4 sm:gap-8 p-4 sm:p-6 w-full sm:w-auto">
          <div className="text-center min-w-[80px]">
            <p className="text-sm font-medium text-muted-foreground">Impressions</p>
            <p className="text-lg sm:text-xl">{ad.impressions.toLocaleString()}</p>
          </div>
          <div className="text-center min-w-[80px]">
            <p className="text-sm font-medium text-muted-foreground">Clicks</p>
            <p className="text-lg sm:text-xl">{ad.clicks.toLocaleString()}</p>
          </div>
          <div className="text-center min-w-[80px]">
            <p className="text-sm font-medium text-muted-foreground">CTR</p>
            <p className="text-lg sm:text-xl">{ad.ctr}</p>
          </div>
        </CardContent>
      </div>
    </Card>
  )
} 