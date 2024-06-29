'use client';
import { inter } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from "react";
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="h-full space-y-3 px-6 pb-4 pt-8">
      <div className="flex-1 rounded-lg ">
        <h1 className={`${inter.className} mb-3 text-center text-2xl`}>
          Log in to your account
        </h1>
        <div className="mx-auto md:w-[50%] lg:w-[35%] xl:w-[25%]">
          <div>
            <label
              className="mb-3 mt-5 block text-xs  text-spotify_white"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-spotify_black"
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
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 text-spotify_black placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-12">
            <LoginButton aria-disabled={isPending} />
            <SignupButton />
          </div>
        </div>
        <div className="flex h-8 items-end space-x-1">
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
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
    <Button className="mt-4 w-full bg-purple-400 text-spotify_white transition-all ease-in-out hover:bg-spotify_white hover:text-purple-400">
      Create an account{' '}
      <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
