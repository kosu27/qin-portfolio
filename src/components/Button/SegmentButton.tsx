import { Button } from "lib/mantine";
import { useIsDarkMode } from "lib/mantine/useIsDarkMode";
import { FC } from "react";

type Props = {
  display: string;
};

export const SegmentButton: FC<Props> = ({ display }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <Button color="dark" radius="xl" size="md" variant={isDarkMode ? "white" : "filled"}>
      {display}
    </Button>
  );
};
