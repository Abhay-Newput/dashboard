import React from 'react';
import {
  Box,
  VStack,
  Text,
  HStack,
  Flex
} from '@chakra-ui/react';
import {
  Home,
  ShoppingCart,
  BarChart2,
  User,
  Lock,
  Settings
} from 'lucide-react';
import { Separator } from "@chakra-ui/react"

const SidebarItem = ({ icon: IconComponent, children, isActive }) => {
  return (
    <HStack
      w="full"
      px="4"
      py="3"
      cursor="pointer"
      role="group"
      transition="all 0.2s"
      borderRadius="lg"
      bg={isActive ? "blue.50" : "transparent"}
      color={isActive ? "blue.600" : "gray.500"}
      _hover={{
        bg: "blue.50",
        color: "blue.600"
      }}
    >
      <IconComponent size={20} />
      <Text fontSize="md" fontWeight={isActive ? "medium" : "normal"}>
        {children}
      </Text>
    </HStack>
  );
};

const Sidebar = () => {
  return (
    <Box
      as="nav"
      h="90vh"
      w="72"
      bg="white"
      border="2px solid black"
      borderColor="gray.200"
      py="10"
      px="4"
      m={'5'}
      borderRadius={'2xl'}
    >
      <Flex mx="16" my="6" >
        <Text fontSize="xl" fontWeight="bold" color="navy.900">
          <strong>YIELD</strong> FX
        </Text>
      </Flex>
      <Separator variant={'solid'} size={'md'} />
      <VStack my={"8"} spacing="8" align="stretch">
        <SidebarItem icon={Home} >
          <strong>Main Dashboard </strong>
        </SidebarItem>
        <SidebarItem icon={ShoppingCart}>
        <strong>NFT Marketplace</strong>
        </SidebarItem>
        <SidebarItem icon={BarChart2}>
        <strong> Data Tables </strong>
        </SidebarItem>
        <SidebarItem icon={User}>
        <strong>Profile</strong>
        </SidebarItem>
        <SidebarItem icon={Lock}>
        <strong> Sign In </strong>
        </SidebarItem>
        <SidebarItem icon={Settings}>
        <strong>RTL Admin</strong>
        </SidebarItem>
      </VStack>
    </Box>
  );
};

export default Sidebar;
