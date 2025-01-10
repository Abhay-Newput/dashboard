import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DashboardTable from "../../components/table/Table";
import DashboardGraph from "../../components/graph/Graph";

function Home() {
  return (
    <Flex width="100%" height="100vh">
      <Box position="fixed" height="100vh" width="250px">
        <Sidebar />
      </Box>

      <Flex flex="1" marginLeft="250px" flexDirection="column">
        <Box position="fixed" top="0" right="0" left="250px" zIndex="1000" bg="white">
          <Navbar />
        </Box>

        <Box
          flex="1"
          mt="15%"
          minH="calc(100vh - 64px)"
          overflowY="auto"
        >
          <Flex mx="12%" gap="80px" flexWrap={{ base: "wrap", xl: "nowrap" }}>
            
            <Box w={'50%'}>
              <DashboardGraph />
            </Box>
            <Box w={'50%'}>
              <DashboardTable />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default Home;