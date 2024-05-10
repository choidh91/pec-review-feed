import Link from 'next/link';
import { HomeIcon, UserIcon, Bars4Icon, Squares2X2Icon } from '@heroicons/react/24/solid';

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full mx-auto grid grid-cols-4 border-neutral-600 border-t px-5 py-3 *:text-white bg-pink-300">
      <Link href="" className="flex flex-col items-center gap-px">
        <Bars4Icon className="w-7 h-7" />
        <span>MENU</span>
      </Link>
      <Link href="/reviews" className="flex flex-col items-center gap-px">
        <Squares2X2Icon className="w-7 h-7" />
        <span>REVIEW</span>
      </Link>
      <Link href="" className="flex flex-col items-center gap-px">
        <HomeIcon className="w-7 h-7" />
        <span>HOME</span>
      </Link>
      <Link href="" className="flex flex-col items-center gap-px">
        <UserIcon className="w-7 h-7" />
        <span>MY</span>
      </Link>
    </div>
  );
};
