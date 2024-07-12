import { getCurrentSession } from '@/app/lib/data';

export default async function Page() {
  const user: any = await getCurrentSession();

  return (
    <main className="text-center md:text-left">
      <h1 className="text-4xl font-bold">Your Details</h1>

      <section className="mt-10">
        <p>
          <span className="text-lg font-bold">Name: </span>
          {user.name}
        </p>
        <p>
          <span className="text-lg font-bold">Username: </span>
          {user.username}
        </p>
        <p>
          <span className="text-lg font-bold">Email: </span>
          {user.email}
        </p>
      </section>
    </main>
  );
}
