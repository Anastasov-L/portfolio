import { Box, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const githubURL = "https://github.com/Anastasov-L";
const linkedinURL = "https://www.linkedin.com/in/lyudmil-anastasov-325b7a241/";

type ContactBlockProps = {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2?: string;
  buttonText: string;
  onClick: () => void;
  withRightBorder?: boolean;
};
 
function ContactBlock({
  icon,
  title,
  line1,
  line2,
  buttonText,
  onClick,
  withRightBorder = false,
}: ContactBlockProps) {
  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      px={{ base: 6, md: 8, lg: 10 }}
      py={{ base: 10, md: 12, lg: 14 }}
      borderRight={{
        base: "none",
        lg: withRightBorder ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
      borderBottom={{
        base: withRightBorder ? "1px solid rgba(255,255,255,0.08)" : "none",
        lg: "none",
      }}
      minH={{ base: "260px", lg: "360px" }}
    >
      <Box
        w="92px"
        h="92px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      //  border="1px solid rgba(255,255,255,0.10)"
        color="white"
        mb={7}
      >
        {icon}
      </Box>

      <Text
        color="white"
        fontSize={{ base: "24px", md: "26px", lg: "30px" }}
        fontWeight="600"
        letterSpacing="1px"
        textTransform="uppercase"
        mb={5}
      >
        {title}
      </Text>

      <VStack gap={1} mb={8}>
        <Text
          color="whiteAlpha.800"
          fontSize={{ base: "15px", md: "16px", lg: "17px" }}
          lineHeight="1.7"
        >
          {line1}
        </Text>

        {line2 && (
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "15px", md: "16px", lg: "17px" }}
            lineHeight="1.7"
          >
            {line2}
          </Text>
        )}
      </VStack>

      <Button
        bg="transparent"
        color="white"
        border="1px solid rgba(255,255,255,0.18)"
        minW={{ base: "160px", md: "180px", lg: "190px" }}
        fontWeight="500"
        _hover={{
          bg: "rgba(255,255,255,0.06)",
          borderColor: "rgba(255,255,255,0.28)",
        }}
        _active={{
          bg: "rgba(255,255,255,0.08)",
        }}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Box w="100%" h={{ base: "80%", lg: "100%" }} overflowY="auto" pr="10px">
      <VStack
        w="100%"
        py={{ base: "50px", md: "30px", lg: "120px" }}
        px={{ base: "20px", md: "40px", lg: "60px" }}
        gap="0"
      >
        <Box
          w="100%"
          borderTop="1px solid rgba(255,255,255,0.08)"
          borderBottom="1px solid rgba(255,255,255,0.08)"
        >
          <SimpleGrid columns={{ base: 1, lg: 3 }} >
            <ContactBlock
              icon={<Mail size={42} strokeWidth={1.8} />}
              title={t("Email")}
              line1="lyudmil.anastasov@gmail.com"
              buttonText={t("Send Email")}
              onClick={() =>
                (window.location.href = "mailto:lyudmil.anastasov@gmail.com")
              }
              withRightBorder
            />

            <ContactBlock
              icon={<Linkedin size={42} strokeWidth={1.8} />}
              title="LinkedIn"
              line1={t("Connect with me professionally")}
              buttonText={t("View Profile")}
              onClick={() => window.open(linkedinURL, "_blank")}
              withRightBorder
            />

            <ContactBlock
              icon={<Github size={42} strokeWidth={1.8} />}
              title="GitHub"
              line1={t("Check out my projects and code")}
              buttonText={t("View Repositories")}
              onClick={() => window.open(githubURL, "_blank")}
            />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}