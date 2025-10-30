"use client";

import DomeGalleryCore from './DomeGalleryCore';

interface DomeGalleryProps {
  images?: Array<{ src: string; alt: string }>;
  fit?: number;
  minRadius?: number;
  maxRadius?: number;
  segments?: number;
  dragSensitivity?: number;
  enlargeTransitionMs?: number;
  overlayBlurColor?: string;
  imageBorderRadius?: string;
  openedImageBorderRadius?: string;
  openedImageWidth?: string;
  openedImageHeight?: string;
  grayscale?: boolean;
}

export default function DomeGallery({
  images,
  fit = 0.1,
  minRadius = 60,
  maxRadius = Infinity,
  segments = 35,
  dragSensitivity = 20,
  enlargeTransitionMs = 300,
  overlayBlurColor = '#060010',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '30px',
  openedImageWidth = '400px',
  openedImageHeight = '400px',
  grayscale = false
}: DomeGalleryProps) {
  return (
    <section className="dome-gallery-section" style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <DomeGalleryCore 
        images={images}
        fit={fit}
        minRadius={minRadius}
        maxRadius={maxRadius}
        segments={segments}
        dragSensitivity={dragSensitivity}
        enlargeTransitionMs={enlargeTransitionMs}
        overlayBlurColor={overlayBlurColor}
        imageBorderRadius={imageBorderRadius}
        openedImageBorderRadius={openedImageBorderRadius}
        openedImageWidth={openedImageWidth}
        openedImageHeight={openedImageHeight}
        grayscale={grayscale}
      />
    </section>
  );
}
