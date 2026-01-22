import { Box, HStack, Text, Button,  Flex, Image, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

import {
  MenuRoot,
  MenuTrigger,
  MenuContent,
  MenuItem,
  Portal,
  MenuPositioner
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
import { Home, Info, Briefcase, Folder, Mail } from "lucide-react";
type PageKey = "home" | "about" | "work" | "projects" | "contact";

function App() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const navRef = useRef<HTMLDivElement | null>(null);
const buttonRefs: Record<PageKey, React.MutableRefObject<HTMLButtonElement | null>> = {
  home: useRef<HTMLButtonElement | null>(null),
  about: useRef<HTMLButtonElement | null>(null),
  work: useRef<HTMLButtonElement | null>(null),
  projects: useRef<HTMLButtonElement | null>(null),
  contact: useRef<HTMLButtonElement | null>(null),
};
const pages: PageKey[] = ["home", "about", "work", "projects", "contact"];
const [currentIndex, setCurrentIndex] = useState(0);

const shiftLeft = () => {
  setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
  setCurrentPage(pages[(currentIndex - 1 + pages.length) % pages.length]);
};

const shiftRight = () => {
  setCurrentIndex((prev) => (prev + 1) % pages.length);
  setCurrentPage(pages[(currentIndex + 1) % pages.length]);
};

const leftPage = pages[(currentIndex - 1 + pages.length) % pages.length];
const centerPage = pages[currentIndex];
const rightPage = pages[(currentIndex + 1) % pages.length];
const iconMap: Record<PageKey, JSX.Element> = {
  home: <Home size={22} />,
  about: <Info size={22} />,
  work: <Briefcase size={22} />,
  projects: <Folder size={22} />,
  contact: <Mail size={22} />,
};

const labelMap: Record<PageKey, string> = {
  home: "",
  about: "",
  work: "",
  projects: "",
  contact: "",
};


const scrollToButton = (page: PageKey) => {
  const nav = navRef.current;
  const btn = buttonRefs[page]?.current;
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




const flagMap: Record<string, string> = {
  en: gb,
  nl: nl,
  fr: fr,
  de: de,
};

const [currentFlag, setCurrentFlag] = useState(flagMap[i18n.language] || gb);

  const langButtonRef = useRef<HTMLButtonElement | null>(null);
const [langMenuWidth, setLangMenuWidth] = useState<number>(0);


  return (
  
    <Box position="absolute" inset="0" bg="#0E0F11" overflow="hidden">
      
      <Box position="absolute" top="-18%" left={{base:"-75%",md:"-65%"}} w="160%" h="50%" transform="rotate(-49deg)"
        bg="linear-gradient(180deg, #00FF8A 0%, #00E676 100%)"
        clipPath="polygon(0% 90%, 100% 8%, 100% 92%, 0% 100%)"
        filter="drop-shadow(0px 40px 80px rgba(0, 0, 0, 0.45))"
      />

      <Box position="absolute" top="-18%" left="-35%" w="160%" h="10%" transform="rotate(-56deg)"
        bg="linear-gradient(180deg, #00FF8A 0%, #00E676 100%)"
        clipPath="polygon(0% 90%, 100% 8%, 100% 92%, 0% 100%)"
        filter="drop-shadow(0px 25px 60px rgba(0, 0, 0, 0.45))"
      />

      <Box position="absolute" top="-18%" left="37%" w="170%" h="1%" transform="rotate(-52deg)"
        bg={{base:"none",md:"linear-gradient(180deg, #00FF8A 0%, #00E676 100%)"}}
        clipPath="polygon(0% 0%, 100% 8%, 100% 92%, 0% 100%)"
        filter="drop-shadow(0px 18px 40px rgba(0, 0, 0, 0.35))"
      />

      <Box position="absolute" top="-18%" left="35%" w="160%" h="22%" transform="rotate(-64deg)"
        bg="linear-gradient(180deg, #00FF8A 0%, #00E676 100%)"
        clipPath="polygon(0% 0%, 100% 99%, 100% 0%, 0% 100%)"
        filter="drop-shadow(0px 30px 70px rgba(0, 0, 0, 0.45))"
      />

      <Box
        position="relative"
        zIndex={10}
        w={{base:"87vw",md:"80vw"}}
        h={{base:"80vh",md:"75vh"}}
        mx="auto"
        maxH="600px"
        mt={{base:"7vh",md:"15.5vh"}}
        py="60px"
        px={{base:"30px",sm:"49px",md:"45px",lg:"60px",xl:"90px"}}
        bg="#1E1F23"
        borderRadius="29px"
        boxShadow="0 20px 60px rgba(0,0,0,0.45)"
      >
        
{/* NAVBAR */}
<HStack w="100%" justify="space-between" align="center">

  <HStack gap="40px" minW={{ base: "50px", md: "280px", lg: "300px" }}>
    <Text fontSize={{ base: "24px", md: "35px" }} color="#00FF8A">
      L A
    </Text>
    <Text
      display={{ base: "none", md: "block" }}
      fontSize={{ base: "14px", md: "24px" }}
      color="white"
    >
      Lyudmil Anastasov
    </Text>
  </HStack>

  {/* NAV BUTTONS (scrollable) */}
  <HStack
    ref={navRef}
  overflowX="auto"
  whiteSpace="nowrap"
  maxW="60vw"
  h="30px"
  display={{ base: "none", md: "none", lg: "flex" }}   
    css={{
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      "&::-webkit-scrollbar": { display: "none" },
    }}
  >
    <Button
      bg="transparent"
      ref={buttonRefs.home}
      onClick={() => {
        setCurrentPage("home");
        scrollToButton("home");
      }}
    >
      <Text
        fontSize="17px"
        h="30px"
        borderBottom={currentPage === "home" ? "2px solid #00FF8A" : "none"}
      >
        {t("Home")}
      </Text>
    </Button>

    <Button
      bg="transparent"
      ref={buttonRefs.about}
      onClick={() => {
        setCurrentPage("about");
        scrollToButton("about");
      }}
    >
      <Text
        fontSize="17px"
        h="30px"
        borderBottom={currentPage === "about" ? "2px solid #00FF8A" : "none"}
      >
        {t("About")}
      </Text>
    </Button>

    <Button
      bg="transparent"
      ref={buttonRefs.work}
      onClick={() => {
        setCurrentPage("work");
        scrollToButton("work");
      }}
    >
      <Text
        fontSize="17px"
        h="30px"
        borderBottom={currentPage === "work" ? "2px solid #00FF8A" : "none"}
      >
        {t("Work Experience")}
      </Text>
    </Button>

    <Button
      bg="transparent"
      ref={buttonRefs.projects}
      onClick={() => {
        setCurrentPage("projects");
        scrollToButton("projects");
      }}
    >
      <Text
        fontSize="17px"
        h="30px"
        borderBottom={
          currentPage === "projects" ? "2px solid #00FF8A" : "none"
        }
      >
        {t("Projects")}
      </Text>
    </Button>

    <Button
      bg="transparent"
      ref={buttonRefs.contact}
      onClick={() => {
        setCurrentPage("contact");
        scrollToButton("contact");
      }}
    >
      <Text
        fontSize="17px"
        h="30px"
        borderBottom={
          currentPage === "contact" ? "2px solid #00FF8A" : "none"
        }
      >
        {t("Contact")}
      </Text>
    </Button>
  </HStack>

  <MenuRoot onOpenChange={(e) => setMenuOpen(e.open)}>

    <MenuTrigger asChild>
  <Button
    ref={langButtonRef}
    onClick={() => {
      if (langButtonRef.current) {
        setLangMenuWidth(langButtonRef.current.offsetWidth);
      }
    }}
    bg="transparent"
    px="10px"
    h={{ base: "25px", md: "35px" }}
    display="flex"
    alignItems="center"
    gap="8px"
  >
    <Image src={currentFlag} boxSize="20px" />

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
          border="1px solid #00FF8A"
          borderRadius="10px"
          w={`${langMenuWidth}px`}   
  minW="0"
        >
          <MenuItem
            value="en"
            color="white"
            onClick={() => {
              i18n.changeLanguage("en");
              setCurrentFlag(flagMap["en"]);
              setMenuOpen(false);
            }}
          >
            EN <Image src={gb} boxSize="15px" ml="8px" />
          </MenuItem>

          <MenuItem
            value="nl"
            color="white"
            onClick={() => {
              i18n.changeLanguage("nl");
              setCurrentFlag(flagMap["nl"]);
              setMenuOpen(false);
            }}
          >
            NL <Image src={nl} boxSize="15px" ml="8px" />
          </MenuItem>

          <MenuItem
            value="fr"
            color="white"
            onClick={() => {
              i18n.changeLanguage("fr");
              setCurrentFlag(flagMap["fr"]);
              setMenuOpen(false);
            }}
          >
            FR <Image src={fr} boxSize="15px" ml="8px" />
          </MenuItem>

          <MenuItem
            value="de"
            color="white"
            onClick={() => {
              i18n.changeLanguage("de");
              setCurrentFlag(flagMap["de"]);
              setMenuOpen(false);
            }}
          >
            DE <Image src={de} boxSize="15px" ml="8px" />
          </MenuItem>
        </MenuContent>
      </MenuPositioner>
    </Portal>
  </MenuRoot>
</HStack>


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
    <Button w="100%" onClick={() => { setCurrentPage("home"); setMobileMenuOpen(false); }}>
      {t("Home")}
    </Button>

    <Button w="100%" onClick={() => { setCurrentPage("about"); setMobileMenuOpen(false); }}>
      {t("About")}
    </Button>

    <Button w="100%" onClick={() => { setCurrentPage("work"); setMobileMenuOpen(false); }}>
      {t("Work Experience")}
    </Button>

    <Button w="100%" onClick={() => { setCurrentPage("projects"); setMobileMenuOpen(false); }}>
      {t("Projects")}
    </Button>

    <Button w="100%" onClick={() => { setCurrentPage("contact"); setMobileMenuOpen(false); }}>
      {t("Contact")}
    </Button>
  </VStack>
)}



        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "work" && <WorkExperiencePage />}
        {currentPage === "projects" && <ProjectsPage />}
<HStack
  display={{ base: "flex", lg: "none" }}
  position="absolute"
  bottom="22px"
  left="50%"
  transform="translateX(-50%)"

  w="58%"                       
  h="70px"
  bg="rgba(20,21,24,0.75)"
  backdropFilter="blur(12px)"
  borderRadius="18px"
  border="1px solid rgba(0,255,138,0.15)"
  justify="space-around"

  boxShadow="0 6px 20px rgba(0,0,0,0.35)"
  zIndex={9999}
>

  {/* LEFT ICON */}
  <Button
    variant="ghost"
    onClick={shiftLeft}
    color="white"
    flexDir="column"
    h="50px"
  >
    {iconMap[leftPage]}
    <Text fontSize="10px">{labelMap[leftPage]}</Text>
  </Button>

  {/* CENTER (ACTIVE) */}
  <Button
    variant="ghost"
    onClick={() => {}}
    color="#00FF8A"
    flexDir="column"
    h="50px"
  >
    {iconMap[centerPage]}
    <Text fontSize="11px">{labelMap[centerPage]}</Text>
  </Button>

  {/* RIGHT ICON */}
  <Button
    variant="ghost"
    onClick={shiftRight}
    color="white"
    flexDir="column"
    h="50px"
  >
    {iconMap[rightPage]}
    <Text fontSize="10px">{labelMap[rightPage]}</Text>
  </Button>

</HStack>

        

        {currentPage === "home" && (
          <Flex justifyContent="flex-end" w="100%" >
            <Button
              bg="transparent"
              color="#00FF8A"
              fontSize={{base:"12px",sm:"14px",md:"17px",lg:"22px"}}
              borderRadius="0px"
              _hover={{ borderBottom: "1px solid #00FF8A" }}
            >
              {t("Powered by Me")} →
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default App;
