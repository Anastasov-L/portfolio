// src/components/ProjectsSection.tsx
import { VStack, HStack, Box, Image, Text, Button, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import logo from '../../images/dev.png'; // adjust path if needed
import ProjectsButton from './projectsButton.tsx';  // replace with your real burger when ready

const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = [
    {
      title: '🚧 Project 1 - Tasklist App',
      description:
        'A simple TodoList app, with responsive GUI, firebase authentication, Skeleton Loading, Optimistic Updates and Infinite Scroll. Front-end in Typescript, built using React+vite. Back-end is built using the Django Restful API.  ',
    },
    {
      title: '🖼 Project 2 - Responsive Front-end',
      description:
        'A simple, responsive front-end app, built during my Traineeship at Capisoft. App is built in typescript using React + vite.',
    },
    {
      title: '📊 Project 3 - Portfolio ',
      description:
        'All of the content on screen, which you are looking at right now, has been built exclusively by me. No templates or shortcuts. This App portfolio is built using React+vite and deployed with Vercel.',
    },
  ];

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
        <ProjectsButton setPage={() => {}} position="absolute" />
      </HStack>

      {/* Content Box */}
      <Box
        w="100%"
        h="100%"
        pt="60px"
        px="5"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <VStack
          border="2px solid #2a2d34"
          borderRadius="20px"
          p="5"
          w="90%"
          h="70%"
          spacing="4"
          justify="center"
          align="center"
          bg="#0F1115"
        >
          <Text fontSize="xl" color="white" fontWeight="bold">
            {projects[projectIndex].title}
          </Text>
          <Text fontSize="md" color="#B0B0B0" textAlign="center">
            {projects[projectIndex].description}
          </Text>
        </VStack>

        {/* Navigation Buttons */}
        <HStack spacing="4" mt="20px">
          <Button
            onClick={() => setProjectIndex((prev) => Math.max(0, prev - 1))}
            bg="linear-gradient(to right, #005ce6, #00dfd8)"
            color="white"
            borderRadius="full"
            px="6"
            _hover={{ bg: 'linear-gradient(to right, #0047b3, #00c0c0)' }}
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
            borderRadius="full"
            px="6"
            _hover={{ bg: 'linear-gradient(to right, #0047b3, #00c0c0)' }}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default ProjectsSection;
