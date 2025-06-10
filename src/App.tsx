import { Text, Grid, GridItem, Box, VStack, HStack, Image, Spacer,Button } from '@chakra-ui/react';
import { useState } from 'react'; // Make sure this is at the top
import ME from "../images/me.png"
import logo from "../images/dev.png"
import blue from "../images/bluePlus.png"
import burger from "../images/burger-menu.png"



function App() {
  const [page, setPage] = useState(0);

  return (
    <Box
      w="100%"
      minHeight="fit-content"
      bg="#0F1115"
      display="flex"
      justifyContent="center"
      
    >
      
      <Grid
        templateRows={{base:"repeat(9, 1fr)",sm:"repeat(9, 1fr)",md:"repeat(9, 1fr)",lg:"repeat(9, 1fr) ",xl:"repeat(6, 1fr)"}} 
        templateColumns={{ base: "1fr", sm: "1fr", md:"1fr", lg: "1fr",xl:"repeat(2, 1fr)"}}
        rowGap="45px"
        columnGap="45px"
        w="100%"
        
        px = "4vw"
      >
        <GridItem rowSpan={1} colSpan={1} >
          <Box w="100%" h = "100%"  display="flex"  >
            <VStack justify = "left" align = "start" py = "5" w = "100%">
              <HStack>
                <Image src = {logo} boxSize = "50px"/>
                <Text color="white" fontSize={{base:"16px",sm:"18px",md:"25px",lg:"25px",xl:"25px"}} fontWeight = "750" font = "inter">Computer Science</Text>
              </HStack>
            
            <Text color= "white" fontSize = {{base:"26px",sm:"30px",md:"45px",lg:"33px",xl:"45"}} fontWeight = "750" font = "inter">Academic & Personal Portfolio</Text>
            </VStack>
          </Box>
        </GridItem>

        <GridItem  display="flex" rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} bg="#1C1F26" borderBottomRadius="20px" borderTopRadius = {{ base: "20px", sm: "20px", md: "20px",lg:"20px",xl:"0px" }} maxH = "600px" >
          
          <VStack
  py="5"
  gap={{ base: "15px", sm: "20px", md: "20px", lg: "20px", xl: "70px" }}
  maxH="600px"
  overflow="hidden"
  position="relative"
  w="100%"
>
  <Box
    w="100%"
    transition="transform 0.6s ease"
    transform={`translateY(-${page * 100}%)`}
  >
    {/* Page 1 */}
    <VStack h="600px" w="100%" px="5" gap = "10px">
      <HStack alignSelf="center" w="90%">
        <Image src={logo} boxSize="30px" />
        <Text font="inter" fontWeight="750" color="white">
          About me
        </Text>
        <Spacer />
        <Image src={burger} boxSize="50px" />
      </HStack>

      <Grid
        py = "100px"
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(4, 1fr)"
        w="90%"
        h = "70%" bg = "red">
        
        <GridItem colSpan={1} rowSpan={1} display="flex" alignItems="center">
          <Text
            font="inter"
            fontSize={{
              base: "15px",
              sm: "18px",
              md: "20px",
              lg: "22px",
              xl: "22px",
            }}
            color="white"
          >
            Nice to meet you, I'm Lyudmil Anastasov
          </Text>
        </GridItem>

        <GridItem
          rowSpan={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }}
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image boxSize="20vw" src={ME} />
        </GridItem>

        <GridItem
          colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}
          rowSpan={3}
        >
          <VStack align="start" gap = "30px" >
            <Text
              font="inter"
              fontSize={{
                base: "10px",
                sm: "14px",
                md: "13px",
                lg: "13px",
                xl: "13px",
              }}
              color="#B0B0B0"
            >
              Enthusiastic third-year Computer Science student with a focus on
              software engineering and machine learning. I am passionate about
              using my technical skills to tackle real-world challenges and
              contribute to meaningful projects. Beyond coding, I enjoy arts,
              thus bringing a creative edge to my approach in problem-solving.
            </Text>

            <HStack>
              <Text
                font="inter"
                fontSize={{base:"20px",lg:"35px"}}
                fontWeight="bold"
                color="white"
              >
                5
              </Text>
              <Image src={blue} boxSize="30px" />
              <Text
                font="inter"
                fontSize={{
                  base: "9px",
                  sm: "15px",
                  md: "15px",
                  lg: "17px",
                  xl: "17px",
                }}
                color="white"
              >
                Years of programming experience
              </Text>
            </HStack>
          </VStack>
        </GridItem>
      </Grid>

      <Button
        alignSelf="center"
        mt="4"
        onClick={() => setPage(1)}
        colorScheme="blue"
      >
        Learn More
      </Button>
    </VStack>

    {/* Page 2 */}
    <VStack h="90%" w="90%" justifySelf="center" justify = "flex-end"  >
      
      <Button onClick={() => setPage(0)} colorScheme="purple">
        Go Back
      </Button>
    </VStack>
  </Box>
</VStack>
          

        </GridItem>

        <GridItem  bg="#1C1F26" borderRadius="20px"  rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }}  />
        <GridItem rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} bg="#1C1F26" borderTopRadius="20px"    borderBottomRadius = {{ base: "20px", sm: "20px" }}/>
        <GridItem rowSpan={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3 }} bg="#1C1F26" borderTopRadius="20px"  />
      </Grid>
    </Box>
  );
}

export default App;

