import { VeltInlineCommentsSectionWireframe, VeltButtonWireframe, VeltIf, VeltData, VeltCommentDialogWireframe } from '@veltdev/react';

const VeltCommentsSection = () => {

  return (
    <>
      <VeltInlineCommentsSectionWireframe.ComposerContainer veltIf='{showComposer}' />
      <VeltInlineCommentsSectionWireframe.List>
      <VeltCommentDialogWireframe>

        <VeltCommentDialogWireframe.Body>
          <div>
            <VeltIf condition="{commentAnnotation.status.id} === 'RESOLVED'">
              <VeltData field="commentAnnotation.status.name" />
            </VeltIf>

          </div>
          <VeltCommentDialogWireframe.Threads />
          <VeltCommentDialogWireframe.ToggleReply />
          </VeltCommentDialogWireframe.Body>
        </VeltCommentDialogWireframe>
      </VeltInlineCommentsSectionWireframe.List>
    </>
  );
};

export default VeltCommentsSection; 