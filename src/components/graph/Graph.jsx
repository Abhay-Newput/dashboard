import { Box } from "@chakra-ui/react";

const DashboardGraph = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      borderColor={'gray.200'}
      shadow="sm"
      h="300px" // Fixed height for demonstration
      p="4"
    >
      {/* You can replace this with any chart library like recharts, chart.js, etc. */}
      <Box as="h3" fontSize="lg" fontWeight="medium" mb="4">
        Analytics Graph
      </Box>
    </Box>
  );
};

export default DashboardGraph;