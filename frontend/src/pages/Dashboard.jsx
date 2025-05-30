import React from "react";
import {
  AppShell,
  Avatar,
  Group,
  Text,
  Button,
  Paper,
  Container,
  Title,
  Divider,
  Card,
} from "@mantine/core";
import {
  IconLogout,
  IconUserCircle,
  IconBell,
  IconSettings,
  IconUserEdit,
} from "@tabler/icons-react";
import useAuth from "../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <AppShell
      padding="md"
      header={
        <AppShell.Header className="dashboard-header">
          <Group justify="space-between" className="header-inner">
            <Group>
              <IconUserCircle size={28} color="white" />
              <Text size="xl" fw={700} c="white">
                My Dashboard
              </Text>
            </Group>
            <Group>
              <Button
                variant="subtle"
                className="notification-btn"
                leftSection={<IconBell size={20} />}
              >
                Notifications
              </Button>
              <Button
                variant="filled"
                color="red"
                leftSection={<IconLogout size={18} />}
                onClick={logout}
              >
                Logout
              </Button>
            </Group>
          </Group>
        </AppShell.Header>
      }
    >
      <AppShell.Main>
        <Container size="lg">
          <Paper className="user-card" shadow="lg" radius="md" withBorder>
            <Group align="center" spacing="lg">
              <Avatar size={90} radius="xl" />
              <div>
                <Title order={3} className="user-name">
                  Welcome, {user.name}!
                </Title>
                <Text c="dimmed">{user.email}</Text>
              </div>
            </Group>
            <Divider my="md" />
            <Text size="sm" c="gray">
              This is your dashboard. Here you can manage your account, update
              your settings, and explore features.
            </Text>
          </Paper>

          <Group grow mt="xl">
            <Card className="feature-card" withBorder>
              <IconUserEdit size={36} color="#0ea5e9" />
              <Title order={5} mt="md">
                Edit Profile
              </Title>
              <Text size="sm" c="dimmed">
                Manage your user profile settings.
              </Text>
            </Card>
            <Card className="feature-card" withBorder>
              <IconSettings size={36} color="#22c55e" />
              <Title order={5} mt="md">
                App Settings
              </Title>
              <Text size="sm" c="dimmed">
                Customize your dashboard experience.
              </Text>
            </Card>
          </Group>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Dashboard;
