import AdminDashboardLayout from "~/components/layout/admin-dashboard-layout";
import { Button, Flex, Grid, Modal, Stack, TextInput } from "@mantine/core";
import { Card as MantineCard, Image, Text, Group } from "@mantine/core";
import { type Course } from "@prisma/client";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { api } from "~/utils/api";
export default function Courses() {
  function CourseCard({ course }: { course: Course }) {
    return (
      <MantineCard shadow="sm" padding="lg" radius="md" withBorder>
        <MantineCard.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt={course.title}
          />
        </MantineCard.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>{course.title}</Text>
          {/* <Badge color="pink" variant="light">
          On Sale
        </Badge> */}
        </Group>

        <Text size="sm" color="dimmed">
          {course.description}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Manage
        </Button>
      </MantineCard>
    );
  }
  const courses= api.course.getCourse.useQuery();
  const createCourseMutation = api.course.createCourse.useMutation();

  const [
    isOpenCreateCourseModal,
    { open: openCreateCourseModal, close: closeCreateCourseModal },
  ] = useDisclosure(false);
  const createCourseForm = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });

  return (
    <>
      <Modal
        opened={isOpenCreateCourseModal}
        onClose={closeCreateCourseModal}
        title="Create Course"
      >
        <form
          onSubmit={createCourseForm.onSubmit(async (values) => {
            await createCourseMutation.mutateAsync(values);
            closeCreateCourseModal();
            createCourseForm.reset();
            await courses.refetch();
          })}
        >
          <Stack mb="2mb">
            <TextInput
              withAsterisk
              required
              label="title"
              placeholder="Enter name of your course"
              {...createCourseForm.getInputProps("title")}
            />

            <TextInput
              withAsterisk
              required
              label="description"
              placeholder="Say something about your course here"
              {...createCourseForm.getInputProps("description")}
            />
          </Stack>

          <Group position="right" mt="md">
            <Button type="submit">create course</Button>
          </Group>
        </form>
      </Modal>
      <main>
        <div>
          <AdminDashboardLayout>
            <Flex justify="space-between" align="center" direction="row">
              <h1>Manage Courses</h1>
              <Button onClick={openCreateCourseModal}>Create Course</Button>
            </Flex>

            <Grid>
              {courses.data?.map((course) => (
                <Grid.Col key={course.id} span={4}>
                  <CourseCard course={course} />
                </Grid.Col>
              ))}
            </Grid>
          </AdminDashboardLayout>
        </div>
      </main>
    </>
  );
}
