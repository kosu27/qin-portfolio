import { Header } from "components/Header/Header";
import { TitleZone } from "components/Title/TitleZone";
import { Footer } from "components/Footer/Footer";
import { FC } from "react";
import { useMediaQuery } from "lib/mantine";
import { AppShell, Container, Space } from "@mantine/core";

type Props = {
  children: React.ReactNode;
  withTitle?: boolean;
};

export const Layout: FC<Props> = ({ children, withTitle = false }) => {
  const isDesktop = useMediaQuery("sm");
  const pX = isDesktop ? 240 : 16;

  return (
    <AppShell padding={0} header={<Header />} footer={<Footer height={60} />}>
      {withTitle && (
        <>
          <TitleZone />
          <Space h={isDesktop ? 40 : 0} />
        </>
      )}

      <Container mx={0} px={pX} size={99999}>
        {children}
      </Container>
    </AppShell>
  );
};
