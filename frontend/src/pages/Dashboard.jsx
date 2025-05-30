import React from "react";
import { Container, Paper, Text, Button, Group, Avatar } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import useAuth from "../hooks/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Container size="sm" className="dashboard-container">
      <Paper
        shadow="md"
        radius="lg"
        p="xl"
        withBorder
        className="dashboard-paper"
      >
        <Group position="apart" className="dashboard-header">
          <Group>
            <Avatar
              src="https://via.placeholder.com/150"
              alt="User Avatar"
              radius="xl"
              size="lg"
            />
            <div>
              <Text size="lg" weight={500}>
                Welcome, {user.name}!
              </Text>
              <Text size="sm" color="dimmed">
                {user.email}
              </Text>
            </div>
          </Group>
          <Button
            variant="outline"
            color="red"
            leftIcon={<IconLogout size={16} />}
            onClick={logout}
          >
            Logout
          </Button>
        </Group>
      </Paper>
    </Container>
  );
};

export default Dashboard;
