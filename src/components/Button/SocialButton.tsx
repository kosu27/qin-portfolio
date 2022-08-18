import { Group } from "@mantine/core";
import { FaFacebook, FaRss, FaTwitter } from "react-icons/fa";

export const SocialButton: React.FC = () => {
  return (
    <Group spacing={12}>
      <FaTwitter color="white" size={20} />
      <FaFacebook color="white" size={20} />
      <FaRss color="white" size={20} />
    </Group>
  );
};
