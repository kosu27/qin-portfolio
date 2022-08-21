import { useMantineTheme } from "@mantine/core";
import { useIsDarkMode } from "lib/mantine/useIsDarkMode";
export const useBackGround = () => {
  const isDark = useIsDarkMode();
  const theme = useMantineTheme();
  return isDark ? theme.colors.dark[7] : theme.white;
};
