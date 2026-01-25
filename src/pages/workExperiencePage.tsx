import { Text, VStack, HStack, Image, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import capisoftLogo from "../../images/capi.jpg";
import fiverLogo from "../../images/fiver2.png";
import telerikLogo from "../../images/telerik2.png";

export default function WorkExperiencePage() {
  const { t } = useTranslation();

  return (
    <VStack w="100%" h={{base:"80%",lg:"100%"}} align="flex-start"  >

      <Box
        w="100%"
        h="100%"
        overflowY="auto"
        overflowX="hidden"
        pr="0px" 
      >
        <Box
          display="grid"
          w="100%"
          gap="40px"
          py="20px"
          gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gridTemplateRows={{ base: "auto", lg: "repeat(5, 1fr)" }}
        >
          <VStack
            bg={{base:"#2B322C",lg:"#141518"}}
            borderRadius="20px"
            border={{base:"none",lg:"2px solid #00FF8A"}}
            p="30px"
            align="flex-start"
            gridRow={{ base: "auto", lg: "1 / span 5" }}
            gridColumn="1"
          >
            <HStack w="100%" gap = "10px">
              <Image src={capisoftLogo} boxSize="45px" borderRadius="8px" objectFit="contain" />
              <VStack align="flex-start" gap="0px">
                <Text fontSize="24px" color="white" fontWeight="700">
                  Full-Stack Developer
                </Text>
                <Text fontSize="16px" color="gray.400">
                  Mar 2025 - Present
                </Text>
              </VStack>
            </HStack>

            <VStack align="flex-start" pt={2}>
              <Text color="gray.300">
                • 4-month traineeship + 8-month internship +{" "}
                {t("active team member since then")}
              </Text>
              <Text color="gray.300">
                • {t("Developed a production grade")} TodoList app
              </Text>
              <Text color="gray.300">
                • {t("Automated browser tasks using")} Puppeteer
              </Text>
              <Text color="gray.300">
                • {t("Building scalable")} CRM {t("and payment platforms, engineering clean and intuitive")} UIs,{" "}
                {t("strengthening service reliability, and proactively resolving real-world issues using")}{" "}
                Sentry {t("diagnostics")}.
              </Text>
            </VStack>
          </VStack>

          <VStack
            bg={{base:"#2B322C",lg:"#141518"}}
            borderRadius="20px"
            border={{base:"none",lg:"2px solid #00FF8A"}}
            p="30px"
            align="flex-start"
            gridColumn={{ base: "1", lg: "2" }}
            gridRow={{ base: "auto", lg: "1 / span 3" }}
          >
            <HStack w="100%" gap="10px">
              <Image src={telerikLogo} boxSize="45px" borderRadius="12px"  objectFit="contain" />
              <VStack align="flex-start" gap="0px">
                <Text fontSize="24px" color="white" fontWeight="700">
                  Game Developer Assistant
                </Text>
                <Text fontSize="16px" color="gray.400">
                  Jan 2023 - Jan 2023
                </Text>
              </VStack>
            </HStack>

            <VStack align="flex-start" pt={2}>
              <Text color="gray.300">• {t("Assisted students as")} Scratch game developer</Text>
              <Text color="gray.300">• {t("Checked homework and supported the lecturer")}</Text>
            </VStack>
          </VStack>

          <VStack
            bg={{base:"#2B322C",lg:"#141518"}}
            borderRadius="20px"
            border={{base:"none",lg:"2px solid #00FF8A"}}
            p="30px"
            align="flex-start"
            gridColumn={{ base: "1", lg: "2" }}
            gridRow={{ base: "auto", lg: "4 / span 2" }}
          >
            <HStack w="100%" gap="10px">
              <Image src={fiverLogo} boxSize="47px" borderRadius="12px" objectFit="contain" />
              <VStack align="flex-start" gap="0px">
                <Text fontSize="24px" color="white" fontWeight="700">
                  Freelance Web Developer
                </Text>
                <Text fontSize="16px" color="gray.400">
                  Jan 2021 - Apr 2023
                </Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}
