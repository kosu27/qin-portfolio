import { Button } from "lib/mantine";
import { useIsDarkMode } from "lib/mantine/useIsDarkMode";

type Props = {
  display: string;
};

export const SegmentButton: React.FC<Props> = ({ display }) => {
  const isDarkMode = useIsDarkMode();
  return (
    <Button color="dark" radius="xl" size="md" variant={isDarkMode ? "white" : "filled"}>
      {display}
    </Button>
  );
};
