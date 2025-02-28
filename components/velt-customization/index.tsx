import { VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentToolWf from './VeltCommentToolWf';
import VeltCommentBubbleWf from './VeltCommentBubbleWf';
import VeltCommentsSection from './VeltCommentsSection';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentToolWf />
      <VeltCommentBubbleWf />
      <VeltCommentsSection />
    </VeltWireframe>
  );
};

export default VeltCustomization;
