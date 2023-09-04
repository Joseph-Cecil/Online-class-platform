import React from "react";
import { IconLayoutDashboard, IconPencil } from "@tabler/icons-react";
import { ThemeIcon, Group, Text } from "@mantine/core";
import Link from "next/link";

const links = [
  {
    icon: <IconLayoutDashboard size="1rem" />,
    color: "red",
    label: "Dashboard",
    href: "/",
  },
  {
    icon: <IconPencil size="1rem" />,
    color: "blue",
    label: "Manage Courses",
    href: "./courses",
  },
  // { icon: <IconChartLine size="1rem" />, color: 'teal', label: 'Analytics' },
];

export function MainLinks() {
  return links.map((link) => (
    <Link
      href={link.href}
      key={link.href}
      // sx={(theme) => ({
      //   display: 'block',
      //   width: '100%',
      //   padding: theme.spacing.xs,
      //   borderRadius: theme.radius.sm,
      //   color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      //   '&:hover': {
      //     backgroundColor:
      //       theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      //   },
      // })}
    >
      <Group>
        <ThemeIcon color={link.color} variant="light">
          {link.icon}
        </ThemeIcon>

        <Text size="sm">{link.label}</Text>
      </Group>
    </Link>
  ));
}
