import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import me from "../../images/ME.jpg";
import lyceeLogo from "../../images/lyceeLogo.png";
import vrijeLogo from "../../images/vrijeLogo.png";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box w="100%" h={{base:"80%",lg:"100%"}} overflowY="auto" overflowX="hidden" pr="10px">

      <HStack
        w="100%"
        py="20px"
        gap="40px"
        flexDir={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "stretch" }}
      >
        <VStack
  w={{ base: "100%", lg: "40%" }}
  h="100%"
  bg="#141518"
  border="1px solid #00FF8A"
  borderRadius="20px"
  p="20px"
  align="flex-start"
>
  <Box
    w="100%"
    flex="1"
    maxH={{base:"none",lg:"280px"}}           
    borderRadius="16px"
    overflow="hidden"
  >
    <Image
      src={me}
      w="100%"
      h="100%"
      objectFit="cover"    
    />
  </Box>

  <Text fontSize="18px" color="gray.400">
    {t("I'm completing my studies at Vrije Universiteit Amsterdam, while working as a")}{" "}
    <Box as="span" color="#00FF8A" fontWeight="600">
      Full Stack Developer
    </Box>.
  </Text>
</VStack>


        <VStack
          w={{ base: "100%", lg: "60%" }}
          align="flex-start"
          gap="30px"
        >
          <Text fontSize="20px" color="gray.300" lineHeight="160%">
            {t("Hello! I'm")}{" "}
            <Box as="span" color="white" fontWeight="600">
              Lyudmil Anastasov
            </Box>{" "}
            {t("from Bulgaria. I'm a final year")}{" "}
            <Box as="span" color="#00FF8A" fontWeight="600">
              Computer Science
            </Box>{" "}
            {t("student")}
            {t("with a minor in")}{" "}
            <Box as="span" color="#00FF8A" fontWeight="600">
              Deep Programming
            </Box>.
          </Text>

          {/* SCHOOLS */}
          <VStack w="100%" align="flex-start" gap="10px" h = "100%"  justify="flex-end" >
            <HStack
              w="100%"
              p="20px"
              borderRadius="15px"
              bg="#141518"
              border="1px solid #00FF8A"
            >
              <Image src={vrijeLogo} boxSize="60px" objectFit="contain" />
              <VStack align="flex-start" gap="0px">
                <Text fontSize="22px" color="white" fontWeight="600">
                  Vrije Universiteit Amsterdam
                </Text>
                <Text fontSize="16px" color="gray.400">
                  {t("Amsterdam, Netherlands")}
                </Text>
              </VStack>
            </HStack>

            <HStack
              w="100%"
              p="20px"
              borderRadius="15px"
              bg="#141518"
              border="1px solid #00FF8A"
            >
              <Image src={lyceeLogo} boxSize="60px" objectFit="contain" />
              <VStack align="flex-start" gap="0px">
                <Text fontSize="22px" color="white" fontWeight="600">
                  Lycée Français “Alphonse de Lamartine”
                </Text>
                <Text fontSize="16px" color="gray.400">
                  {t("Sofia, Bulgaria")}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
}
