"use client";

import { useEffect, useState } from "react";
import { ConfigForms, Keyboard } from "@/components";
import { Box, Container, Text, SimpleGrid, useToast } from "@chakra-ui/react";
import { useSerial } from "@/hooks/useSerial";

export default function Home() {
  const [selectedSwitch, setSelectedSwitch] = useState<number | null>(null);
  const toast = useToast();
  const serial = useSerial();

  useEffect(() => {
    if (!serial.canUseSerial) {
      toast({
        description: "Not Supported Browser!",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }, [serial.canUseSerial]);

  serial.subscribe((msg) => console.log(msg));

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      backgroundColor={"white"}
      minH={"100vh"}
    >
      <Container maxW={"container.xl"}>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={"10"}>
          <Box>
            <Text as="h1" variant={"title"} mb={4}>
              Config Pico Key
            </Text>
            {selectedSwitch !== null ? (
              <ConfigForms />
            ) : (
              <Text>Select the key switch</Text>
            )}
          </Box>
          <Box>
            <Keyboard
              selectedSwitch={selectedSwitch}
              onClick={(_idx) => setSelectedSwitch(_idx)}
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
