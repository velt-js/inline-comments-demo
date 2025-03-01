import * as React from "react"
import { MessageSquareIcon, X } from "lucide-react"
import { CommentsSection } from "../CommentsSection"
import { Button } from "../ui/button"

interface RightSidebarProps {
  targetElementId: string;
  onClose?: () => void;
}

export const RightSidebar = React.forwardRef<HTMLDivElement, RightSidebarProps>(
  ({ targetElementId, onClose }, ref) => {
    const contentRef = React.useRef<HTMLDivElement>(null);

    return (
      <div 
        ref={ref} 
        className="fixed top-14 right-0 bottom-0 z-40"
      >
        <div className="h-full bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-md w-[30rem]">
          <div className="py-3 px-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
            <div className="flex items-center">
              <MessageSquareIcon className="mr-2.5 h-5 w-5 text-gray-600 dark:text-gray-300" />
              <span className="font-medium text-gray-800 dark:text-gray-200">Comments</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Close sidebar"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div ref={contentRef} className="h-[calc(100%-53px)] overflow-auto relative">
            <CommentsSection targetElementId={targetElementId} />
          </div>
        </div>
      </div>
    )
  }
) 