"use client";

import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";

export const ConfigForms = () => {
  return (
    <Stack gap={8}>
      <FormControl as="fieldset">
        <FormLabel as="legend">Choose key mode</FormLabel>
        <RadioGroup defaultValue="macro">
          <HStack spacing="24px">
            <Radio value="macro" colorScheme="orange" borderColor={"brand.600"}>
              Macro
            </Radio>
            <Radio
              value="regular"
              colorScheme="orange"
              borderColor={"brand.600"}
            >
              Regular
            </Radio>
            <Radio value="media" colorScheme="orange" borderColor={"brand.600"}>
              Media
            </Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText color={"base.600"}>
          Select only if you're a fan.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Key Binding</FormLabel>
        <Input maxW={120} borderColor={"brand.600"} type="text" />
      </FormControl>
    </Stack>
  );
};
