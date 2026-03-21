import {
  Text,
  VStack,
  HStack,
  Image,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import capisoftLogo from "../../images/capi.jpg";
import fiverLogo from "../../images/fiver2.png";
import telerikLogo from "../../images/telerik2.png";

type WorkItem = {
  id: number;
  logo: string;
  title: string;
  date: string;
  intro: string;
  description: string;
  stack?: string;
};

export default function WorkExperiencePage() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [mobileExpandedId, setMobileExpandedId] = useState<number | null>(1);

  const workItems: WorkItem[] = [
    {
      id: 1,
      logo: capisoftLogo,
      title: "Full-Stack Developer",
      date: "June 2025 - Present",
      intro: `8-month intern ${t(" -> team member since")} at Capisoft.nl`,
      description: `${t("Building scalable")} CRM ${t(
        "and payment platforms, engineering clean and intuitive",
      )} UIs, ${t(
        "strengthening service reliability, and proactively resolving real-world issues using",
      )} Sentry ${t("diagnostics")}.`,
      stack: "React + Vite, TypeScript, Django REST",
    },
    {
      id: 2,
      logo: capisoftLogo,
      title: "Full-Stack Developer",
      date: "Mar 2025 - June 2025",
      intro: "Traineeship at Capisoft.nl",
      description: `${t("Developed a production grade")} TodoList app, ${t(
        "Automated browser tasks using",
      )} Puppeteer. ${t("Learned authentication practises:")} Google Firebase. ${t(
        "Expanded my frontend skills:",
      )} Chakra UI.`,
      stack: "React + Vite, TypeScript, Django REST",
    },
    {
      id: 3,
      logo: telerikLogo,
      title: "Game Dev Assistant",
      date: "Jan 2023 - Jan 2023",
      intro: "Assistant program",
      description: `${t("Assisted students as")} Scratch game developer. ${t(
        "Checked homework and supported the lecturer",
      )}.`,
    },
    {
      id: 4,
      logo: fiverLogo,
      title: "Freelance Web Dev",
      date: "Jan 2021 - Apr 2023",
      intro: "Part time",
      description: `${t(
        "Built and delivered custom websites for clients, focusing on clean UI and responsive design.",
      )} ${t(
        "Worked directly with clients to gather requirements and deliver production-ready solutions.",
      )}`,
      stack: "HTML, CSS, JavaScript, React",
    },
  ];

  const cardBaseProps = {
    bg: "#222423",
    alignSelf: "flex-start" as const,
    position: "relative" as const,
    overflow: "hidden" as const,
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
    transition: "all 0.28s ease",
    cursor: "pointer",
    _hover: {
      transform: "translateY(-6px)",
      bg: "#272a29",
      borderColor: "rgba(255,255,255,0.11)",
      boxShadow: "0 18px 40px rgba(0,0,0,0.32)",
    },
  };

  const ChevronIndicator = ({ isExpanded }: { isExpanded: boolean }) => (
    <Box
      position="absolute"
      bottom="10px"
      left="50%"
      transform="translateX(-50%)"
      color="gray.400"
      pointerEvents="none"
      transition="color 0.2s ease"
    >
      {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
    </Box>
  );

  const TimelineDot = ({
    isExpanded,
    isHovered,
  }: {
    isExpanded: boolean;
    isHovered: boolean;
  }) => {
    const isActive = isExpanded || isHovered;

    return (
      <Box
        position="relative"
        w="16px"
        h="16px"
        borderRadius="50%"
        border="2px solid"
        borderColor={
          isExpanded
            ? "rgba(255,255,255,0.95)"
            : isHovered
              ? "rgba(255,255,255,0.7)"
              : "rgba(255,255,255,0.45)"
        }
        bg="#040506"
        transition="all 0.28s ease"
        transform={isActive ? "scale(1.08)" : "scale(1)"}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w={isExpanded ? "8px" : isHovered ? "6px" : "0px"}
          h={isExpanded ? "8px" : isHovered ? "6px" : "0px"}
          borderRadius="50%"
          bg={
            isExpanded
              ? "linear-gradient(135deg, #ffffff, #b8c4ff)"
              : "rgba(255,255,255,0.75)"
          }
          boxShadow={
            isExpanded
              ? "0 0 14px rgba(184,196,255,0.55)"
              : isHovered
                ? "0 0 10px rgba(255,255,255,0.25)"
                : "none"
          }
          transition="all 0.3s ease"
        />

        {isExpanded && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="16px"
            h="16px"
            borderRadius="50%"
            bg="rgba(184,196,255,0.18)"
            animation="pulseRing 1.8s ease-in-out infinite"
            pointerEvents="none"
          />
        )}
      </Box>
    );
  };

  const MobileTimelineCard = ({
    item,
    isExpanded,
    onClick,
    isLast,
  }: {
    item: WorkItem;
    isExpanded: boolean;
    onClick: () => void;
    isLast: boolean;
  }) => {
    return (
      <Box
        position="relative"
        w="100%"
        pl="38px"
        pb={isLast ? "0px" : "18px"}
      >
        <Box
          position="absolute"
          left="11px"
          top="0"
          bottom={isLast ? "60px" : "0"}
          w="2px"
          bg="rgba(255,255,255,0.14)"
        />

        <Box
          position="absolute"
          left="6px"
          top="24px"
          w="12px"
          h="12px"
          borderRadius="4px"
          border="1px solid"
          borderColor={
            isExpanded
              ? "rgba(255,255,255,0.92)"
              : "rgba(255,255,255,0.36)"
          }
          bg={isExpanded ? "rgba(255,255,255,0.12)" : "#0b0c0d"}
          boxShadow={
            isExpanded ? "0 0 14px rgba(184,196,255,0.18)" : "none"
          }
          zIndex={2}
          transition="all 0.28s ease"
        />

        <Box
          position="absolute"
          left="18px"
          top="29px"
          w="16px"
          h="2px"
          bg="rgba(255,255,255,0.14)"
        />

        <Box
  onClick={onClick}
  cursor="pointer"
  bg={isExpanded ? "#272a29" : "#222423"}
  border="1px solid"
  borderColor={
    isExpanded
      ? "rgba(255,255,255,0.15)"
      : "rgba(255,255,255,0.06)"
  }
  borderRadius="18px"
  px="16px"
  pt="16px"
  pb="16px"
  h={isExpanded ? "auto" : "100px"}
  overflow="hidden"
  boxShadow={
    isExpanded
      ? "0 18px 38px rgba(0,0,0,0.32)"
      : "0 8px 20px rgba(0,0,0,0.16)"
  }
  transition="all 0.28s ease"
>
          <HStack align="flex-start" gap="12px">
            <Image
              src={item.logo}
              boxSize="42px"
              borderRadius="10px"
              flexShrink={0}
            />

            <VStack align="flex-start" gap="1px" flex="1" minW={0}>
              <Text
                fontSize="18px"
                color="white"
                fontWeight="700"
                lineHeight="1.15"
              >
                {item.title}
              </Text>

              <Text fontSize="13px" color="gray.400">
                {item.date}
              </Text>
            </VStack>

            <Box color="gray.400" pt="2px" flexShrink={0}>
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Box>
          </HStack>

          <VStack align="flex-start" gap="10px" pt="14px">
            <Text color="gray.300" fontSize="14px">
              {item.intro}
            </Text>

            <Text
              color="gray.300"
              fontSize="14px"
              lineHeight="1.7"
              overflow={isExpanded ? "visible" : "hidden"}
              display={isExpanded ? "block" : "-webkit-box"}
              style={
                isExpanded
                  ? undefined
                  : {
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical" as any,
                    }
              }
            >
              {item.description}
            </Text>

            {item.stack && (
              <Text color="gray.300" fontSize="13px">
                Stack: {item.stack}
              </Text>
            )}
          </VStack>
        </Box>
      </Box>
    );
  };

  return (
    <VStack w="100%" h="100%" align="stretch">
      <Box
        as="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pulseRing {
              0% {
                transform: translate(-50%, -50%) scale(0.9);
                opacity: 0.65;
              }
              70% {
                transform: translate(-50%, -50%) scale(1.6);
                opacity: 0;
              }
              100% {
                transform: translate(-50%, -50%) scale(1.6);
                opacity: 0;
              }
            }
          `,
        }}
      />

      {/* MOBILE */}
      <Box display={{ base: "block", md: "none" }} w="100%" >
        <Box px="14px" pt="80px" pb="28px">
          <VStack w="100%" align="stretch" gap="0">
            {workItems.map((item, index) => (
              <MobileTimelineCard
                key={item.id}
                item={item}
                isExpanded={mobileExpandedId === item.id}
                isLast={index === workItems.length - 1}
                onClick={() =>
                  setMobileExpandedId((prev) =>
                    prev === item.id ? null : item.id,
                  )
                }
              />
            ))}
          </VStack>
        </Box>
      </Box>

      <Box display={{ base: "none", md: "block" }} w="100%">
        <Box
          w="100%"
          px="60px"
          pt={{ md: "30px", lg: "120px" }}
          pb="70px"
        >
          <HStack w="100%" gap="20px" align="flex-start" overflow="visible">
            <Box
              w="24%"
              h={expanded ? "440px" : "250px"}
              py="35px"
              px="20px"
              onClick={() => setExpanded(!expanded)}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              {...cardBaseProps}
            >
              <Box h="85%" overflow="hidden">
                <HStack w="100%" gap="10px">
                  <Image
                    src={capisoftLogo}
                    boxSize="45px"
                    borderRadius="8px"
                    transition="transform 0.28s ease"
                  />

                  <VStack align="flex-start" gap="0px">
                    <Text fontSize="24px" color="white" fontWeight="700">
                      Full-Stack Developer
                    </Text>

                    <Text fontSize="16px" color="gray.400">
                      June 2025 - Present
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="flex-start" pt={2}>
                  <Text color="gray.300">
                    {t("8-month intern,")} {t("now part of the team at ")}Capisoft.nl
                  </Text>

                  <Text color="gray.300" lineClamp={expanded ? "none" : "3"}>
                    {t("Building")} CRM{" "}
                    {t("and payment platforms, engineering clean")}{" "}
                    UIs,{" "}
                    {t(
                      "strengthening service reliability, and active bug response with",
                    )}{" "}
                    Sentry {t("diagnostics")}.
                  </Text>

                  <Spacer />

                  <Text color="gray.300">
                    Stack: React + Vite, TypeScript, Django REST
                  </Text>
                </VStack>
              </Box>

              <ChevronIndicator isExpanded={expanded} />
            </Box>

            <Box
              w="24%"
              h={expanded2 ? "440px" : "250px"}
              py="35px"
              px="20px"
              onClick={() => setExpanded2(!expanded2)}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              {...cardBaseProps}
            >
              <Box h="85%" overflow="hidden">
                <HStack w="100%" gap="10px">
                  <Image src={capisoftLogo} boxSize="45px" borderRadius="8px" />

                  <VStack align="flex-start" gap="0px">
                    <Text fontSize="24px" color="white" fontWeight="700">
                      Full-Stack Developer
                    </Text>

                    <Text fontSize="16px" color="gray.400">
                      Mar 2025 - June 2025
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="flex-start" pt={2}>
                  <Text color="gray.300">
                    Traineeship at Capisoft.nl
                  </Text>

                  <Text color="gray.300" lineClamp={expanded2 ? "none" : "4"}>
                    {t("Developed a production grade")} TodoList app,{" "}
                    {t("Automated browser tasks using")} Puppeteer.{" "}
                    {t("Learned authentication practises:")} Google Firebase.{" "}
                    {t("Expanded my frontend skills:")} Chakra UI.
                  </Text>

                  <Spacer />

                  <Text color="gray.300">
                    Stack: React + Vite, TypeScript, Django Rest
                  </Text>
                </VStack>
              </Box>

              <ChevronIndicator isExpanded={expanded2} />
            </Box>

            <Box
              w="24%"
              h={expanded3 ? "440px" : "250px"}
              py="35px"
              px="20px"
              onClick={() => setExpanded3(!expanded3)}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              {...cardBaseProps}
            >
              <Box h="85%" overflow="hidden">
                <HStack w="100%" gap="10px">
                  <Image src={telerikLogo} boxSize="45px" borderRadius="12px" />

                  <VStack align="flex-start" gap="0px">
                    <Text fontSize="24px" color="white" fontWeight="700">
                      Game Dev Assistant
                    </Text>

                    <Text fontSize="16px" color="gray.400">
                      Jan 2023 - Jan 2023
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="flex-start" pt={2}>
                  <Text color="gray.300">Assistant program</Text>

                  <Text color="gray.300" lineClamp={expanded3 ? "none" : "4"}>
                    {t("Assisted students as")} Scratch game developer.{" "}
                    {t("Checked homework and supported the lecturer")}.
                  </Text>
                </VStack>
              </Box>

              <ChevronIndicator isExpanded={expanded3} />
            </Box>

            <Box
              w="24%"
              h={expanded4 ? "440px" : "250px"}
              py="35px"
              px="20px"
              onClick={() => setExpanded4(!expanded4)}
              onMouseEnter={() => setHoveredCard(4)}
              onMouseLeave={() => setHoveredCard(null)}
              {...cardBaseProps}
            >
              <Box h="85%" overflow="hidden">
                <HStack w="100%" gap="10px">
                  <Image src={fiverLogo} boxSize="47px" borderRadius="12px" />

                  <VStack align="flex-start" gap="0px">
                    <Text fontSize="24px" color="white" fontWeight="700">
                      Freelance Web Dev
                    </Text>

                    <Text fontSize="16px" color="gray.400">
                      Jan 2021 - Apr 2023
                    </Text>
                  </VStack>
                </HStack>

                <VStack align="flex-start" pt={2}>
                  <Text color="gray.300">{t("Part time")}</Text>

                  <Text color="gray.300" lineClamp={expanded4 ? "none" : "4"}>
                    {t(
                      "Built and delivered custom websites for clients, focusing on clean UI and responsive design.",
                    )}{" "}
                    {t(
                      "Worked directly with clients to gather requirements and deliver production-ready solutions.",
                    )}
                  </Text>

                  <Spacer />

                  <Text color="gray.300">
                    Stack: HTML, CSS, JavaScript, React
                  </Text>
                </VStack>
              </Box>

              <ChevronIndicator isExpanded={expanded4} />
            </Box>
          </HStack>
        </Box>

        <Box
          w="100%"
          px="60px"
          pb={{ base: "20px", lg: "40px" }}
          position="relative"
        >
          <Box position="relative" w="100%" h="40px">
            <Box
              position="absolute"
              top="50%"
              left="0"
              right="0"
              h="2px"
              bg="rgba(255,255,255,0.14)"
              transform="translateY(-50%)"
            />

            <HStack
              position="absolute"
              top="50%"
              left="0"
              right="0"
              transform="translateY(-50%)"
              justify="space-between"
              px="12%"
            >
              <TimelineDot isExpanded={expanded} isHovered={hoveredCard === 1} />
              <TimelineDot
                isExpanded={expanded2}
                isHovered={hoveredCard === 2}
              />
              <TimelineDot
                isExpanded={expanded3}
                isHovered={hoveredCard === 3}
              />
              <TimelineDot
                isExpanded={expanded4}
                isHovered={hoveredCard === 4}
              />
            </HStack>
          </Box>
        </Box>
      </Box>
    </VStack>
  );
}