import { Box, HStack, Text, Button,  Flex, Image, VStack, Spacer } from "@chakra-ui/react";
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

const iconMap: Record<PageKey, JSX.Element> = {
  home: <Home size={22} />,
  about: <Info size={22} />,
  work: <Briefcase size={22} />,
  projects: <Folder size={22} />,
  contact: <Mail size={22} />,
};

function App() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragScrollLeft, setDragScrollLeft] = useState(0);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);

const navRef = useRef<HTMLDivElement | null>(null);
const buttonRefs: Record<PageKey, React.MutableRefObject<HTMLButtonElement | null>> = {
  home: useRef<HTMLButtonElement | null>(null),
  about: useRef<HTMLButtonElement | null>(null),
  work: useRef<HTMLButtonElement | null>(null),
  projects: useRef<HTMLButtonElement | null>(null),
  contact: useRef<HTMLButtonElement | null>(null),
};
const pages: PageKey[] = ["home", "about", "work", "projects", "contact"];

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
const circleColors: Record<PageKey, string> = {
  home: "#B2F5EA",     // Light teal
  about: "#C3DAFE",    // Light indigo
  work: "#FEEBC8",     // Light orange
  projects: "#E9D8FD", // Light purple
  contact: "#FBD38D",  // Light yellow
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

const handleSelect = (page: PageKey) => {
  const nav = mobileNavRef.current;
  const btn = buttonRefs[page]?.current;

  if (!nav || !btn) return;

  const target =
    btn.offsetLeft - nav.clientWidth / 2 + btn.offsetWidth / 2;

  nav.scrollTo({
    left: target,
    behavior: "smooth",
  });

  setTimeout(() => {
    setCurrentPage(page);
  }, 250);
};



const handleSnap = () => {
  const nav = mobileNavRef.current;
  if (!nav) return;

  let nearestPage: PageKey | null = null;
  let minDistance = Infinity;

  pages.forEach((page) => {
    const btn = buttonRefs[page]?.current;
    if (btn) {
      const centerPos = btn.offsetLeft + btn.offsetWidth / 2;
      const viewportCenter = nav.scrollLeft + nav.clientWidth / 2;
      const distance = Math.abs(centerPos - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        nearestPage = page;
      }
    }
  });

  if (nearestPage) handleSelect(nearestPage);
};

  return (
  
    <Box position="absolute" inset="0" bg="#0E0F11" overflowY={{base:"visible",lg:"hidden"}} overflowX="hidden" minH="100vh" h = {{base:"fit-content",md:"100vh"}}>
      
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
        w={{
          base: currentPage === "home" ? "90vw" : "100vw",
          lg:"80vw"}}
      //  h={{base:"calc(fit-content+ 950px)",md:"75vh"}}
        mx="auto"
        h={{base:"fit-content",lg:"600px"}}
        mt={{
          base: currentPage === "home" ? "15vh" : "0vh", // mobile + tablet
          lg: "15vh"                                     // large screens ALWAYS 15vh
        }}
        py="60px"
        px={{base:"15px",sm:"49px",md:"45px",lg:"60px",xl:"90px"}}
        bg="#1E1F23"
        borderTopRadius={{
          base: currentPage === "home" ? "29px" : "0px",
          lg:"29px"}}
        borderBottomRadius={{base: currentPage === "home" ? "29px" : "0px",lg:"29px"}}
        boxShadow="0 20px 60px rgba(0,0,0,0.45)"
        
      >
        
{/* NAVBAR */}
<HStack w="100%"  align="center">

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
    <Spacer/>
  {/* NAV BUTTONS (scrollable) */}
  <HStack
    ref={mobileNavRef}
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
  <Flex>
  <MenuRoot onOpenChange={(e) => setMenuOpen(e.open)} >

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
    <Image src={currentFlag} boxSize="25px" />

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
  </Flex>
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

  <VStack overflowX="auto" alignItems="flex-start" py="20px"   display={currentPage === "home" ? "none" : "visible"}
>
  <Text color="white" display={{base:"visible",lg:"none"}}>Select Category</Text>
{/* MOBILE CATEGORY NAV (md and below) */}
<HStack
  ref={navRef}
  display={{ base: "flex", md: "flex", lg: "none" }}
  overflowX="scroll"
  whiteSpace="nowrap"
  gap="12px"
  mt="25px"
  pb="8px"
  px="4px"
  css={{
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": { display: "none" }
  }}
  onTouchStart={(e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].pageX);
    setDragScrollLeft(navRef.current?.scrollLeft || 0);
  }}
  onTouchMove={(e) => {
    if (!isDragging || !navRef.current) return;
    const dx = dragStartX - e.touches[0].pageX;
    navRef.current.scrollLeft = dragScrollLeft + dx;

    const nav = navRef.current;
    if (nav.scrollLeft <= 0) nav.scrollLeft = nav.scrollWidth / 2;
    if (nav.scrollLeft >= nav.scrollWidth - nav.clientWidth)
      nav.scrollLeft = nav.scrollWidth / 2;
  }}
  onTouchEnd={() => {
    setIsDragging(false);
    handleSnap();
  }}
>

  {[...pages, ...pages].map((page, idx) => (
    <Button
      key={`${page}-${idx}`}
      onClick={() => handleSelect(page)}
      flexShrink={0}
      w={currentPage === page ? "135px" : "120px"}
      h={currentPage === page ? "145px" : "130px"}
      transition="all 0.25s ease"
      transform={currentPage === page ? "scale(1.12)" : "scale(1)"}
      boxShadow={currentPage === page ? "0px 0px 25px rgba(0,255,138,0.35)" : "none"}
      px="8px"
      py="6px"
      borderRadius="27px"
      bg={currentPage === page ? "#00FF8A" : "#2B322C"}
      color={currentPage === page ? "#0E0F11" : "white"}
      fontWeight="600"
      fontSize="15px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
    >
      {/* Icon Circle */}
      <Box
        w={currentPage === page ? "58px" : "55px"}
        h={currentPage === page ? "58px" : "55px"}
        borderRadius="50%"
        bg={circleColors[page]}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="auto"
        transition="all 0.25s ease"
      >
        {iconMap[page]}
      </Box>

      {/* Category Name */}
      <Text mt="10px" fontSize="14px" color="white">
        {t(
          page === "work"
            ? "Work Experience"
            : page.charAt(0).toUpperCase() + page.slice(1)
        )}
      </Text>
    </Button>
  ))}
</HStack>

</VStack>


        {/* PAGE SWITCHER */}
        {currentPage === "home" && <HomePage />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "contact" && <ContactPage />}
        {currentPage === "work" && <WorkExperiencePage />}
        {currentPage === "projects" && <ProjectsPage />}

        {currentPage === "home" && (
          <Flex justifyContent="flex-end" w="100%" >
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
    {t("Discover")} →
  </Box>

  <Box display={{ base: "none", lg: "block" }}>
    {t("Powered by Me")} →
  </Box>
</Button>

          </Flex>
        )}
      </Box>
    </Box>
  );
}

export default App;
