import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "" 
}) => {
  const handleOpenInNewTab = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(src, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${imgClassName}`}
      />
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button
          onClick={handleOpenInNewTab}
          variant="secondary"
          size="sm"
          className="rounded-full bg-white/90 hover:bg-white text-black font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          Open Image
        </Button>
      </div>
    </div>
  );
};

export default ZoomableImage;
