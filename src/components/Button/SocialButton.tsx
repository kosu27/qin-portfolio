import { Group } from "@mantine/core";
import { FC } from "react";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

export const SocialButton: FC = () => {
  return (
    <Group spacing={12}>
      <FaTwitter color="white" size={24} />
      <FaFacebook color="white" size={24} />
      <FaRss color="white" size={24} />
    </Group>
  );
};
