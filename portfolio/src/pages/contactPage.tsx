import { Box, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Mail, Linkedin, Github } from "lucide-react";

const githubURL = "https://github.com/Anastasov-L";
const linkedinURL = "https://www.linkedin.com/in/lyudmil-anastasov-325b7a241/";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Box w="100%" h={{base:"80%",lg:"100%"}} overflowY="auto" pr="10px">
      <VStack w="100%">
        <Box>
          <Text
            fontSize={{ base: "32px", md: "40px", lg: "56px" }}
            fontWeight="700"
            color="white"
          >
            {t("Get in")}{" "}
            <Box as="span" color="#00FF8A">
              {t("Touch")}
            </Box>
          </Text>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 1, lg: 3 }}
          w="100%"
          gap={{ base: "25px", md: "30px", lg: "40px" }}
          py="2vh"
        >
          {/* LINKEDIN */}
          <Box
            bg="#141518"
            borderRadius="20px"
            border="1px solid #00FF8A"
            p={{ base: 6, md: 8 }}
            textAlign="center"
          >
            <Linkedin size={48} color="#00FF8A" />
            <Text fontSize={{ base: "20px", md: "22px", lg: "24px" }} mt={3} color="#00FF8A">
              LinkedIn
            </Text>
            <Text color="white" mt={1} fontSize={{ base: "14px", md: "16px" }}>
              {t("Connect with me professionally")}
            </Text>

            <Button
              mt={5}
              w="100%"
              variant="outline"
              borderColor="#00FF8A"
              color="#00FF8A"
              _hover={{ bg: "#00FF8A", color: "#0E0F11" }}
              onClick={() => window.open(linkedinURL, "_blank")}
            >
              {t("View Profile")}
            </Button>
          </Box>

          {/* EMAIL */}
          <Box
            bg="#141518"
            borderRadius="20px"
            border="1px solid #00FF8A"
            p={{ base: 6, md: 8 }}
            textAlign="center"
          >
            <Mail size={48} color="#00FF8A" />
            <Text fontSize={{ base: "20px", md: "22px", lg: "24px" }} mt={3} color="#00FF8A">
              Email
            </Text>
            <Text color="white" mt={1} fontSize={{ base: "14px", md: "16px" }}>
              lyudmil.anastasov@gmail.com
            </Text>
          </Box>

          {/* GITHUB */}
          <Box
            bg="#141518"
            borderRadius="20px"
            border="1px solid #00FF8A"
            p={{ base: 6, md: 8 }}
            textAlign="center"
          >
            <Github size={48} color="#00FF8A" />
            <Text fontSize={{ base: "20px", md: "22px", lg: "24px" }} mt={3} color="#00FF8A">
              GitHub
            </Text>
            <Text color="white" mt={1} fontSize={{ base: "14px", md: "16px" }}>
              {t("Check out my projects & code")}
            </Text>

            <Button
              mt={5}
              w="100%"
              variant="outline"
              borderColor="#00FF8A"
              color="#00FF8A"
              _hover={{ bg: "#00FF8A", color: "#0E0F11" }}
              onClick={() => window.open(githubURL, "_blank")}
            >
              {t("View Repositories")}
            </Button>
          </Box>
        </SimpleGrid>

        <Text
          fontSize={{ base: "16px", md: "18px", lg: "20px" }}
          color="gray.400"
          textAlign="center"
          maxW="90%"
          py="0px"
        >
          {t("I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.")}
        </Text>
      </VStack>
    </Box>
  );
}
