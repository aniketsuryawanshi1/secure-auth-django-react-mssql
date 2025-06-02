import React from "react";
import { Container, Title, Text, Button, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion"; // Capitalized to avoid ESLint warning
import "./PageNotFound.css";
import errorpage from "../assets/404 Error.svg";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="not-found-container">
      <Motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="image-wrapper"
      >
        <img src={errorpage} alt="404 Not Found" className="not-found-image" />
      </Motion.div>

      <Motion.div
        className="text-wrapper"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title order={2} className="title">
          404 - Page Not Found
        </Title>
        <Text size="lg" color="dimmed" className="description">
          The page you're looking for doesn’t exist or has been moved.
        </Text>
        <Group position="center" mt="md">
          <Button size="md" onClick={() => navigate("/")}>
            Go to Homepage
          </Button>
        </Group>
      </Motion.div>
    </Container>
  );
};

export default PageNotFound;
