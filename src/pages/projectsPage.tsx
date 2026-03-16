import {
  Box,
  Text,
  HStack,
  Button,
  Flex,
  Wrap,
  WrapItem,
  VStack,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Carousel, { projects } from "../components/Carousel";

function MetaCard({
  children,
  isPrimary = false,
}: {
  children: React.ReactNode;
  isPrimary?: boolean;
}) {
  return (
    <Box
      px={{ base: "14px", md: "16px", lg: "18px" }}
      py={{ base: "10px", md: "11px", lg: "12px" }}
      minH="44px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border={
        isPrimary
          ? "1px solid rgba(0,255,138,0.45)"
          : "1px solid rgba(255,255,255,0.10)"
      }
      bg={
        isPrimary
          ? "rgba(0,255,138,0.03)"
          : "rgba(255,255,255,0.02)"
      }
      color={isPrimary ? "#00c97a" : "whiteAlpha.900"}
      fontSize={{ base: "13px", md: "14px", lg: "15px" }}
      fontWeight={isPrimary ? "600" : "400"}
      whiteSpace="nowrap"
      transition="all 0.2s ease"
      _hover={{
        borderColor: isPrimary
          ? "rgba(0,255,138,0.65)"
          : "rgba(255,255,255,0.18)",
        bg: isPrimary
          ? "rgba(0,255,138,0.05)"
          : "rgba(255,255,255,0.04)",
      }}
    >
      {children}
    </Box>
  );
}

function MobileProjectCard({
  project,
  t,
}: {
  project: (typeof projects)[number];
  t: (value: string) => string;
}) {
  const projectStatus =
    project.github === "LIVE" ? t("Private") : t("GitHub");

  return (
    <Box w="100%" overflow="hidden">
      <Box px="6px" pt="10px" pb="14px">
        <Text
          color="whiteAlpha.500"
          fontSize="11px"
          textTransform="uppercase"
          letterSpacing="0.08em"
          mb="6px"
        >
          {t("Project")}
        </Text>

        <Text
          color="white"
          fontWeight="700"
          fontSize="28px"
          lineHeight="1.05"
          mb={project.github !== "LIVE" ? "12px" : "0"}
        >
          {project.title}
        </Text>

        
      </Box>

      <Box w="100%" minH="220px">
        <Carousel images={project.images} mobileMode />
      </Box>

      <Box pt="14px">
        <Wrap gap="10px" justify="flex-start">
          <WrapItem>
            <MetaCard isPrimary>{projectStatus}</MetaCard>
          </WrapItem>

          {project.description.map((line, idx) => (
            <WrapItem key={idx}>
              <MetaCard>{t(line)}</MetaCard>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState(0);
  const { t } = useTranslation();

  const project = projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const projectStatus =
    project.github === "LIVE" ? t("Private") : t("GitHub");

  return (
    <Box
      w="100%"
      h={{ base: "80%", lg: "89%" }}
      overflowY="auto"
      overflowX="hidden"
      py={{ base: "22px", md: "30px", lg: "60px" }}
      px={{ base: "12px", md: "40px", lg: "60px" }}
    >
      <VStack
        display={{ base: "flex", lg: "none" }}
        align="stretch"
        gap="14px"
        w="100%"
      >
        {projects.map((projectItem) => (
          <MobileProjectCard
            key={projectItem.title}
            project={projectItem}
            t={t}
          />
        ))}
      </VStack>

      <Flex
        display={{ base: "none", lg: "flex" }}
        w="100%"
        direction="column"
        align="center"
        gap="28px"
      >
        <HStack
          w="100%"
          justify="center"
          align="center"
          pt={{ base: 2, lg: 0 }}
          gap="0"
        >
          <Button
            onClick={prevProject}
            variant="ghost"
            color="white"
            minW="auto"
            px={2}
            _hover={{ color: "#00FF8A", bg: "transparent" }}
          >
            <ChevronLeft />
          </Button>

          <Text
            textAlign="center"
            color="white"
            fontWeight="700"
            fontSize={{ base: "22px", md: "26px", lg: "28px" }}
            lineHeight="1.2"
            px="10px"
          >
            {project.title}
          </Text>

          <Button
            onClick={nextProject}
            variant="ghost"
            color="white"
            minW="auto"
            px={2}
            _hover={{ color: "#00FF8A", bg: "transparent" }}
          >
            <ChevronRight />
          </Button>
        </HStack>

        <Box
          w="100%"
          maxW="1400px"
          minH={{ base: "280px", md: "340px", lg: "430px" }}
        >
          <Carousel key={project.title} images={project.images} />
        </Box>

        <Box w="100%" maxW="1400px">
          <Wrap gap="10px" justify="center">
            <WrapItem>
              <MetaCard isPrimary>{projectStatus}</MetaCard>
            </WrapItem>

            {project.description.map((line, idx) => (
              <WrapItem key={idx}>
                <MetaCard>{t(line)}</MetaCard>
              </WrapItem>
            ))}

            {project.github !== "LIVE" && (
              <WrapItem>
                <Button
                  h="50px"
                  variant="outline"
                  border="1px solid gray"
                  color="white"
                  _hover={{ bg: "white", color: "#0E0F11" }}
                  onClick={() => window.open(project.github, "_blank")}
                >
                  View on GitHub
                </Button>
              </WrapItem>
            )}
          </Wrap>
        </Box>
      </Flex>
    </Box>
  );
}