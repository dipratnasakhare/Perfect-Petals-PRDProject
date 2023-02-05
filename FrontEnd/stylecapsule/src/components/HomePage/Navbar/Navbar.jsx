import React from 'react';
import { SidebarContent } from './SidebarContent/SidebarContent';
import { MobileNav } from './MobileNav/MobileNav';

import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"gray.100"}>
      {/* <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      /> */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} />
    </Box>
  )
}


