import React, { useState } from 'react';

interface DynamicImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localPath: string;
  fallbackUrl?: string;
  alt: string;
  className?: string;
}

export const DynamicImage: React.FC<DynamicImageProps> = ({
  localPath,
  fallbackUrl,
  alt,
  className = '',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(localPath);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError && fallbackUrl && currentSrc !== fallbackUrl) {
      setHasError(true);
      setCurrentSrc(fallbackUrl);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      className={`transition-opacity duration-500 ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

