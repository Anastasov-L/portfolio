import {
  Box,
  Text,
  VStack,
  HStack,
  Spacer,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import me from "../../images/me_png.png";
//import me2 from "../../images/ME.jpg";
import lyceeLogo from "../../images/lyceeLogo.png";
import vrijeLogo from "../../images/vrijeLogo.png";
//import capisoftLogo from "../../images/capi3.jpg";

export default function AboutPage() {
  const { t } = useTranslation();

  const imgSrc = useBreakpointValue({
    base: me,
    lg: me,
  });

  return (
    <Box
      w="100%"
      h={{ base: "80%", lg: "100%" }}
      overflowY="auto"
      overflowX="hidden"
      px="60px"
      py={{ base:"50px", md:"30px", lg:"90px" }}
    >
      <HStack
        w="100%"
        gap="40px"
        flexDir={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "stretch" }}
      >

{/* =============== MOBILE INTRO TEXT =============== */}

<VStack
  w={{ base: "100%", lg: "60%" }}
  align="flex-start"
  gap="30px"
  display={{ base: "flex", lg: "none" }}
>
  <Text fontSize="20px" color="gray.300" lineHeight="160%">
    {t("Hello! I'm")}{" "}
    <Box as="span" color="white" fontWeight="600">
      Lyudmil Anastasov
    </Box>{" "}
    {t("from Bulgaria. I'm a final year")}{" "}
    <Box as="span" fontWeight="600">
      Computer Science
    </Box>{" "}
    {t("student")}
    {t("with a minor in")}{" "}
    <Box as="span"  fontWeight="600">
      Deep Programming
    </Box>
    .
  </Text>
</VStack>

{/* =============== MOBILE SCHOOLS =============== */}

<VStack
  w="100%"
  gap="20px"
  display={{ base: "flex", lg: "none" }}
>

    <HStack>
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

    <HStack>
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


{/* =============== DESKTOP TEXT + SCHOOLS =============== */}

<VStack
  w={{ base: "100%", lg: "100%" }}
  h="445px"
  align="flex-start"
  py="20px"
  gap="30px"
  display={{ base: "none", lg: "flex" }}
>

  <Text fontSize="20px" color="gray.300" lineHeight="160%" py="10px">
    {t("Hello! I'm")}{" "}
    <Box as="span" color="white" fontWeight="600">
      Lyudmil Anastasov
    </Box>{" "}
    {t("from Bulgaria. I'm a final year")}{" "}
    <Box as="span"  fontWeight="600">
      Computer Science
    </Box>{" "}
    {t("student")}
    {t("with a minor in")}{" "}
    <Box as="span"fontWeight="600">
      Deep Programming
    </Box>
    .
    Currently I'm working at Capisoft as a Full Stack Developer.

  </Text>
      <Spacer/>
  <VStack w="100%" gap="20px">

      <HStack w ="100%">
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

    <Spacer />

      <HStack alignSelf="flex-start">
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
{/* =============== IMAGE CARD =============== */}
  <VStack w="40%" h =  "500px">
      <HStack w="100%" h= "100%" align="flex-start" justifySelf="flex-start" gap="10px">
    <Box
      w="100%"
      h="100%"
      maxH={{ base: "none", lg: "450px" }}
      borderRadius="16px"
      overflow="hidden"
      flexShrink={0}
    >
      <Image src={imgSrc} w="100%" h="100%" objectFit="cover" />
    </Box>
    
   
    </HStack>
      </VStack>


      </HStack>
    </Box>
  );
}
