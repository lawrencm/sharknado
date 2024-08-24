import { ComponentContentPageHero } from '@sharknado/cms-api';
import { Button } from '../button';

const ContentPageHero = function ({
  title,
  subtitle,
  background_image,
  buttons,
  text,
}: ComponentContentPageHero) {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${background_image?.data?.attributes?.url})`,
      }}
    >
      {/*  background gradient */}
      <div
        className="absolute inset-0 
      
      bg-gradient-to-t from-slate-900/30 via-slate-900/50 to-slate-900
      
      "
      ></div>
      <div className="relative z-10">
        <p className="mt-2 text-sm md:text-sm text-gray-200">{subtitle}</p>
        <h1 className="text-4xl md:text-5xl uppercase font-bold text-white">
          {title}
        </h1>
        <p className="my-8 max-w-[800px]  text-white">{text}</p>
        {buttons?.map((button, idx) => (
          <Button
            key={idx}
            size="default"
            variant={button?.variant}
            className="ml-2"
          >
            {button?.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { ContentPageHero };
