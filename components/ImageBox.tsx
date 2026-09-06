import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageBoxProps {
  src: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  border?: boolean;
}

export function ImageBox({
  src,
  alt = 'تصویر راهنما',
  caption,
  width = 800,
  height = 450,
  border = true,
}: ImageBoxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className="my-6 flex flex-col items-center">
        <div
          onClick={() => setIsOpen(true)}
          role="button"
          tabIndex={0}
          className={`group relative block max-w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 cursor-zoom-in transition hover:opacity-95 ${
            border ? 'border border-neutral-200 shadow-sm dark:border-neutral-800' : ''
          }`}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="h-auto w-full object-contain"
          />
        </div>

        {caption && (
          <figcaption className="mt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
            {caption}
          </figcaption>
        )}
      </figure>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="بستن تصویر"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-2xl text-white hover:bg-black/70"
          >
            ×
          </button>

          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1600}
              height={1000}
              className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
            />

            {caption && (
              <p className="mt-3 text-center text-sm text-white/80">
                {caption}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageBox;
