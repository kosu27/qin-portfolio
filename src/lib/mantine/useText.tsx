import { useMantineTheme } from "@mantine/core";
import { useIsDarkMode } from "lib/mantine/useIsDarkMode";
export const useText = () => {
  const isDark = useIsDarkMode();
  const theme = useMantineTheme();
  return isDark ? theme.white : theme.colors.dark[7];
};
