import React, { FunctionComponent } from 'react';

interface CallToActionBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
}

const CallToActionBanner: FunctionComponent<CallToActionBannerProps> = ({
  title,
  subtitle,
  imageUrl,
  imageAlt,
  className = '',
}) => {
  return (
    <div
      className={`lg:container lg:m-auto lg:mt-4 ${className}`}
      data-testid="ctaWrapper"
    >
      <div className="relative bg-gray-900 text-white lg:h-[300px] lg:rounded-2xl overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative bg-black bg-opacity-50 h-full flex flex-col justify-center items-center p-8 ">
          <h1 className="font-bold uppercase text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
            {title}
          </h1>
          <p className="mt-6 text-sm  text-center max-w-3xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export { CallToActionBanner };
