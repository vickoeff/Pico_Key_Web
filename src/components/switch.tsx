import { Button, Text } from "@chakra-ui/react";

interface ISwitchProps {
  switchKey: string;
  label: string;
  value: string | null;
}

export const Switch = (props: ISwitchProps) => {
  const { switchKey, label, value } = props;

  return (
    <Button
      w={28}
      h={28}
      border={"1px"}
      borderColor={"brand.600"}
      p={"8"}
      borderRadius={"2xl"}
    >
      <Text>{label}</Text>
    </Button>
  );
};
