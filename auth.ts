import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import { Session } from 'next-auth';
import bcrypt from 'bcrypt';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: 'Credentials',
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          try {
            const { email, password } = parsedCredentials.data;
            const user: any = await getUser(email);
            if (!user) return null;
            return user;
          } catch {
            return null;
          }
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },

  callbacks: {
    // we create a token and give it a .user property
    // we assign the .user property to the user object
    // we then pass the user object down to the session callback
    // and assign it via session.user
    async jwt({ token, user, session }) {
      if (user) {
        token.user = user;
      }
      return {
        ...token,
      };
    },

    // this function allows us to access the session
    // within the actual application
    // by calling the auth() function on client
    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token?: any;
      user?: any;
    }) {
      session.user = token.user;
      return {
        ...session,
        user: token.user,
      };
    },
  },
});

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
