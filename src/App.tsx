import {Text, SimpleGrid, GridItem,Box} from '@chakra-ui/react'

function App() {

  return (
    <>
      <Box w = "100vw" bg = "#0F1115">
        <SimpleGrid columns = {{base:1,sm:1,md:2,lg: 2}} rowGap = "25px" columnGap = "25px" w = "calc(100vw - 48px)">
          <GridItem colSpan="1">
            <Box h = "18vh" borderRadius = "20px">
               <Text>Header</Text>
            </Box>
          </GridItem>
          
           <GridItem bg = "#1C1F26" borderRadius = "20px" colSpan="1">
             <Box h = "40vh">
               
             </Box>
           </GridItem>
  
           <GridItem bg = "#1C1F26" borderRadius = "20px" colSpan="1">
             <Box h = "40vh">
               
             </Box>
           </GridItem>
  
           <GridItem bg = "#1C1F26" borderRadius = "20px" colSpan="1">
             <Box h = "40vh">
               
             </Box>
           </GridItem>
        
        </SimpleGrid>
      </Box>
    </>
  )
}

export default App
