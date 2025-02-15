import { VeltNotificationsTool, VeltPresence, VeltSidebarButton } from "@veltdev/react";
import { UserAvatar } from "./UserAvatar"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 px-4 flex items-center justify-between">
      <div className="font-semibold text-lg">Ads Inventory</div>
      <div className="flex items-center gap-4">
        <VeltPresence />
        <VeltSidebarButton />
        <VeltNotificationsTool />
        <UserAvatar />
      </div>
    </header>
  );
} 