import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Home() {
  return (
    <Flex  width="100%" height="100vh" bg={{_dark: 'black'}}>
        <Sidebar />
      <Flex flex="1" marginLeft="15%" flexDirection="column">
          <Navbar />

        <Box
          flex="1"
          mt="4rem" 
          p="4"
        >
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;
