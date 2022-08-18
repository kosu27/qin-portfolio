import { Divider, Text } from "@mantine/core";

type Props = {
  children: React.ReactNode;
};

export const SegmentTitle: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Text size={28} mt={40} mb={0} component="h2">
        {children}
      </Text>
      <Divider my="md" pb={4} />
    </>
  );
};
