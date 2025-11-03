import { Text, Grid, GridItem, Box, VStack, HStack, Image, Spacer, Button, Stack } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import ME from "../images/ME.jpg"
import logo from "../images/dev.png"
import blue from "../images/bluePlus.png"
import vu from "../images/Vrije.jpg"
import L from "../images/Lycee.png"
import vuLogo from "../images/vrijeLogo.png"
import lLogo from "../images/lyceeLogo.png"
import arr from "../images/arrUP.png"
import arrD from "../images/arr.png"
import AboutMe from "../src/components/menuButton.tsx"
import ProjectsSection from "../src/components/ProjectsSection.tsx"
import './App.css';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}


function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0JEVJ1W1C8';
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-0JEVJ1W1C8');
  }, []);
  return (
    <Box
      w="100%"
      minHeight="fit-content"
      bg="#0F1115"
      display="flex"
      justifyContent="center"

    >

      <Grid
        templateRows={{ base: "auto repeat(8, 1fr)", sm: "auto repeat(8, 1fr)", md: "auto repeat(8, 1fr)", lg: "auto repeat(8, 1fr)", xl: "auto repeat(5, 1fr)" }}
        templateColumns={{ base: "1fr", sm: "1fr", md: "1fr", lg: "1fr", xl: "repeat(2, 1fr)" }}
        rowGap="90px"
        columnGap="90px"
        w="100%"
        px="4vw">

        <GridItem rowSpan={1} colSpan={1} maxH={{ base: "400px", sm: "700px", md: "900px", lg: "200px", xl: "35vw" }}>
          <Box w="100%" h="100%" display="flex"  >
            <VStack justify="left" align="start" py="5" w="100%">
              <HStack>
                <Image src={logo} boxSize="50px" />
                <Text color="white" fontSize={{ base: "16px", sm: "18px", md: "25px", lg: "25px", xl: "25px" }} fontWeight="750" font="inter">Computer Science</Text>
              </HStack>

              <Text color="white" fontSize={{ base: "26px", sm: "30px", md: "45px", lg: "33px", xl: "30px", ll: "40px" }} fontWeight="750" font="inter">Academic & Personal Portfolio</Text>
            </VStack>
          </Box>
        </GridItem>

        <GridItem display="flex" rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} bg="#1C1F26" borderBottomRadius="20px" borderTopRadius={{ base: "20px", sm: "20px", md: "20px", lg: "20px", xl: "0px" }} maxH={{ base: "480px", sm: "580px", md: "680px", lg: "97vh", xl: "47vw" }} overflow="hidden">

          <VStack
            gap={{ base: "0px", sm: "0px", md: "20px", lg: "20px", xl: "1vh", ll: "3vh" }}
            overflow="hidden"
            position="relative"
            w="100%"
            h="100%">
            <HStack  bg="#1C1F26" alignSelf="center" position="absolute" top="0" zIndex="2" pt="2" w="90%">
              <Image src={logo} boxSize="30px" />
              <Text font="inter" fontWeight="750" pt = "5px" color="white">
                About me
              </Text>
              <Spacer />
              <AboutMe setPage={setPage} />
            </HStack>
            <Box
              w="100%"
              transition="transform 0.6s ease"
              transform={{ base: `translateY(-${page * 100}%)` }}
              h="100%"
            >
              {/* Page 1 */}
              <VStack  h="100%" pt = "100px" w="100%" px="5" gap={{ base: "0px", sm: "10px", xl: "0px" }} >
                <Grid
                  templateColumns="repeat(2, 1fr)"
                  templateRows="repeat(4, 1fr)"
                  w="90%"
                  h="91%"
                  rowGap="0px"
                  columnGap={{ base: "0px", sm: "30px", lg: "0px" }} >

                  <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 1, xl: 1, ll: 2 }} rowSpan={{base:1,sm:2,md:1}} display="flex" alignItems="flex-end" mb="10px" borderTop={{base:"3px solid #B0B0B0",xl:"3px solid #B0B0B0"}} borderColor="#B0B0B0" >
                    <Text
                      font="inter"
                      py="    20px"
                      fontSize={{
                        base: "3.6vw",
                        sm: "3.6vw",
                        md: "4vw",
                        lg: "3vw",
                        xl: "1.9vw",
                      }}
                      color="white" verticalAlign="top" >
                      Pleased to meet you, I'm Lyudmil Anastasov. Here's a bit more about me..
                    </Text>
                  </GridItem>

                  <GridItem
                    rowSpan={{ base: 1, sm: 2, md: 3, lg: 3, xl: 1, ll: 2 }}
                    colSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image boxSize={{ base: "85%",sm:"85%",md:"85%",lg: "85%", xl: "90%" }} src={ME} />
                  </GridItem>

                  <GridItem
                    colSpan={{ base: 2, sm: 2, md: 1, lg: 1, xl: 2,ll:1 }}
                    rowSpan={{ base: 2, sm: 2, md: 3, lg: 2, xl: 2,ll:2 }}
                    alignContent="center">
                    <Text
                      font="inter"
                      fontSize={{
                        base: "12px",
                        sm: "16px",
                        md: "18px",
                        lg: "19px",
                        xl: "13px",
                        ll:"16px"
                      }}
                      color="#B0B0B0"
                      textAlign={{ base: "center", sm: "start" }}
                    >
                      Enthusiastic Computer Science student and Full Stack Software engineer with a focus on
                      software and machine learning. I am passionate about
                      using my technical skills to tackle real-world challenges and
                      contribute to meaningful projects. Beyond coding, I enjoy arts,
                      thus bringing a creative edge to my approach in problem-solving.
                    </Text>
                  </GridItem>

                  <GridItem
                    colSpan={2}
                    rowSpan={1}
                    alignContent="center" borderTop="3px solid" borderColor="#B0B0B0">
                    <HStack gap="25%" w="100%">
                      <HStack gap="2px">
                        <Text
                          font="inter"
                          fontSize={{ base: "25px", md: "40px", lg: "45px" }}
                          fontWeight="bold"
                          color="white"
                        >5</Text>
                        <Image src={blue} boxSize={{ base: "2vw", sm: "2vw", md: "2vw", lg: "2vw", xl: "1vw" }} />
                        <Text
                          font="inter"
                          fontSize={{
                            base: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "17px",
                            xl: "17px",
                          }}
                          color="white"
                        >
                          Years of experience
                        </Text>
                      </HStack>

                      <HStack gap="2px" px="30px" >
                        <Text
                          font="inter"
                          fontSize={{ base: "25px", md: "40px", lg: "45px" }}
                          fontWeight="bold"
                          color="white"
                        >5</Text>
                        <Image src={blue} boxSize={{ base: "2vw", sm: "2vw", md: "2vw", lg: "2vw", xl: "1vw" }} />
                        <Text
                          font="inter"
                          fontSize={{
                            base: "10px",
                            sm: "12px",
                            md: "15px",
                            lg: "17px",
                            xl: "17px",
                          }}
                          color="white"
                        >
                          Years of studies
                        </Text>
                      </HStack>
                    </HStack>
                  </GridItem>
                </Grid>
                <Spacer />
                <Button
                  w={{ base: "40px", sm: "45px", md: "50px", xl: "40px", ll: "60px" }}
                  h={{ base: "40px", sm: "45px", md: "50px", xl: "40px", ll: "60px" }}
                  borderRadius="full"
                  bg="linear-gradient(to right, #005ce6, #00dfd8)"
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  border="none"
                  overflow="hidden"
                  _hover={{
                    bg: "linear-gradient(to right, #0047b3, #00c0c0)",
                  }} onClick={() => setPage(1)}> <Image src={arrD} boxSize="auto" /></Button>

              </VStack>

              {/* Page 2 */}
              <VStack   h={{ base: "110%", sm: "105%", md: "79%", lg: "77%", xl: "100%" }} w="90%" justifySelf="center" gap={{ base: "20px", xl: "35px", ll: "100px" }} display="flex" >
                <VStack gap="20px" h="100%" display="flex" pt = "100px">

                  <Text fontSize="3vw" font="inter" color="white">Education</Text>

                  <Stack w="100%" h="40%" alignItems="flex-start" justifyContent="flex-start" direction="row" flex="1" gap="20px">
                    <Box w="70%" h="100%" >
                      <Image src={L} boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%", ll: "100%" }} />
                    </Box>
                    <VStack w="30%" alignSelf="flex-start" gap="0px" h="100%">
                      <Spacer />
                      <Image src={lLogo} w="90%" />
                      <Spacer />
                      <Box>
                        <Text font="inter" color="white" fontSize={{ base: "2vw", xl: "0.95vw" }}>Specialization: Mathematics & Informatics</Text>
                      </Box>
                    </VStack>
                  </Stack>

                  <Stack w="100%" h="40%" alignItems="flex-start" justifyContent="flex-start" direction="row" flex="1" gap="20px" >
                    <Box w="70%" h="100%" bg="orange">
                      <Image src={vu} boxSize={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "100%", ll: "100%" }} />
                    </Box>
                    <VStack w="30%" alignItems="flex-start" alignSelf="flex-start" h="100%"  >
                      <Spacer />
                      <Image src={vuLogo} w="20vw" />

                      <Spacer />
                      <Box>
                        <Text font="inter" color="white" fontSize={{ base: "2vw", xl: "0.92vw" }}>Bachelor Computer Science</Text>
                        <Text font="inter" color="white" fontSize={{ base: "2vw", xl: "0.92vw" }}>Minor: Deep Programming</Text>
                      </Box>
                    </VStack>
                  </Stack>


                </VStack>
                     <Button onClick={() => setPage(0)}
                     w={{ base: "40px", sm: "45px", md: "50px", xl: "40px", ll: "60px" }}
                     h={{ base: "40px", sm: "45px", md: "50px", xl: "40px", ll: "60px" }}
                     borderRadius="full"
                     zIndex = "9999"
                     bg="linear-gradient(to right, #005ce6, #00dfd8)"
                     color="white"
                     fontWeight="bold"
                     fontSize="lg"
                     border="none"
                     overflow="hidden"
                     _hover={{
                       bg: "linear-gradient(to right, #0047b3, #00c0c0)",
                     }}><Image src={arr} boxSize="auto" /></Button>
              </VStack>

            </Box>


          </VStack>
        </GridItem>

        <GridItem bg="#1C1F26" borderRadius="20px" rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} maxH={{ base: "520px", sm: "680px", md: "720px", lg: "105vh", xl: "60vw" }} >
             <ProjectsSection/>
        </GridItem>
        <GridItem rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} bg="#1C1F26" borderTopRadius="20px" borderBottomRadius={{ base: "20px", sm: "20px" }} maxH={{ base: "480px", sm: "580px", md: "680px", lg: "97vh", xl: "45vw" }} />
        <GridItem rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2 }} bg="#1C1F26" borderTopRadius="20px" maxH={{ base: "480px", sm: "580px", md: "680px", lg: "97vh", xl: "60vw" }} />
      </Grid>
    </Box>
  );
}

export default App;

