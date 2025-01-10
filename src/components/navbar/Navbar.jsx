import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { Search, Bell, UserRoundPen } from 'lucide-react'; // Ensure proper imports
import { ColorModeButton } from '../ui/color-mode';

const Navbar = () => {
  return (
    <Box
      px={8}
      py={6}
      backdropFilter="blur(10px)" // Adds blur effect
      background="rgba(255, 255, 255, 0.7)" // Semi-transparent background
      borderRadius="0.5rem" // Rounded corners
      boxShadow="md"
      border="2px solid black"
      borderColor="gray.200"
      width={'70%'}
      position="fixed"
      top="8"
      left="25%"
      zIndex="20"
      height={'100px'}
    >
      <Flex justify="space-between" align="center">
        {/* Brand Name */}
        <Text fontSize="2xl" fontWeight="bold" color="black">
          Main Dashboard
        </Text>

        {/* Search Input */}
        <Flex
          align="center"
          bg="blue.100"
          borderRadius="full"
          px={4}
          py={2}
          maxW="400px"
          w="100%"
          display={{ base: 'none', md: 'flex' }}
        >
          <Input
            type="text"
            placeholder="Search..."
            variant="unstyled"
            mr={1}
          />
          <IconButton aria-label="Search" bg="transparent">
           <Search size={16} color="black" />
          </IconButton> 
          <Flex align="center" gap={1}>
          <IconButton aria-label="Toggle theme" bg="transparent">
            <ColorModeButton />
          </IconButton>

          <IconButton aria-label="Notifications" bg="transparent">
            <Bell size={20} color='black' />
          </IconButton>

          <IconButton aria-label="Notifications" bg="transparent">
            <UserRoundPen size={20} color='black' />
          </IconButton>

        </Flex>
        </Flex>
       
      </Flex>
    </Box>
  );
};

export default Navbar;
