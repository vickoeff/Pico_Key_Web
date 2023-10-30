import { Switch } from "@/components";
import { KEY_INPUTS } from "@/contants";
import { Box, HStack, Stack, Button, Text } from "@chakra-ui/react";

interface IKeyboard {
  selectedSwitch: number | null;
  onClick: (idx: number) => void;
}

export const Keyboard = (props: IKeyboard) => {
  const { selectedSwitch, onClick } = props;

  return (
    <Box
      boxSizing={"content-box"}
      maxW={"370px"}
      padding={"8"}
      borderRadius={"2xl"}
      borderWidth={"1px"}
      borderColor={"brand.600"}
    >
      <HStack mb={"8"} justifyContent={"space-between"}>
        <Button
          w={24}
          h={24}
          borderRadius={"100%"}
          borderWidth={"1px"}
          borderColor={"brand.600"}
        ></Button>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"128px"}
          h={"64px"}
          borderWidth={"1px"}
          borderColor={"brand.600"}
        >
          <Text>OLED 128x64</Text>
        </Box>
      </HStack>
      <Stack direction={"row"} flexWrap={"wrap"} gap={{ base: 2, sm: 4 }}>
        {KEY_INPUTS.map((key, _idx) => (
          <Switch
            active={selectedSwitch === _idx}
            key={key.key}
            switchKey={key.key}
            label={key.label}
            value={key.value}
            onClick={() => onClick(_idx)}
          />
        ))}
      </Stack>
    </Box>
  );
};
