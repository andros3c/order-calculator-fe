import Link from "next/link";
import { PageWrapper } from "./components/PageWrapper";
import styles from "./page.module.css";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <PageWrapper>
      <Flex id="home-section" w="100%">
        <Flex direction="column" justifyContent="center" gap="1.5em" h="100%">
          <Link href="#">
            <Flex w="100%" justifyContent="center">
              <Image
                w="40%"
                src="icon/receipt-recap-button.png"
                alt="button-icon"
              />
            </Flex>
          </Link>

          <Link href="/addNewReceipt">
            <Flex w="100%" justifyContent="center">
              <Image
                w="40%"
                src="icon/add-new-receipt-button.png"
                alt="button-icon"
              />
            </Flex>
          </Link>
          <Link href="#">
            <Flex w="100%" justifyContent="center">
              <Image
                w="40%"
                src="icon/price-and-list-button.png"
                alt="button-icon"
              />
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
