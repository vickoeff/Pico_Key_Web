import { Button, Text } from "@chakra-ui/react";

interface ISwitchProps {
  active: boolean;
  switchKey: string;
  label: string;
  value: string | null;
  onClick: () => void;
}

export const Switch = (props: ISwitchProps) => {
  const { active, switchKey, label, value, onClick } = props;

  return (
    <Button
      w={{ base: 20, sm: 28 }}
      h={{ base: 20, sm: 28 }}
      border={"1px"}
      borderColor={"brand.600"}
      p={"8"}
      borderRadius={"2xl"}
      boxShadow={active ? "0px 0px 12px 3px #ffe29d" : "unset"}
      onClick={onClick}
    >
      <Text color={"brand.600"}>{label}</Text>
    </Button>
  );
};
