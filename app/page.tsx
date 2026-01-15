import Image from "next/image";
import {
  Heading,
  Section,
  Container,
  Flex,
  Text,
  Box,
  Button,
  Link,
} from "@radix-ui/themes";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import CircusTent from "../public/CircusTent.jpg";
export default function Home() {
  return (
    <main>
      <Image
        style={{ objectFit: "cover", zIndex: -1, opacity: 0.6 }}
        src={CircusTent}
        fill
        alt="Circus Tent"
        preload={true}
      />
      <Container style={{ position: "relative", padding: "0 15px" }}>
        <Section pt="6" pb="4">
          <Heading mb="2" size="9" style={{ fontWeight: "bold" }}>
            Welcome To Mad Tea(se) Party
          </Heading>
        </Section>
        <Box>
          <Box>
            <Text as="p">More info coming soon!</Text>
            <Button size="3" variant="ghost" asChild>
              <a
                href="https://www.instagram.com/mad_tease_party/"
                rel={"noreferrer"}
                target={"_blank"}
              >
                <InstagramLogoIcon /> Follow us on instagram
              </a>
            </Button>
          </Box>
          <Flex mt={"6"} justify="center">
            <Flex direction="column" align="center">
              <Button size="4" variant="surface" asChild>
                <a
                  href="https://buytickets.at/madteaseparty/2023652/share/d3759eb9b7da8690e279dfd7e62a296f"
                  rel={"noreferrer"}
                  target={"_blank"}
                >
                  Get tickets to our fundraiser
                </a>
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </main>
  );
}
