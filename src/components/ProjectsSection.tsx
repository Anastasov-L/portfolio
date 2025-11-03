import { VStack, HStack, Box, Image, Text, Button, Spacer, Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import logo from '../../images/dev.png';
import ProjectsButton from './projectsButton.tsx';

import project1img1 from '../../images/project1/project1img1.png';
import project1img2 from '../../images/project1/project1img2.png';
import project1img3 from '../../images/project1/project1img3.png';
import project1img4 from '../../images/project1/project1img4.png';
import project1img5 from '../../images/project1/project1img5.png';
import project1img6 from '../../images/project1/project1img6.png';
import project1img7 from '../../images/project1/project1img7.png';
import project1img8 from '../../images/project1/project1img8.png';
import project1img9 from '../../images/project1/project1img9.png';
import project1img10 from '../../images/project1/project1img10.png';
import project1img11 from '../../images/project1/project1img11.png';
import project1img12 from '../../images/project1/project1img12.png';
import project1img13 from '../../images/project1/project1img13.png';
import project1img14 from '../../images/project1/project1img14.png';
import project1img15 from '../../images/project1/project1img15.png';
import project1img16 from '../../images/project1/project1img16.png';
import project1img17 from '../../images/project1/project1img17.png';
import project1img18 from '../../images/project1/project1img18.png';
import project1img19 from '../../images/project1/project1img19.png';
import project1img20 from '../../images/project1/project1img20.png';
import project1img21 from '../../images/project1/project1img21.png';
import project1img22 from '../../images/project1/project1img22.png';

import project2img1 from '../../images/front-end1.png';
import project2img2 from '../../images/front-end2.png';
import project2img3 from '../../images/front-end3.png';
import project2img4 from '../../images/front-end4.png';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

const ProjectsSection = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const projectImages = [
    [
      project1img1, project1img2, project1img3, project1img4, project1img5,
      project1img6, project1img7, project1img8, project1img9, project1img10,
      project1img11, project1img12, project1img13, project1img14, project1img15,
      project1img16, project1img17, project1img18, project1img19, project1img20,
      project1img21, project1img22
    ],
    [project2img1, project2img2, project2img3, project2img4],
    []
  ];

  const currentImage = projectImages[projectIndex][imageIndex];

  const projects = [
    {
      title: 'Tasklist App',
      description:
        'Users can safely create an account, make todo-lists and fill them with tasks. Includes Firebase auth, responsive UI, infinite scroll, optimistic updates, skeleton loading, and admin panel (if you have permissions).'
    },
    {
      title: 'Responsive Front-end',
      description:
        'A responsive front-end react app, built during my traineeship at Capisoft: Login, Dashboard, Review pages, Grid/List views, and proper Graphs.'
    },
    {
      title: 'Portfolio',
      description: (
        <>
          This portfolio was built using React + Vite and styled with Chakra UI. Deployed via Vercel. For full and unfiltered project library, view project list on{' '}
          <Link href="https://github.com/Anastasov-L" color="aqua">GitHub</Link>.

        </>
      ),
    },
  ];

  useEffect(() => {
    setImageIndex(0);
  }, [projectIndex]);

  return (
    <VStack w="100%" h="100%" position="relative">
      {/* Header */}
      <HStack bg="#1C1F26" position="absolute" top="0" zIndex="2" w="90%" pt="2">
        <Image src={logo} boxSize="30px" />
        <Text color="white" fontWeight="750" pt="5px">Projects</Text>
        <Spacer />
        <ProjectsButton setPage={setProjectIndex} />
      </HStack>

      {/* Content */}
      <Box w="100%" h="100%" pt="90px" display="flex" flexDir="column" alignItems="center">
        <VStack w="90%" h="90%" border="2px solid #2a2d34" borderRadius="20px" bg="#0F1115" px="5">
          {(projectIndex === 0 || projectIndex === 1) ? (
            <VStack>
              <Text fontSize={{ base: "4vw", md: "3vw", lg: "2vw" }} color="white" fontWeight="bold" pt="10px">
                {projects[projectIndex].title}
              </Text>

              <Image
                src={currentImage}
                w="100%"
                maxH={{ base: "200px", sm: "260px", md: "350px", lg: "420px" }}
                objectFit="contain"
                borderRadius="10px"
              />

              <HStack mt="10px" w="100%">
                <Button
                  bgImage="url('/images/github3.png')"
                  bgSize="cover"
                  size="sm"
                  onClick={() => window.open(
                    projectIndex === 0
                      ? 'https://github.com/Anastasov-L/Task-List'
                      : 'https://github.com/Anastasov-L/React-App-Front-end',
                    '_blank'
                  )}
                />
                <Spacer />
                <Button
                  size="xs"
                  bg="#1C1F26"
                  _hover={{ bg: 'aqua' }}
                  onClick={() => setImageIndex(prev => Math.max(0, prev - 1))}
                  disabled={imageIndex === 0}
                >◀ Prev</Button>
                <Button
                  size="xs"
                  bg="#1C1F26"
                  _hover={{ bg: 'aqua' }}
                  onClick={() => setImageIndex(prev => Math.min(projectImages[projectIndex].length - 1, prev + 1))}
                  disabled={imageIndex === projectImages[projectIndex].length - 1}
                >Next ▶</Button>
                <Spacer />
                <Button size="sm" onClick={() => window.open(
                  projectIndex === 0
                    ? 'https://tasklist-live-demo.vercel.app'
                    : 'https://react-app-five-rho.vercel.app/',
                  '_blank'
                )}>
                  <Text color="aqua">TRY</Text>
                </Button>
              </HStack>
            </VStack>
          ) : (
            <VStack>
              <Text fontSize={{ base: "4vw", md: "3vw", lg: "2vw" }} color="white" fontWeight="bold" pt="40px">
                {projects[projectIndex].title}
              </Text>
              <HStack justify="center" gap="20px" pt="20%">
                <Image src={viteLogo} boxSize={{base:"100px",sm:"140px",md:"200px",xl:"150px",ll:"200px"}} />
                <Text color="white" fontSize="30px">+</Text>
                <Image src={reactLogo} width={{base:"100px",sm:"140px",md:"200px",xl:"150px",ll:"200px"}} className="spin-logo" />
              </HStack>
            </VStack>
          )}

          <Text
            fontSize={{ base: '12px', sm: '14px', md: '16px', lg: '18px' }}
            color="#B0B0B0"
            textAlign="center"
            maxW="90%"
            lineHeight="1.6"
            mt="auto"
            mb="30px"
          >
            {projects[projectIndex].description}
          </Text>
        </VStack>

        {/* Navigation */}
        <HStack mt="20px">
          <Button
            onClick={() => setProjectIndex(prev => Math.max(0, prev - 1))}
            bg="linear-gradient(to right, #005ce6, #00dfd8)"
            color="white"
            backgroundClip="padding-box"
            w="80px"
            borderRadius="8px"
            disabled={projectIndex === 0}
          >
            Prev
          </Button>
          <Button
            onClick={() => setProjectIndex(prev => Math.min(projects.length - 1, prev + 1))}
            bg="linear-gradient(to right, #005ce6, #00dfd8)"
            color="white"
            backgroundClip="padding-box"
            w="80px"
            borderRadius="8px"
            disabled={projectIndex === projects.length - 1}
          >
            Next
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default ProjectsSection;
