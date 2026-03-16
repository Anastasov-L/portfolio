import { Box, HStack, Image } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// PROJECT IMAGES
import project1_1 from "../../images/project1/project1img1.png";
import project1_2 from "../../images/project1/project1img2.png";
import project1_3 from "../../images/project1/project1img3.png";
import project1_4 from "../../images/project1/project1img4.png";
import project1_5 from "../../images/project1/project1img5.png";
import project1_6 from "../../images/project1/project1img6.png";
import project1_7 from "../../images/project1/project1img7.png";
import project1_8 from "../../images/project1/project1img8.png";
import project1_9 from "../../images/project1/project1img9.png";
import project1_10 from "../../images/project1/project1img10.png";
import project1_11 from "../../images/project1/project1img11.png";
import project1_12 from "../../images/project1/project1img12.png";
import project1_13 from "../../images/project1/project1img13.png";
import project1_14 from "../../images/project1/project1img14.png";
import project1_15 from "../../images/project1/project1img15.png";
import project1_16 from "../../images/project1/project1img16.png";
import project1_17 from "../../images/project1/project1img17.png";
import project1_18 from "../../images/project1/project1img18.png";
import project1_19 from "../../images/project1/project1img19.png";
import project1_20 from "../../images/project1/project1img20.png";
import project1_21 from "../../images/project1/project1img21.png";
import project1_22 from "../../images/project1/project1img22.png";

import front1 from "../../images/front-end1.png";
import front2 from "../../images/front-end2.png";
import front3 from "../../images/front-end3.png";
import front4 from "../../images/front-end4.png";
import front6 from "../../images/front-end6.png";
import front7 from "../../images/front-end7.png";
import front8 from "../../images/front-end8.png";
import front11 from "../../images/front-end11.png";

import CRM1 from "../../images/project3/CRM1.png";
import CRM2 from "../../images/project3/CRM2.png";
import CRM3 from "../../images/project3/CRM3.png";
import CRM4 from "../../images/project3/CRM4.png";
import CRM5 from "../../images/project3/CRM5.png";
import CRM6 from "../../images/project3/CRM6.png";
import CRM7 from "../../images/project3/CRM7.png";

import box3_1 from "../../images/project4/box3_1.png";
import box3_2 from "../../images/project4/box3_2.png";
import box3_3 from "../../images/project4/box3_3.png";
import box3_4 from "../../images/project4/box3_4.png";
import box3_5 from "../../images/project4/box3_5.png";
import box3_6 from "../../images/project4/box3_6.png";
import box3_7 from "../../images/project4/box3_7.png";
import box3_8 from "../../images/project4/box3_8.png";
import box3_9 from "../../images/project4/box3_9.png";
import box3_10 from "../../images/project4/box3_10.png";
import box3_11 from "../../images/project4/box3_11.png";

import aboutwrk0 from "../../images/project6/aboutwrk0.png";
import aboutwrk1 from "../../images/project6/aboutwrk1.png";
import aboutwrk2 from "../../images/project6/aboutwrk2.png";
import aboutwrk3 from "../../images/project6/aboutwrk3.png";
import aboutwrk4 from "../../images/project6/aboutwrk4.png";
import aboutwrk5 from "../../images/project6/aboutwrk5.png";
import aboutwrk6 from "../../images/project6/aboutwrk6.png";
import aboutwrk7 from "../../images/project6/aboutwrk7.png";
import aboutwrk8 from "../../images/project6/aboutwrk8.png";
import aboutwrk9 from "../../images/project6/aboutwrk9.png";
import aboutwrk10 from "../../images/project6/aboutwrk10.png";
import aboutwrk11 from "../../images/project6/aboutwrk11.png";
import aboutwrk12 from "../../images/project6/aboutwrk12.png";
import aboutwrk13 from "../../images/project6/aboutwrk13.png";
import aboutwrk14 from "../../images/project6/aboutwrk14.png";
import aboutwrk15 from "../../images/project6/aboutwrk15.png";
import aboutwrk16 from "../../images/project6/aboutwrk16.png";
import aboutwrk17 from "../../images/project6/aboutwrk17.png";
import aboutwrk18 from "../../images/project6/aboutwrk18.png";
import aboutwrk19 from "../../images/project6/aboutwrk19.png";
import aboutwrk20 from "../../images/project6/aboutwrk20.png";


const MotionBox = motion(Box);

export const projects = [
  {
    title: "Admin CRM system",
    github: "LIVE",
    images: [CRM6, CRM2, CRM3, CRM4, CRM5, CRM1, CRM7],
    description: [
  //    "Pagination",
  //    "Filtration",
      "box3.nl",
  //    "Admin dashboard",
  //    "Google Firebase auth",
      "React + TypeScript + Django Rest",
    ],
  },
  {
    title: "Website&Tax Form box3.nl",
    github: "LIVE",
    images: [
      box3_1, box3_2, box3_3, box3_4, box3_5,
      box3_6, box3_7, box3_8, box3_9, box3_10, box3_11,
    ],
    description: [
  //    "Pagination",
   //   "Payment system Stripe",
  //    "Filtration",
  //    "Language Support",
      "box3.nl",
      "React + TypeScript + Django Rest",
    ],
  },
  {
  title: "HR system",
  github: "LIVE",
  images: [
    aboutwrk0,
    aboutwrk1,
    aboutwrk2,
    aboutwrk3,
    aboutwrk4,
    aboutwrk5,
    aboutwrk6,
    aboutwrk7,
    aboutwrk8,
    aboutwrk9,
    aboutwrk10,
    aboutwrk11,
    aboutwrk12,
    aboutwrk13,
    aboutwrk14,
    aboutwrk15,
    aboutwrk16,
    aboutwrk17,
    aboutwrk18,
    aboutwrk19,
    aboutwrk20,
  ],
  description: [
    "react.nl, capisoft.nl",
    "React + TypeScript + Django Rest",
  ],
},
  {
    title: "Frontend Platform",
    github: "https://github.com/Anastasov-L/frontend-platform",
    images: [front1, front2, front3, front4, front6, front7, front8, front11],
    description: [
  //    "Login page",
  //    "Register page",
  //    "User management",
   //   "Admin dashboard",
  //    "Different views ",
      "React + TypeScript",
    ],
  },
  {
    title: "Todo App",
    github: "https://github.com/Anastasov-L/todo-fullstack",
    images: [
      project1_1, project1_2, project1_3, project1_4, project1_5,
      project1_6, project1_7, project1_8, project1_9, project1_10,
      project1_11, project1_12, project1_13, project1_14, project1_15,
      project1_16, project1_17, project1_18, project1_19, project1_20,
      project1_21, project1_22,
    ],
    description: [
      "React + TypeScript + Django Rest",
     // "Google Firebase auth",
     // "Django REST backend",
    //  "Infinite scrolling",
    //  "Optimistic UI updates",
     // "Admin dashboard",
    ],
  },

];

type CarouselProps = {
  images: string[];
  mobileMode?: boolean;
};

export default function Carousel({
  images,
  mobileMode = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
    setIsZoomed(false);
  }, [images]);

  const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goTo = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleMobileImageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;

    if (clickX < rect.width / 2) {
      prev();
    } else {
      next();
    }
  };

  if (mobileMode) {
    return (
      <>
        <Box
          w="100%"
          h="100%"
          minH="240px"
          position="relative"
          overflow="hidden"
          bg="#0E0F11"
        >
          <AnimatePresence mode="wait" initial={false}>
            <MotionBox
              key={currentIndex}
              initial={{
                opacity: 0,
                x: direction >= 0 ? 24 : -24,
                scale: 0.985,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction >= 0 ? -24 : 24,
                scale: 0.985,
              }}
              transition={{
                duration: 0.24,
                ease: "easeInOut",
              }}
              w="100%"
              h="100%"
            >
              <Box
                w="100%"
                h="100%"
                position="relative"
                cursor="pointer"
                onClick={handleMobileImageClick}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Project image ${currentIndex + 1}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  draggable={false}
                  userSelect="none"
                  pointerEvents="none"
                />

                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="50%"
                  h="100%"
                  zIndex={2}
                />
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  w="50%"
                  h="100%"
                  zIndex={2}
                />

                <Box
                  position="absolute"
                  bottom="10px"
                  left="10px"
                  px="8px"
                  py="5px"
                  bg="rgba(0,0,0,0.45)"
                  color="white"
                  fontSize="11px"
                  lineHeight="1"
                  backdropFilter="blur(8px)"
                >
                  {currentIndex + 1}/{images.length}
                </Box>

                <Box
                  position="absolute"
                  top="10px"
                  right="10px"
                  px="8px"
                  py="5px"
                  bg="rgba(0,0,0,0.35)"
                  color="whiteAlpha.800"
                  fontSize="10px"
                  lineHeight="1"
                  backdropFilter="blur(8px)"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(true);
                  }}
                >
                  Zoom
                </Box>
              </Box>
            </MotionBox>
          </AnimatePresence>

          <HStack
            position="absolute"
            bottom="10px"
            left="50%"
            transform="translateX(-50%)"
            zIndex={3}
            gap="6px"
            flexWrap="wrap"
            justify="center"
            maxW="80%"
          >
            {images.map((_, index) => (
              <Box
                key={index}
                w={currentIndex === index ? "18px" : "8px"}
                h="8px"
                borderRadius="999px"
                bg={currentIndex === index ? "whiteAlpha.900" : "whiteAlpha.500"}
                transition="all 0.2s ease"
                cursor="pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(index);
                }}
              />
            ))}
          </HStack>
        </Box>

        <AnimatePresence>
          {isZoomed && (
            <MotionBox
              position="fixed"
              inset="0"
              bg="rgba(0,0,0,0.82)"
              zIndex={9999}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
            >
              <MotionBox
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                maxW="92vw"
                maxH="88vh"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Expanded project image ${currentIndex + 1}`}
                  maxW="92vw"
                  maxH="88vh"
                  objectFit="contain"
                  draggable={false}
                  userSelect="none"
                />
              </MotionBox>
            </MotionBox>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <HStack
        w="100%"
        h="100%"
        minH={{ base: "280px", md: "340px", lg: "430px" }}
        position="relative"
        overflow="hidden"
        gap="0"
      >
        <Box
          w={{ base: "22%", md: "24%", lg: "26%" }}
          h={{ base: "52%", md: "58%", lg: "62%" }}
          opacity={0.45}
          cursor="pointer"
          zIndex={1}
          transition="0.25s ease"
          _hover={{ opacity: 0.7 }}
          onClick={prev}
        >
          <Image
            src={images[prevIndex]}
            alt="Previous preview"
            w="100%"
            h="100%"
            objectFit="contain"
            draggable={false}
            userSelect="none"
          />
        </Box>

        <AnimatePresence mode="wait" initial={false}>
          <MotionBox
            key={currentIndex}
            initial={{
              opacity: 0,
              x: direction >= 0 ? 35 : -35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction >= 0 ? -35 : 35,
              scale: 0.96,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            w={{ base: "64%", md: "58%", lg: "50%" }}
            zIndex={2}
          >
            <Box
              cursor="zoom-in"
              onClick={() => setIsZoomed(true)}
              transition="transform 0.2s ease"
              _hover={{
                transform: "scale(1.02)",
              }}
            >
              <Image
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                w="100%"
                h="100%"
                objectFit="contain"
                draggable={false}
                userSelect="none"
                pointerEvents="none"
              />
            </Box>
          </MotionBox>
        </AnimatePresence>

        <Box
          w={{ base: "22%", md: "24%", lg: "26%" }}
          h={{ base: "52%", md: "58%", lg: "62%" }}
          opacity={0.45}
          cursor="pointer"
          zIndex={1}
          transition="0.25s ease"
          _hover={{ opacity: 0.7 }}
          onClick={next}
        >
          <Image
            src={images[nextIndex]}
            alt="Next preview"
            w="100%"
            h="100%"
            objectFit="contain"
            draggable={false}
            userSelect="none"
          />
        </Box>

        <HStack
          gap="8px"
          position="absolute"
          bottom="48px"
          left="50%"
          transform="translateX(-50%)"
          zIndex={3}
          flexWrap="wrap"
          justify="center"
          maxW="90%"
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w={currentIndex === index ? "18px" : "10px"}
              h="10px"
              borderRadius="999px"
              bg={currentIndex === index ? "gray.300" : "gray.600"}
              transition="all 0.2s ease"
              cursor="pointer"
              _hover={{
                bg: currentIndex === index ? "gray.200" : "gray.500",
              }}
              onClick={() => goTo(index)}
            />
          ))}
        </HStack>
      </HStack>

      <AnimatePresence>
        {isZoomed && (
          <MotionBox
            position="fixed"
            inset="0"
            bg="rgba(0,0,0,0.82)"
            zIndex={9999}
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
          >
            <MotionBox
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              maxW="92vw"
              maxH="88vh"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt={`Expanded project image ${currentIndex + 1}`}
                maxW="92vw"
                maxH="88vh"
                objectFit="contain"
                draggable={false}
                userSelect="none"
              />
            </MotionBox>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
}