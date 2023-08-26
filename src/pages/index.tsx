import Head from "next/head";
import { api } from "~/utils/api";
import { ActionIcon, AppShell, Box, Button, Group, Header, Navbar, rem, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { MainLinks } from "~/components/shell/_mainLinks";
import { User } from "~/components/shell/_user";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <>
      <Head>
        <title>Sprall Online Platform</title>
        <meta name="description" content="A platform which allows users to post and monitor thier courses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <AppShell
            padding="md"
            navbar={
              <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
            }
            header={<Header height={60} p="xs">
              <Group sx={{ height: '100%' }} px={20} position="apart">
           My Logo
            <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
              {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
            </ActionIcon>
          </Group>
            </Header>}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <h1>Testing The Application</h1>
          </AppShell>
        </div>
      </main>
    </>
  );
}
