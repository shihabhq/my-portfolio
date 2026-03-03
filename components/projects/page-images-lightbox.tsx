 "use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";

interface PageImagesLightboxProps {
  images: string[];
}

export default function PageImagesLightbox({
  images,
}: PageImagesLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      } else if (event.key === "ArrowRight" && hasMultipleImages) {
        showNext();
      } else if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, hasMultipleImages]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      <div
        className={cn(
          "mt-4 gap-4",
          hasMultipleImages
            ? "grid grid-cols-1 sm:grid-cols-2"
            : "grid grid-cols-1"
        )}
      >
        {images.map((img, index) => (
          <button
            key={index}
            type="button"
            className="relative group block focus:outline-none"
            onClick={() => openAt(index)}
          >
            <Image
              src={img}
              alt={img}
              width={720}
              height={405}
              className="w-full rounded-md border bg-muted transition-transform duration-300 group-hover:scale-[1.02] cursor-zoom-in"
            />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={close}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-muted-foreground"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            aria-label="Close"
          >
            <Icons.close className="h-7 w-7" />
          </button>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="absolute left-4 md:left-8 text-white hover:text-muted-foreground"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
              >
                <Icons.chevronLeft className="h-8 w-8" />
              </button>
              <button
                type="button"
                className="absolute right-4 md:right-8 text-white hover:text-muted-foreground"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <Icons.chevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <div
            className="relative max-w-5xl w-full max-h-[90vh] px-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh]">
              <Image
                src={images[currentIndex]}
                alt={images[currentIndex]}
                fill
                sizes="(min-width: 1024px) 800px, 100vw"
                className="object-contain rounded-md"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

