import {
  Box,
  HStack,
  Text,
  Button,
  Flex,
  Image,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDown, Mail, Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Portal,
  MenuPositioner,
} from "@chakra-ui/react";
import { useState } from "react";
import i18n from "./i18n";
import HomePage from "./pages/homePage";
import de from "./assets/de.svg";
import nl from "./assets/nl.svg";
import fr from "./assets/fr.svg";
import gb from "./assets/gb.svg";
import ContactPage from "./pages/contactPage";
import AboutPage from "./pages/aboutPage";
import WorkExperiencePage from "./pages/workExperiencePage";
import ProjectsPage from "./pages/projectsPage";

type PageKey = "home" | "about" | "work" | "projects" | "contact";
const githubURL = "https://github.com/Anastasov-L";
const linkedinURL =
  "https://www.linkedin.com/in/lyudmil-anastasov-325b7a241/";
const emailAddress = "lyudmil.anastasov@gmail.com";

function App() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

  const desktopButtonRefs: Record<
    PageKey,
    React.MutableRefObject<HTMLButtonElement | null>
  > = {
    home: useRef(null),
    about: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const mobileButtonRefs: Record<
    PageKey,
    React.MutableRefObject<HTMLButtonElement | null>
  > = {
    home: useRef(null),
    about: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  const navRef = useRef<HTMLDivElement | null>(null);


  const scrollToButton = (page: PageKey) => {
    const nav = navRef.current;
    const btn = mobileButtonRefs[page]?.current;
    if (!nav || !btn) return;

    const isOverflowing = nav.scrollWidth > nav.clientWidth;
    if (!isOverflowing) return;

    const btnLeft = btn.offsetLeft;
    const btnWidth = btn.offsetWidth;
    const navWidth = nav.clientWidth;

    const targetScrollLeft = btnLeft - navWidth / 2 + btnWidth / 2;

    nav.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth",
    });
  };


  const langButtonRef = useRef<HTMLButtonElement | null>(null);
  const [langMenuWidth, setLangMenuWidth] = useState<number>(0);


return (
  <Box
    position="absolute"
    inset="0"
    overflowY={{ base: "auto", lg: "hidden" }}
    overflowX="hidden"
    minH="100vh"
    h={{ base: "fit-content", md: "100vh" }}
    bg={`
      radial-gradient(circle at 50% 35%, rgba(255,255,255,0.015) 0%, transparent 38%),
      linear-gradient(180deg, #020304 0%, #040506 100%)
    `}
  >

    <Box
      position="relative"
      zIndex={10}
      w={{
        base: "100vw",
        lg: "80vw",
      }}
      mx={{base:"none",lg:"auto"}}
      minH="70%"
      h={{ base: "fit-content", lg: "80%" }}
      mt={{
        base: "0vh",
        lg: "10vh",
      }}
      overflow="hidden"
    >

      <Box
        position="absolute"
        inset="0"
        zIndex={0}
        pointerEvents="none"
        bg={`
          linear-gradient(
            90deg,
            rgba(16,18,20,0) 0%,
            rgba(16,18,20,0) 32%,
            rgba(16,18,20,0.15) 40%,
            rgba(16,18,20,0.35) 50%,
            rgba(16,18,20,0.6) 60%,
            rgba(16,18,20,0.85) 75%,
            rgba(16,18,20,0.98) 100%
          )
        `}
      />

      <Box
        position="absolute"
        inset="0"
        zIndex={0}
        pointerEvents="none"
        bg={`
          linear-gradient(
            180deg,
            rgba(255,255,255,0.025) 0%,
            rgba(255,255,255,0.01) 6%,
            transparent 16%
          )
        `}
      />

      <Box position="relative" zIndex={1}>
        <Box position="relative" bg="transparent">
        <HStack  w="100%" h = "80px" px={{base:"3px",lg:"60px"}} pt={{base:"60px",xl:"100px"}} >
          
          <HStack gap="40px" h="45px" display={{base:"none",lg:"block"}} justifyContent="flex-start"  align="flex-end" alignItems="flex-end" alignContent="flex-end"  minW={{ base: "50px", md: "280px", lg: "300px" }}>
            <Text
              display={{ base: "none", md: "block" }}
              fontSize={{ base: "14px", md: "24px" }}
              color="white"
              fontFamily="monospace">
              Lyudmil Anastasov
            </Text>
          </HStack>
          <Spacer display={{base:"none",lg:"block"}} />
          <HStack
          gap="0px"
            ref={mobileNavRef}
            overflowX="auto"
            whiteSpace="nowrap"
            maxW={{base:"100vw",lg:"60vw"}}
            display="flex"
            css={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
            h="45px"
            align="flex-end"
            alignContent="flex-end"
            alignItems="flex-end"
            justify="flex-end" 
            justifyContent="flex-end"
            justifyItems="flex-end"
          >
            <Button
              w="fit-content"
              h="30px"
              bg="transparent"
              ref={desktopButtonRefs.home}
              borderRadius="0px"
              fontSize={ currentPage === "home"? "20px":"17px"}
              _hover={{color:"white"}}
              color={currentPage === "home" ? "white":"gray"}
              onClick={() => {
                setCurrentPage("home");
                scrollToButton("home");
              }}
            >

                {t("Home")}
            </Button>

            <Button
            w="fit-content"
              bg="transparent"
              display={{base:"none",lg:"block"}}
              ref={desktopButtonRefs.about}
              borderRadius="0px"
              h="30px"
              fontSize={ currentPage === "about"? "20px":"17px"}
              _hover={{color:"white"}}
              color={currentPage === "about" ? "white":"gray"}
              onClick={() => {
                setCurrentPage("about");
                scrollToButton("about");
              }}
            >
                {t("About")}
            </Button>

            <Button
              bg="transparent"
              borderRadius="0px"
              w="fit-content"
              h="30px"
              ref={desktopButtonRefs.work}
              onClick={() => {
                setCurrentPage("work");
                scrollToButton("work");
              }}
              fontSize={ currentPage === "work"? "20px":"17px"}
              _hover={{color:"white"}}
              color={currentPage === "work" ? "white":"gray"}
            >

                {t("Work")}
            </Button>

            <Button
              bg="transparent"
              h="30px"
              w="fit-content"
              ref={desktopButtonRefs.projects}
              borderRadius="0px"
              fontSize={ currentPage === "projects"? "20px":"17px"}
              _hover={{ color:"white"}}
              color={currentPage === "projects" ? "white":"gray"}
              onClick={() => {
                setCurrentPage("projects");
                scrollToButton("projects");
              }}
            >
                {t("Projects")}
            </Button>

            <Button
              bg="transparent"
              display={{base:"none",lg:"block"}}
              ref={desktopButtonRefs.contact}
              w="fit-content"
              h="30px"
              onClick={() => {
                setCurrentPage("contact");
                scrollToButton("contact");
              }}
              borderRadius="0px"
              fontSize={ currentPage === "contact"? "20px":"17px"}
              _hover={{color:"white"}}
              color={currentPage === "contact" ? "white":"gray"}
            >
                {t("Contact")}
            </Button>
          </HStack>
          <Flex pt="15px">
            <MenuRoot onOpenChange={(e) => setMenuOpen(e.open)} >
              <MenuTrigger asChild >
                <Button
                  ref={langButtonRef}
                  onClick={() => {
                    if (langButtonRef.current) {
                      setLangMenuWidth(langButtonRef.current.offsetWidth);
                    }
                  }}
                  bg="transparent"
                  px="10px"
                  fontSize="17px"
                  h={{ base: "25px", md: "35px" }}
                  display="flex"
                  alignItems="center"
                  gap="6px"
                  color="white"
                  fontWeight="500"
                >
                  {i18n.language.toUpperCase()}

                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </Button>
              </MenuTrigger>

              <Portal>
                <MenuPositioner>
                  <MenuContent
                    bg="#1E1F23"
                    w={`${langMenuWidth}px`}
                    minW="0"
                  >
                    <MenuItem
                      value="en"
                      color="white"
                      onClick={() => {
                        i18n.changeLanguage("en");
                        setMenuOpen(false);
                      }}
                    >
                      EN <Image src={gb} mt="4px" boxSize="15px" ml="8px" />
                    </MenuItem>

                    <MenuItem
                      value="nl"
                      color="white"
                      onClick={() => {
                        i18n.changeLanguage("nl");
                        setMenuOpen(false);
                      }}
                    >
                      NL <Image mt="4px" src={nl} boxSize="15px" ml="8px" />
                    </MenuItem>

                    <MenuItem
                      value="fr"
                      color="white"
                      onClick={() => {
                        i18n.changeLanguage("fr");
                        setMenuOpen(false);
                      }}
                    >
                      FR <Image mt="4px" src={fr} boxSize="15px" ml="8px" />
                    </MenuItem>

                    <MenuItem
                      value="de"
                      color="white"
                      onClick={() => {
                        i18n.changeLanguage("de");
                        setMenuOpen(false);
                      }}
                    >
                      DE <Image mt="4px" src={de} boxSize="15px" ml="8px" />
                    </MenuItem>
                  </MenuContent>
                </MenuPositioner>
              </Portal>
            </MenuRoot>
          </Flex>
        </HStack>
</Box>
        {mobileMenuOpen && (
          <VStack
            position="absolute"
            top="80px"
            left="50%"
            transform="translateX(-50%)"
            w="80%"
            bg="#141518"
            border="1px solid #00FF8A"
            borderRadius="15px"
            p="20px"
            zIndex={9999}
            gap="20px"
          >
            <Button
              w="100%"
              onClick={() => {
                setCurrentPage("home");
                setMobileMenuOpen(false);
              }}
            >
              {t("Home")}
            </Button>

            <Button
              w="100%"
              onClick={() => {
                setCurrentPage("about");
                setMobileMenuOpen(false);
              }}
            >
              {t("About")}
            </Button>

            <Button
              w="100%"
              onClick={() => {
                setCurrentPage("work");
                setMobileMenuOpen(false);
              }}
            >
              {t("Work")}
            </Button>

            <Button
              w="100%"
              onClick={() => {
                setCurrentPage("projects");
                setMobileMenuOpen(false);
              }}
            >
              {t("Projects")}
            </Button>

            <Button
              w="100%"
              onClick={() => {
                setCurrentPage("contact");
                setMobileMenuOpen(false);
              }}
            >
              {t("Contact")}
            </Button>
          </VStack>
        )}


        {/* PAGE SWITCHER */}
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "work" && <WorkExperiencePage />}
        {currentPage === "projects" && <ProjectsPage />}
        <Box
  display={{ base: "block", lg: "none" }}
  w="100%"
  px="18px"
  pb="24px"
  pt="10px"
>
  <HStack
    w="100%"
    justify="center"
    gap="8px"
  >
    <Button
      minW="40px"
      w="40px"
      h="40px"
      p="0"
      bg="transparent"
      color="white"
      border="1px solid rgba(255,255,255,0.12)"
      borderRadius="12px"
      _hover={{
        bg: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.20)",
      }}
      _active={{
        bg: "rgba(255,255,255,0.07)",
      }}
      onClick={() => window.open(linkedinURL, "_blank")}
    >
      <Linkedin size={15} />
    </Button>

    <Button
      minW="40px"
      w="40px"
      h="40px"
      p="0"
      bg="transparent"
      color="white"
      border="1px solid rgba(255,255,255,0.12)"
      borderRadius="12px"
      _hover={{
        bg: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.20)",
      }}
      _active={{
        bg: "rgba(255,255,255,0.07)",
      }}
      onClick={() => window.open(githubURL, "_blank")}
    >
      <Github size={15} />
    </Button>

    <Button
      minW="40px"
      w="40px"
      h="40px"
      p="0"
      bg="transparent"
      color="white"
      border="1px solid rgba(255,255,255,0.12)"
      borderRadius="12px"
      _hover={{
        bg: "rgba(255,255,255,0.05)",
        borderColor: "rgba(255,255,255,0.20)",
      }}
      _active={{
        bg: "rgba(255,255,255,0.07)",
      }}
      onClick={() => {
        window.location.href = `mailto:${emailAddress}`;
      }}
    >
      <Mail size={15} />
    </Button>
  </HStack>
</Box>
        {currentPage === "home" && (
          <Flex justifyContent="flex-end"w="100%" px="60px" py="60px" display={{base:"none",lg:"flex"}}> 
            <Button
              bg="transparent"
              color="#00FF8A"
              fontSize={{ base: "12px", sm: "14px", md: "17px", lg: "22px" }}
              borderRadius="0px"
              _hover={{ borderBottom: "1px solid #00FF8A" }}
              onClick={() => {
                setCurrentPage("about");
                setMobileMenuOpen(false);
              }}
            >
              <Box display={{ base: "block", lg: "none" }}>
                {t("Discover")} 
              </Box>

              <Box display={{ base: "none", lg: "block" }}>
                {t("Powered by Me")} 
              </Box>
            </Button>
          </Flex>
        )}
      </Box>
      </Box>
      </Box>
  );
}

export default App;
