import AdminDashboardLayout from "~/components/layout/admin-dashboard-layout";
import {
  Button,
  Flex,
  Grid,
  Modal,
  Stack,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { Card as MantineCard, Image, Text, Group } from "@mantine/core";
import { type Course } from "@prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { api } from "~/utils/api";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { IconCheck, IconEdit, IconLetterX } from "@tabler/icons-react";
import { title } from "process";

export default function Courses() {
  const [isEditTitle, { open: setEditTitle, close: unsetEditTitle }] =
    useDisclosure(false);
  const updateTitleForm = useForm({
    initialValues: {
      title: "",
    },
  });

  const updateCourseMutation = api.course.updateCourse.useMutation();

  const router = useRouter();
  const courseId = router.query.courseId as string;
  const courseQuery = api.course.getCourseById.useQuery(
    {
      courseId,
    },
    {
      enabled: !!courseId,
      onSuccess(data) {
        updateTitleForm.setFieldValue("title", data?.title ?? "");
      },
    }
  );

  return (
    <>
      <Head>
        <title>Manage Course</title>
        <meta name="description" content="An Online Learning Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <AdminDashboardLayout>
            <Group>
              {isEditTitle ? (
                <form
          onSubmit={updateTitleForm.onSubmit(async (values) => {
            await updateCourseMutation.mutateAsync({...values, courseId});
            unsetEditTitle();
          })}><Group>
                  <TextInput
                    withAsterisk
                    required
                    placeholder="Enter name of your course"
                    {...updateTitleForm.getInputProps("title")}
                  />
                  
                  <Button color="green" type="submit">
                    <IconCheck />
                  </Button>
                  <Button color="red" onClick={unsetEditTitle}>
                   <IconLetterX />
                  </Button>
                  </Group>
                </form>
              ) : (
                <>
                  <Title order={1}>{courseQuery.data?.title}</Title>

                  <Button onClick={setEditTitle}>
                    <IconEdit size="1rem" />
                  </Button>
                </>
              )}
            </Group>
          </AdminDashboardLayout>
        </div>
      </main>
    </>
  );
}
