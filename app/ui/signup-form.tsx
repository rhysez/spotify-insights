'use client';
import { inter } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';
import { createAccount } from '../lib/actions';
import { z } from 'zod';
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const { toast } = useToast()
  const { push } = useRouter();

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const validateForm = async () => {
    try {
      const account = await createAccount(name, username, email, password);
      if (account) {
        push('/login');
        toast({
          title: `Welcome aboard ${username}!`,
          description: "You may now log into your account",
        });
      }
    } catch(error) {
      console.log(error)
    }
  };

  return (
    <form action={validateForm} className="h-full space-y-3 px-2 pb-4 pt-8">
      <div className="flex justify-center rounded-lg ">
        <div className="mx-auto w-[95%] rounded-md border-[1px] border-spotify_link_active bg-spotify_dark_gray p-4 md:w-[70%] lg:w-[40%] xl:w-[30%]">
          <h1 className={`${inter.className} mb-3 text-center text-2xl`}>
            Account creation
          </h1>

          <div>
            <label
              className="mb-3 mt-5 block text-xs  text-spotify_white"
              htmlFor="name"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-spotify_black outline-2 placeholder:text-gray-500"
                id="name"
                type="text"
                name="name"
                placeholder="Tell us your name"
                onChange={e => setName(e.target.value)}
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>

          <div>
            <label
              className="mb-3 mt-5 block text-xs  text-spotify_white"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-spotify_black outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Pick a cool username"
                onChange={e => setUsername(e.target.value)}
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>

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
                onChange={e => setEmail(e.target.value)}
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
                onChange={e => setPassword(e.target.value)}
                required
                minLength={4}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-spotify_black peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-12">
            <Button type='submit' className="mt-4 w-full border-2 border-spotify_green bg-spotify_white text-spotify_link_active transition-all ease-in-out hover:bg-spotify_white hover:text-spotify_green">
              Create account{' '}
              <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>

            <Link href="/login">
              <Button className="mt-4 w-full bg-spotify_green text-spotify_white transition-all ease-in-out hover:bg-spotify_white hover:text-spotify_green">
                Existing user? Log in{' '}
                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
              </Button>
            </Link>
          </div>
          <div className="flex items-end space-x-1">
            {/* Error msg can go here */}
          </div>
        </div>
      </div>
    </form>
  );
}
