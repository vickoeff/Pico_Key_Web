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
            <Radio value="macro">Macro</Radio>
            <Radio value="regular">Regular</Radio>
            <Radio value="media">Media</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText color={"base.600"}>
          Select only if you're a fan.
        </FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel>Key Value</FormLabel>
        <Input maxW={120} type="text" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Stack>
  );
};
