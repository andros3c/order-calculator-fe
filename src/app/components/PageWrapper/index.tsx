import { Flex } from "@chakra-ui/react";

export const PageWrapper = ({ children }: any) => {
  return (
    <Flex
      maxWidth="400px"
      minWidth="360px"
      m="auto"
      h="100vh"
      border="1px solid #a09e9e"
      px="30px"
      py="20px"
      position="relative"
      direction="column"
    >
      {children}
    </Flex>
  );
};
