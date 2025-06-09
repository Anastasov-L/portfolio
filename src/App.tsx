import {Text, SimpleGrid, GridItem,Box} from '@chakra-ui/react'

function App() {

  return (
    <>
      <Box w = "100vw" bg = "#0F1115">
        <SimpleGrid columns = {{base:2,sm:2,md:2,lg: 2,xl: 2}} rowGap = "25px" columnGap = "25px" w = "calc(100vw - 48px)" display="grid">
          <GridItem h = "18vh">
            <Box h = "18vh" borderRadius = "20px" >
               <Text>Header</Text>
            </Box>
          </GridItem>
          
           <GridItem bg = "#1C1F26" borderRadius = "20px" >
             <Box h = "40vh">
               
             </Box>
           </GridItem>
  
           <GridItem bg = "#1C1F26" borderRadius = "20px"  >
             <Box h = "40vh" w = "200px">
               
             </Box>
           </GridItem>
  
           <GridItem bg = "#1C1F26" borderRadius = "20px" >
             <Box h = "40vh">
               
             </Box>
           </GridItem>
        
        </SimpleGrid>
      </Box>
    </>
  )
}

export default App
