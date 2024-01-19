"use client";
import { Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const DatePicker = () => {
  const [date, setDate]: any = useState({ day: "", date: "" });
  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const getDate = (date: any) => {
    const newDate = new Date(date);
    const day = newDate.getDay();
    return setDate({ day: dayNames[day], date: date });
  };

  return (
    <Flex direction="column" gap="0.3em">
      <Text>Hari dan Tanggal</Text>
      <Flex
        border="0.1px solid"
        borderColor="#BBB1B1"
        borderRadius="1em"
        w="100%"
        alignItems="center"
        gap="0.5em"
        justifyContent="space-between"
      >
        <Flex px="1em" w="70%">
          <Text>{date.day ? date.day : "Pilih Tanggal"}</Text>
        </Flex>

        <Input
          border="none"
          placeholder="Select Date and Time"
          size="md"
          type="date"
          fontSize="smaller"
          borderLeft="2px solid"
          borderColor="#BBB1B1"
          borderRightRadius="1em"
          borderLeftRadius="0"
          onChange={(e) => getDate(e.target.value)}
         
        />
      </Flex>
    </Flex>
  );
};
