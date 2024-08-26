'use client';
import { UseSuspenseQueryResult } from '@apollo/client';
import {
  GlobalHeaderNavigationQuery,
  GlobalHeaderNavigationQueryVariables,
  useGlobalHeaderNavigationSuspenseQuery,
} from '@sharknado/cms-api';

import { Button } from '@sharknado/shared-ui';
import Image from 'next/image';
import Link from 'next/link';

export function GlobalTopNav() {
  const {
    data,
  }: UseSuspenseQueryResult<
    GlobalHeaderNavigationQuery,
    GlobalHeaderNavigationQueryVariables
  > = useGlobalHeaderNavigationSuspenseQuery();

  return (
    <>
      <nav className="flex items-center justify-between px-4 py-2 min-h-20 text-white">
        {data.renderNavigation
          .filter((link) => link?.position === 'Logo')
          .map((link, idx: number) => {
            return (
              <div className="flex-shrink-0" key={`log-${idx}`}>
                <Image
                  src={
                    `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${link?.logo?.url}` ??
                    ''
                  }
                  width={220}
                  height={80}
                  alt={link?.logo?.name ?? ''}
                  className="h-12 w-auto"
                />
              </div>
            );
          })}

        <div className="hidden md:flex w-full space-x-6 justify-end">
          {data.renderNavigation
            .filter((link) => link?.position === 'Menu')

            .map((link, idx: number) => (
              <Link
                key={`link-${idx}`}
                href={link?.path ?? ''}
                className="hover:text-gray-400"
              >
                {link?.title}
              </Link>
            ))}
        </div>

        <div className="flex space-x-4 ml-4">
          {data.renderNavigation
            .filter((link) => link?.position === 'Utility')

            .map((link, idx: number) => (
              <Button key={`link-${idx}`} className="bg-white/20">
                <Link href={link?.path ?? ''} className="hover:text-gray-400">
                  {link?.title}
                </Link>
              </Button>
            ))}
        </div>
      </nav>

      {/* <div className={styles['container']}>
        <ul className="flex space-x-4">
          {data.renderNavigation.map((link: NavigationItem, idx: number) => {
            return (
              <li key={`link-${idx}`}>
                <Link
                  href={link.path ?? ''}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default GlobalTopNav;
