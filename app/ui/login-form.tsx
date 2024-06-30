'use client';
import { inter } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import Link from 'next/link';
import { mdiSpotify } from '@mdi/js';
import Icon from '@mdi/react';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  if (isPending) {
    return (
      <ArrowPathIcon className="mx-auto mt-24 h-24 w-24 animate-spin rounded-full border-[1px] border-spotify_link_active bg-spotify_dark_gray p-2 text-center text-spotify_green" />
    );
  }

  return (
    <form action={formAction} className="h-full space-y-3 px-2 pb-4 pt-8">
      <div className="flex justify-center rounded-lg ">
        <div className="mx-auto w-[95%] rounded-md border-[1px] border-spotify_link_active bg-spotify_dark_gray p-4 md:w-[70%] lg:w-[40%] xl:w-[30%]">
          <h1 className={`${inter.className} mb-3 text-center text-2xl`}>
            Log in to your account
          </h1>
          <div>
            <label
              className="mb-3 mt-5 block text-xs  text-spotify_white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-spotify_black outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs text-spotify_white"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-spotify_black outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={4}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-12">
            <LoginButton aria-disabled={isPending} />
            <SignupButton />
          </div>
          <div className="flex items-end space-x-1">
          {errorMessage && (
            <div className="p-2 flex mx-auto gap-1">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </div>
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full bg-spotify_green text-spotify_white transition-all ease-in-out hover:bg-spotify_white hover:text-spotify_green">
      Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}

function SignupButton() {
  return (
    <Link href="/signup">
      <Button className="mt-4 w-full border-2 border-spotify_green bg-spotify_white text-spotify_link_active transition-all ease-in-out hover:bg-spotify_white hover:text-spotify_green">
        Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
      </Button>
    </Link>
  );
}
