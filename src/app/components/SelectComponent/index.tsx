"use client";
import { Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

export const SelectComponent = ({ label, data }: any) => {
  const [isManual, setManual] = useState("false");
  return (
    <Flex direction="column" w="100%" gap="0.3em">
      <Text >{label}</Text>
      <Flex border="0.1px solid" borderColor="#BBB1B1" borderRadius="1em">
        {isManual ? (
          <Input w="100%" border="none" placeholder="Ketik Disini"></Input>
        ) : (
          <Select placeholder="Pilih Salah Satu" w="100%" border="none">
            {data.map((data: any, idx: any) => {
              return (
                <option key={idx} value="option1">
                  {data}
                </option>
              );
            })}
            <Text>asdasd</Text>
          </Select>
        )}

        <Button
          bgColor="#094835"
          color="white"
          fontSize="smaller"
          fontWeight="medium"
          border="0.1px solid"
          borderColor="#094835"
          borderRightRadius="1em"
          borderLeftRadius="0"
          onClick={() => setManual((prev): any => !prev)}
          w="30%"
        >
          {isManual ? (
            <>
              pilih <br /> satu
            </>
          ) : (
            <>
              ketik <br />
              manual
            </>
          )}
        </Button>
      </Flex>
    </Flex>
  );
};
