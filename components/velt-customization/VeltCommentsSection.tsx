import { VeltInlineCommentsSectionWireframe, VeltButtonWireframe, VeltIf, VeltData, VeltCommentDialogWireframe } from '@veltdev/react';

const VeltCommentsSection = () => {

  return (
    <>
      <VeltInlineCommentsSectionWireframe.ComposerContainer veltIf='{showComposer}' />
      
      <VeltInlineCommentsSectionWireframe.List>
        <VeltCommentDialogWireframe>
          <div className="flex items-center mb-2">
            <VeltIf condition="{commentAnnotation.status.id} === 'RESOLVED'">
              <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[var(--velt-light-mode-success-light)] text-[var(--velt-light-mode-success)] dark:bg-[var(--velt-dark-mode-background-7)] dark:text-[var(--velt-dark-mode-success)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <VeltData field="commentAnnotation.status.name" />
              </div>
            </VeltIf>
          </div>

          <VeltCommentDialogWireframe.AssigneeBanner />
          <VeltCommentDialogWireframe.Body />
          <VeltCommentDialogWireframe.Composer />
        </VeltCommentDialogWireframe>
      </VeltInlineCommentsSectionWireframe.List>

    </>
  );
};

export default VeltCommentsSection; 