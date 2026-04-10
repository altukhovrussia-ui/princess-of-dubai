import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 121;
const FRAME_PREFIX = '/crown-frames/frame_';

function getFramePath(index: number): string {
  return `${FRAME_PREFIX}${String(index).padStart(3, '0')}_delay-0.041s.jpg`;
}

export const CrownAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Preload all frames
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  // Draw frame on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || loadedCount < FRAME_COUNT) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img) return;

      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Cover the canvas while maintaining aspect ratio
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvas.width / canvas.height;

      let drawW: number, drawH: number, drawX: number, drawY: number;
      if (canvasRatio > imgRatio) {
        drawW = canvas.width;
        drawH = canvas.width / imgRatio;
        drawX = 0;
        drawY = (canvas.height - drawH) / 2;
      } else {
        drawH = canvas.height;
        drawW = canvas.height * imgRatio;
        drawX = (canvas.width - drawW) / 2;
        drawY = 0;
      }

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    };

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const scrollableHeight = container.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      const frameIndex = Math.min(Math.floor(progress * FRAME_COUNT), FRAME_COUNT - 1);

      if (frameIndex !== frameIndexRef.current) {
        frameIndexRef.current = frameIndex;
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    // Initial draw
    drawFrame(0);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [loadedCount]);

  const isLoaded = loadedCount >= FRAME_COUNT;

  return (
    <div
      ref={containerRef}
      className="relative bg-[#0a0e0a]"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Loading indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-24 h-[1px] bg-ivory/10 mx-auto overflow-hidden mb-4">
                <div
                  className="h-full bg-gold transition-all duration-300"
                  style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
                />
              </div>
              <span className="text-ivory/30 text-xs tracking-widest uppercase font-sans">
                Loading crown...
              </span>
            </div>
          </div>
        )}

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </div>
  );
};
