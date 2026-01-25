import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useTypewriter } from "../components/useTypewriter";
import { useState, useEffect } from "react";

export default function HomePage() {
  const { t } = useTranslation();

  const line = t("Full Stack Software Engineer ready to meet your business’s needs.");
  const line2 = t("2+ years of experience");

  const { output: typed, isDone } = useTypewriter(line, 35);

  const [startSecond, setStartSecond] = useState(false);

  useEffect(() => {
    if (isDone) setStartSecond(true);
  }, [isDone]);

  const { output: typed2 } = useTypewriter(startSecond ? line2 : "", 35);

  return (
    <Box
      w="85%"
      h="70%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box py={{ base:"50px", md:"30px", lg:"60px" }} px={{base:"15px", lg:"0px"}}>
        
        <Text
          fontSize={{ base:"24px", sm:"29px", md:"40px", lg:"40px", xl:"40px" }}
          fontWeight="700"
          color="white"
          lineHeight="120%"
        >
          {typed}
        </Text>

        <Text
          fontSize={{ base:"15px", md:"25px", lg:"35px", xl:"33px" }}
          color="gray"
          py="10px"
        >
          {typed2}
        </Text>

      </Box>
    </Box>
  );
}
