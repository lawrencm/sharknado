import { ComponentContentPageHero } from '@sharknado/cms-api';
import { Button } from '../button';

export interface ContentPageHeroProps extends ComponentContentPageHero {
  navigation: React.ReactNode;
}

const ContentPageHero: React.FC<ContentPageHeroProps> = ({
  title,
  subtitle,
  background_image,
  buttons,
  text,
  navigation,
}) => {
  const bgImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${background_image?.data?.attributes?.url}`;

  return (
    <div className="flex flex-col items-center ml-auto mr-auto h-96 max-w-screen-xl my-4 rounded-2xl md overflow-hidden">
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center text-center w-full"
        style={{ backgroundImage: `url(${bgImageUrl})` }}
      >
        <div className="absolute inset-0 w-auto text-white z-10 max-h-1">
          {navigation}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-900/50 to-slate-900"></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center pt-16">
          {subtitle && (
            <p className="my-4 text-sm md:text-sm text-gray-200">{subtitle}</p>
          )}
          <h1 className="text-4xl md:text-5xl uppercase font-bold text-white">
            {title}
          </h1>
          {text && <p className="my-8 max-w-[800px] text-white">{text}</p>}
          {buttons &&
            buttons.map((button, idx) => (
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
      <div className="bg-slate-800 flex w-full py-2 px-4">
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-white text-sm">
            Saw a shark? Report sightings to the water police.
          </p>
        </div>
        <div className="flex items-center min-w-[200px]">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8472 13.3556L13.4306 11.3766L13.4184 11.3709C13.1892 11.2729 12.939 11.2335 12.6907 11.2564C12.4424 11.2793 12.2037 11.3638 11.9963 11.5022C11.9718 11.5183 11.9484 11.5358 11.9259 11.5547L9.64407 13.5C8.19845 12.7978 6.70595 11.3166 6.00376 9.88968L7.95188 7.57312C7.97063 7.54968 7.98845 7.52624 8.00532 7.50093C8.14072 7.29403 8.22287 7.05686 8.24446 6.81053C8.26606 6.5642 8.22641 6.31636 8.12907 6.08906V6.07781L6.14438 1.65374C6.0157 1.3568 5.79444 1.10944 5.51362 0.948592C5.2328 0.787739 4.9075 0.722019 4.58626 0.761243C3.31592 0.928406 2.14986 1.55228 1.30588 2.51633C0.461903 3.48039 -0.00228837 4.7187 8.4831e-06 5.99999C8.4831e-06 13.4437 6.05626 19.5 13.5 19.5C14.7813 19.5023 16.0196 19.0381 16.9837 18.1941C17.9477 17.3501 18.5716 16.1841 18.7388 14.9137C18.7781 14.5926 18.7125 14.2674 18.5518 13.9866C18.3911 13.7058 18.144 13.4845 17.8472 13.3556ZM13.5 18C10.3185 17.9965 7.26825 16.7311 5.01856 14.4814C2.76888 12.2318 1.50348 9.18152 1.50001 5.99999C1.49648 5.08451 1.82631 4.19905 2.42789 3.50897C3.02947 2.81888 3.86167 2.37137 4.76907 2.24999C4.7687 2.25373 4.7687 2.2575 4.76907 2.26124L6.73782 6.66749L4.80001 8.98687C4.78034 9.0095 4.76247 9.03364 4.74657 9.05906C4.60549 9.27554 4.52273 9.5248 4.5063 9.78268C4.48988 10.0406 4.54035 10.2983 4.65282 10.5309C5.5022 12.2681 7.25251 14.0053 9.00845 14.8537C9.24279 14.9652 9.50203 15.0139 9.76083 14.9952C10.0196 14.9764 10.2692 14.8909 10.485 14.7469C10.5091 14.7307 10.5322 14.7131 10.5544 14.6944L12.8334 12.75L17.2397 14.7234C17.2397 14.7234 17.2472 14.7234 17.25 14.7234C17.1301 15.6321 16.6833 16.466 15.9931 17.0691C15.3028 17.6721 14.4166 18.0031 13.5 18Z"
              fill="white"
            />
          </svg>
          <p className="text-white px-2 text-sm">Call 9442 8600 now</p>
        </div>
      </div>
    </div>
  );
};

export { ContentPageHero };
