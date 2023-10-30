// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import SerialProvider from "./hooks/useSerial";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SerialProvider>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </SerialProvider>
  );
}
