import { Flex, Image, Select, Text } from "@chakra-ui/react";
import { PageWrapper } from "../components/PageWrapper";
import { SelectComponent } from "../components/SelectComponent";
import { DatePicker } from "../components/DatePicker";
import Link from "next/link";

const AddNewReceipt = () => {
  const option = ["ayam penyet", "lawas"];
  const category = ["cabai", "bumbu"];

  return (
    <PageWrapper>
      <Flex id="add-new-receipt-section" direction="column" gap="1em" w="100%">
        <Text fontWeight="bold" fontSize="2xl">
          Rekap Bon Tagihan
        </Text>
        <SelectComponent label="Nama Pemilik" data={option} />
        <SelectComponent label="Kategori Barang" data={category} />
        <DatePicker />
      </Flex>
      <Flex
        h="10%"
        bgColor="#094835"
        position="absolute"
        bottom={0}
        w="100%"
        left={0}
        justifyContent="space-around"
        alignItems="center"
        px="3em"
      >
        <Flex>
          <Text fontWeight="bold" color="#D16F00">Batalkan</Text>
        </Flex>

        <Link href="/">
          <Flex justifySelf="center" w="45%" mt="-3.5em" mx="auto">
            <Image src="icon/home-icon.png" />
          </Flex>
        </Link>

        <Flex>
          <Text fontWeight="bold" color="white">Lanjutkan</Text>
        </Flex>
      </Flex>
    </PageWrapper>
  );
};

export default AddNewReceipt;
