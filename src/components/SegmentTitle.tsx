import { Text } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export const SegmentTitle: React.FC<Props> = ({ children }) => {
  return (
    <Text size={28} component="h2">
      {children}
    </Text>
  );
};
