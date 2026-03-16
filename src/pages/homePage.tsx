import {
  Box,
  Text,
  VStack,
  HStack,
  Image,
  Flex,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import me from "../../images/me_png.png";
import lyceeLogo from "../../images/lyceeLogo.png";
import vrijeLogo from "../../images/vrijeLogo.png";


function SchoolRow({
  logo,
  title,
  subtitle,
}: {
  logo: string;
  title: string;
  subtitle: string;
}) {
  return (
    <HStack w="100%" align="center" gap="12px" py="10px">
      <Image src={logo} boxSize="46px" objectFit="contain" flexShrink={0} />
      <Box>
        <Text fontSize="18px" color="white" fontWeight="600" lineHeight="1.2">
          {title}
        </Text>
        <Text fontSize="14px" color="gray.400" lineHeight="1.2" pt="4px">
          {subtitle}
        </Text>
      </Box>
    </HStack>
  );
}





export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box
      w="100%"
      h={{ base: "80%", lg: "100%" }}
      overflowY="auto"
      overflowX="hidden"
      px={{ base: "14px", md: "22px", lg: "0px" }}
      py={{ base: "26px", md: "34px", lg: "0px" }}
    >
      {/* ================= MOBILE / TABLET ================= */}
      <Box display={{ base: "block", lg: "none" }} w="100%">
        <Box
          w="100%"
          minH="100%"
          px={{ base: "4px", md: "10px" }}
          pt={{ base: "26px", md: "30px" }}
          pb={{ base: "34px", md: "42px" }}
        >
          <Box w="100%" pb={{ base: "24px", md: "30px" }}>
            <Text
              fontSize={{ base: "46px", sm: "58px", md: "72px" }}
              fontWeight="700"
              color="white"
              lineHeight="0.9"
              letterSpacing="-0.04em"
            >
              Full-Stack
            </Text>

            <Text
              fontSize={{ base: "46px", sm: "58px", md: "72px" }}
              fontWeight="700"
              color="white"
              lineHeight="0.9"
              letterSpacing="-0.04em"
            >
              Coder &
            </Text>

            <Text
              fontSize={{ base: "46px", sm: "58px", md: "72px" }}
              fontWeight="700"
              color="white"
              lineHeight="0.9"
              letterSpacing="-0.04em"
            >
              more
            </Text>

            <Box pt="18px">
              <Box
                w="fit-content"
                px="14px"
                py="9px"
                border="1px solid rgba(255,255,255,0.12)"
                bg="rgba(255,255,255,0.02)"
              >
                <Text fontSize="12px" color="white" fontWeight="500">
                  {t("2+ years of experience")}
                </Text>
              </Box>
            </Box>

            <Box
              position="relative"
              w="100%"
              h={{ base: "320px", sm: "380px", md: "430px" }}
              mt="28px"
              overflow="hidden"
            >
              <Box
                position="absolute"
                right={{ base: "8px", md: "20px" }}
                bottom="0"
                w={{ base: "72%", sm: "64%", md: "54%" }}
                h={{ base: "74%", sm: "76%", md: "78%" }}
                bg="rgba(255,255,255,0.04)"
                border="1px solid rgba(255,255,255,0.06)"
                transform="rotate(-7deg)"
              />

              <Box
                position="absolute"
                right={{ base: "0px", md: "10px" }}
                bottom="0"
                w={{ base: "86%", sm: "72%", md: "60%" }}
                h="100%"
                display="flex"
                alignItems="flex-end"
                justifyContent="flex-end"
              >
                <Image
                  src={me}
                  h="100%"
                  w="100%"
                  objectFit="contain"
                  objectPosition="bottom center"
                />
              </Box>
            </Box>
          </Box>

          <Box pt={{ base: "12px", md: "18px" }}>
            <Text
              fontSize={{ base: "15px", md: "16px" }}
              color="gray.400"
              lineHeight="1.6"
              mb="10px"
            >
              {t("Hi, I'm")}
            </Text>

            <Text
              fontSize={{ base: "36px", sm: "42px", md: "50px" }}
              fontWeight="700"
              color="white"
              lineHeight="0.98"
              letterSpacing="-0.03em"
              mb="18px"
            >
              Lyudmil Anastasov
            </Text>

            <Text
              fontSize={{ base: "17px", md: "18px" }}
              color="gray.300"
              lineHeight="1.8"
              maxW="760px"
            >
              {t(" A final year")}{" "}
              <Box as="span" color="white" fontWeight="600">
                Computer Science
              </Box>{" "}
              {t("student")} {t("with a minor in")}{" "}
              <Box as="span" color="white" fontWeight="600">
                Deep Programming
              </Box>
              . {t("Currently I'm working at Capisoft as a Full Stack Developer.")}
            </Text>

            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "stretch", md: "flex-start" }}
              justify="space-between"
              gap="22px"
              pt={{ base: "28px", md: "34px" }}
            >
              <VStack
                w={{ base: "100%", md: "50%" }}
                align="stretch"
                gap="6px"
              >
                <SchoolRow
                  logo={vrijeLogo}
                  title="Vrije Universiteit Amsterdam"
                  subtitle={t("Amsterdam, Netherlands")}
                />

                <SchoolRow
                  logo={lyceeLogo}
                  title='Lycée Français “Alphonse de Lamartine”'
                  subtitle={t("Sofia, Bulgaria")}
                />
              </VStack>
            </Flex>
          </Box>

         
        </Box>
      </Box>

      {/* ================= DESKTOP ================= */}
      <Box
        display={{ base: "none", lg: "flex" }}
        w="85%"
        h="70%"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          py={{ base: "50px", md: "30px", lg: "140px" }}
          px={{ base: "15px", lg: "60px" }}
        >
          <Text
            fontSize={{
              base: "24px",
              sm: "29px",
              md: "40px",
              lg: "40px",
              xl: "40px",
            }}
            fontWeight="700"
            color="white"
            lineHeight="120%"
          >
            {t(
              "Full Stack Software Engineer ready to meet your business’s needs.",
            )}
          </Text>

          <Text
            fontSize={{ base: "15px", md: "25px", lg: "35px", xl: "33px" }}
            color="gray"
            py="10px"
          >
            {t("2+ years of experience")}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}