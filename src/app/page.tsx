"use client";

import { ConfigForms, Keyboard, Switch } from "@/components";
import { Box, Container, Text, SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      backgroundColor={"white"}
      minH={"100vh"}
    >
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={2} spacing={"10"}>
          <Box>
            <Text as="h1" variant={"title"} mb={4}>
              Config Pico Key
            </Text>
            <ConfigForms />
          </Box>
          <Box>
            <Keyboard />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
