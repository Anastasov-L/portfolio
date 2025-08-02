import { VStack, HStack, Box, Image, Text, Button, Spacer } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import logo from '../../images/dev.png';
import ProjectsButton from './projectsButton.tsx';

import project2img1 from '../../images/front-end1.png';
import project2img2 from '../../images/front-end2.png';
import project2img3 from '../../images/front-end3.png';
import project2img4 from '../../images/front-end4.png';
import project2img5 from '../../images/front-end11.png';
import project2img6 from '../../images/front-end6.png';
import project2img7 from '../../images/front-end7.png';
import project2img8 from '../../images/front-end8.png';




import { useBreakpointValue } from '@chakra-ui/react';



const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);



  const projectImages = [
    [],
    [project2img1, project2img2, project2img3, project2img4], // Project 2
    [],
  ];
    const isMdScreen = useBreakpointValue({
      base: true,
      sm: false,
      md: true,
      lg: true,
      xl: false,
    }) ?? false;

    const overrideImages = [project2img5, project2img6, project2img7, project2img8];

    const currentImage =
      projectIndex === 1 && isMdScreen && imageIndex < overrideImages.length
        ? overrideImages[imageIndex]
        : projectImages[1][imageIndex];


  const projects = [
    {
      title: 'Tasklist App',
      description:
        'A simple TodoList app, with responsive GUI, firebase authentication, Skeleton Loading, Optimistic Updates and Infinite Scroll. Front-end in Typescript, built using React+vite. Back-end is built using the Django Restful API.',
    },
    {
      title: 'Responsive Front-end',
      description:
        'A simple, responsive front-end app, built during my Traineeship at Capisoft. App is built in typescript using React + vite. I encourage you to visit the github repo, or try it out, as the layout changes dramatically based on the device.',
    },
    {
      title: 'Portfolio',
      description:
        'All of the content on screen, which you are looking at right now, has been built exclusively by me. No templates or shortcuts. This App portfolio is built using React+vite and deployed with Vercel.',
    },
  ];

  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  return (
    <VStack
      gap={{ base: '0px', md: '20px', xl: '1vh' }}
      position="relative"
      w="100%"
      h="100%"

    >
      {/* Header */}
      <HStack
        bg="#1C1F26"
        alignSelf="center"
        position="absolute"
        top="0"
        zIndex="2"
        pt="2"
        w="90%"
      >
        <Image src={logo} boxSize="30px" />
        <Text font="inter" fontWeight="750" pt="5px" color="white">
          Projects
        </Text>
        <Spacer />
        <ProjectsButton setPage={setProjectIndex} position="absolute" />
      </HStack>

      {/* Content */}
      <Box
        w="100%"
        h="100%"
        pt="60px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <VStack
          border="2px solid #2a2d34"
          borderRadius="20px"
          px = "5"
          w="90%"
          h="90%"
          gap = "0px"
          bg="#0F1115"
        >
          {/* Image slider for Project 2 */}
          {projectIndex === 1 && projectImages[1].length > 0 && (
              <VStack>
              <Text  fontSize={{base:"4vw",sm:"4vw",md:"3vw",lg:"2vw"}} color="white" fontWeight="bold" pt = {{base:"40px",md:"40px",ll:"80px"}}  textAlign="center" justifyContent = "bottom">
                          {projects[projectIndex].title}
              </Text>
              <Image
                src={currentImage}
                objectFit="contain"
                w={{base:"100%",ll:"100%"}}
                borderRadius="10px"
                alignSelf = "center"
              />
              <HStack mt="10px" w = "100%">
                <Button bgImage="url('/images/github3.png')"
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    w = "30px"
                    as="a"
                    href="https://github.com/Anastasov-L/React-App-Front-end"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                </Button>
                <Spacer/>

                <Button
                  onClick={() => setImageIndex((prev) => Math.max(0, prev - 1))}
                  size = "sm"
                  bg="#1C1F26"
                  _hover={{bg : "aqua"}}
                  isDisabled={imageIndex === 0}
                >
                  ◀ Prev
                </Button>

                <Button
                  onClick={() =>
                    setImageIndex((prev) =>
                      Math.min(projectImages[1].length - 1, prev + 1)
                    )
                  }
                  size = "sm"
                  bg="#1C1F26"
                  _hover={{bg : "aqua"}}
                  isDisabled={imageIndex === projectImages[1].length - 1}
                >
                  Next ▶
                </Button>

                <Spacer/>

                <Button
                    w = "30px"
                    as="a"
                    href="https://react-app-five-rho.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer">
                      <Text color = "aqua"> TRY </Text>
                </Button>

              </HStack>
            </VStack>
          )}

          <Text
            fontSize={{ base: '10px', sm: '14px', md: 'lg',lg:'20px', xl: '1.3vw' }}
            color="#B0B0B0"
            textAlign="center"
            maxW="90%"
            lineHeight="1.6"
            pt = {{base:"0px",xl:"20px"}}>
            {projects[projectIndex].description}
          </Text>
        </VStack>

        {/* Project navigation */}
        <HStack spacing="4" mt="20px">
          <Button
            onClick={() => setProjectIndex((prev) => Math.max(0, prev - 1))}
            bg="linear-gradient(to right, #005ce6, #00dfd8)"
            color="white"
            borderRadius="full"
            px="6"
            w = "80px"
            backgroundClip="padding-box"
            _hover={{ filter: 'brightness(1.5)' }}
            isDisabled={projectIndex === 0}
          >
            Prev
          </Button>
          <Button
            onClick={() =>
              setProjectIndex((prev) =>
                Math.min(projects.length - 1, prev + 1)
              )
            }
            bg="linear-gradient(to right, #005ce6, #00dfd8)"
            color="white"
            px="6"
            w = "80px"
            borderRadius="full"
            backgroundClip="padding-box"
            overflow="hidden"
            _hover={{
              filter: 'brightness(1.5)',
            }}
            isDisabled={projectIndex === projects.length - 1}
          >
            Next
          </Button>

        </HStack>
      </Box>
    </VStack>
  );
};

export default ProjectsSection;
