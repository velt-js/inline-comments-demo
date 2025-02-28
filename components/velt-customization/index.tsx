import { VeltWireframe } from '@veltdev/react';
import VeltSidebarButtonWf from './VeltSidebarButtonWf';
import VeltCommentsSection from './VeltCommentsSection';

const VeltCustomization = () => {
  return (
    <VeltWireframe>
      <VeltSidebarButtonWf />
      <VeltCommentsSection />
    </VeltWireframe>
  );
};

export default VeltCustomization;
