import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import AdminDashboardLayout from "~/components/layout/admin-dashboard-layout";
import { api } from "~/utils/api";

export default function Dashboard() {
  
  const session = useSession();
  const router = useRouter();
  
  if(session.status === "unauthenticated"){
    router.push("/").catch(console.error)
    return <></>
  }

  return (
    <>
      <Head>
        <title>Sprall Online Platform</title>
        <meta name="description" content="A platform which allows users to post and monitor thier courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <AdminDashboardLayout><h1>Dashboard</h1></AdminDashboardLayout>
        </div>
      </main>
    </>
  );
}
