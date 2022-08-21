import { Divider, Text } from "@mantine/core";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const SegmentTitle: FC<Props> = ({ children }) => {
  return (
    <>
      <Text size={28} mt={40} mb={0} component="h2">
        {children}
      </Text>
      <Divider my="lg" pb={4} />
    </>
  );
};
