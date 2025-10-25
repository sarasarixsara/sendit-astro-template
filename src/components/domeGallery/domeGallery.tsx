"use client";

import DomeGalleryCore from './DomeGalleryCore';

export default function DomeGallery(block: any) {
  return (
    <section className="dome-gallery-section" style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <DomeGalleryCore 
        images={block.images}
        fit={block.fit || 0.5}
        minRadius={block.minRadius || 600}
        maxRadius={block.maxRadius || Infinity}
        segments={block.segments || 35}
        dragSensitivity={block.dragSensitivity || 20}
        enlargeTransitionMs={block.enlargeTransitionMs || 300}
        overlayBlurColor={block.overlayBlurColor || '#060010'}
        imageBorderRadius={block.imageBorderRadius || '30px'}
        openedImageBorderRadius={block.openedImageBorderRadius || '30px'}
        openedImageWidth={block.openedImageWidth || '400px'}
        openedImageHeight={block.openedImageHeight || '400px'}
        grayscale={block.grayscale !== undefined ? block.grayscale : true}
      />
    </section>
  );
}
