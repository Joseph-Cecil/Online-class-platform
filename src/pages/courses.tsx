import Head from "next/head";
import AdminDashboardLayout from "~/components/layout/admin-dashboard-layout";

export default function Courses() {
  return (
    <>
      <main>
        <div>
          <AdminDashboardLayout>Manage Courses</AdminDashboardLayout>
        </div>
      </main>
    </>
  );
}
