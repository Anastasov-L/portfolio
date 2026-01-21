import { Box, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
   return(
    <Box w="85%" h="70%"  display="flex" flexDirection="column" justifyContent="space-between">
      <Box py={{base:"50px",md:"30px",lg:"60px"}}>
        <Text fontSize={{base:"24px",sm:"29px",md:"40px",lg:"40px", xl:"40px"}} fontWeight="700" color="white" lineHeight="120%">
          {t("Full Stack Software Engineer ready to")}{" "}
          <Box as="span" color="#00FF8A">{t("meet")}</Box>{" "}
          {t("your")} <Box as="span" color="#00FF8A">{t("business’s needs")}</Box>.
        </Text>

        <Text fontSize={{base:"15px",md:"25px",lg:"35px",xl:"33px"}} color="gray" py="10px">
          {t("2+ years of experience")}
        </Text>
      </Box>
    </Box>
  );
}