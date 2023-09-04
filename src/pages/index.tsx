import Head from "next/head";
import AdminDashboardLayout from "~/components/layout/admin-dashboard-layout";
import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  

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
