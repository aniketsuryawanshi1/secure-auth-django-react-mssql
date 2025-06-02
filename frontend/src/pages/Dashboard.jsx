import React from "react";
import { Image, Text, Title, Container, Stack, Paper } from "@mantine/core";
import image from "../assets/Gen Z-pana.svg";
import useAuth from "../hooks/useAuth";
import classes from "./EmailBanner.module.css";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Container size="lg" py="xl" className={classes.wrapper}>
      <Paper className={classes.paper}>
        <div className={classes.content}>
          <Stack spacing="md" className={classes.textContent}>
            <Title order={2} className={classes.title}>
              👋 Hello, {user.username}!
            </Title>
            <Text size="lg" fw={500}>
              Welcome to your dashboard!
            </Text>
            <Text size="sm" c="dimmed">
              Stay updated with product launches, announcements, and community
              events by subscribing to our weekly newsletter.
            </Text>

            <div className={classes.userBox}>
              <Text fw={600}>Username: {user.username}</Text>
              <Text fw={600}>Email: {user.email}</Text>
            </div>

            <button className={classes.logoutButton} onClick={logout}>
              🚪 Logout
            </button>
          </Stack>

          <Image
            src={image}
            alt="Dashboard Illustration"
            className={classes.image}
          />
        </div>
      </Paper>
    </Container>
  );
};

export default Dashboard;
