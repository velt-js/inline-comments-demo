import * as React from "react"
import { useCommentUtils, useVeltClient, VeltInlineCommentsSection } from "@veltdev/react"
import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

export function CommentsSection() {
  const [showResolved, setShowResolved] = React.useState(false)
  
  const { client } = useVeltClient();
  const commentUtils = useCommentUtils();

  const handleAddNewThread = () => {
    client?.setUiState({
        showComposer: true,
    });
  }

  const handleShowResolvedChange = (checked: boolean) => {
    setShowResolved(checked);
    
    if (checked) {
      commentUtils?.showResolvedCommentsOnDom();
    } else {
      commentUtils?.hideResolvedCommentsOnDom();
    }
  }

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between p-2">
        <div className="inline-flex items-center">
          <div className="flex items-center gap-1.5">
            <Checkbox 
              id="show-resolved" 
              checked={showResolved} 
              onCheckedChange={handleShowResolvedChange}
              className="h-4 w-4 rounded-sm text-[var(--velt-light-mode-accent)] data-[state=checked]:bg-[var(--velt-light-mode-accent)] data-[state=checked]:border-[var(--velt-light-mode-accent)] dark:text-[var(--velt-dark-mode-accent)] dark:data-[state=checked]:bg-[var(--velt-dark-mode-accent)] dark:data-[state=checked]:border-[var(--velt-dark-mode-accent)] border-gray-300"
            />
            <Label 
              htmlFor="show-resolved" 
              className="text-xs text-gray-700 dark:text-gray-300 cursor-pointer select-none"
            >
              Show resolved threads
            </Label>
          </div>
        </div>
      </div>
      <VeltInlineCommentsSection
        targetElementId="ads-dashboard"
        composerPosition="bottom"
        shadowDom={false}
      />

      <Button 
        variant="ghost" 
        size="sm" 
        onClick={handleAddNewThread} 
        className="text-xs text-[var(--velt-light-mode-accent)] hover:text-[var(--velt-light-mode-accent-hover)] dark:text-[var(--velt-dark-mode-accent-text)] hover:bg-[var(--velt-light-mode-accent-transparent)] font-medium"
      >
        + Add new thread
      </Button>
    </div>
  )
} 