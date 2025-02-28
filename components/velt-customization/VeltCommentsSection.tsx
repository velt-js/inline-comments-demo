import { VeltInlineCommentsSectionWireframe, VeltButtonWireframe, VeltIf, VeltData, VeltCommentDialogWireframe } from '@veltdev/react';

const VeltCommentsSection = () => {

  return (
    <>
      <VeltInlineCommentsSectionWireframe.ComposerContainer veltIf='{showComposer}' />
      <VeltInlineCommentsSectionWireframe.List>
        <VeltCommentDialogWireframe>

          <div>
            <VeltIf condition="{commentAnnotation.status.id} === 'RESOLVED'">
              <VeltData field="commentAnnotation.status.name" />
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