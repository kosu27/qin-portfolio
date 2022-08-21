import { Box, Center, Group, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { SegmentTitle } from "components/Title";
import { Button, useIsDarkMode } from "lib/mantine";
import { FC } from "react";

export const ContactForm: FC = () => {
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "メールアドレスの形式を正しく記述してください",
      name: (value) => (value.length < 1 ? "名前を入力してください" : null),
      message: (value) => (value.length < 1 ? "メッセージを入力してください" : null),
    },
  });
  const isDark = useIsDarkMode();

  return (
    <Box>
      <form onSubmit={form.onSubmit(console.log)}>
        <Stack spacing={0}>
          <SegmentTitle>Contact</SegmentTitle>
          <Stack spacing={24}>
            <Stack spacing={4}>
              <TextInput
                required
                label="Email"
                placeholder="Your.gmail.com"
                {...form.getInputProps("email")}
              />
            </Stack>
            <Stack spacing={4}>
              <TextInput
                required
                label="Name"
                placeholder="Taro Yamada"
                {...form.getInputProps("name")}
              />
            </Stack>
            <Stack spacing={4}>
              <TextInput
                required
                label="Your message"
                placeholder="I want to order your goods"
                {...form.getInputProps("message")}
              />
            </Stack>

            <Center>
              <Button
                type="submit"
                color="dark"
                radius="xl"
                size="md"
                variant={isDark ? "white" : "filled"}
              >
                Send message
              </Button>
            </Center>
          </Stack>
        </Stack>
      </form>
    </Box>
  );
};
