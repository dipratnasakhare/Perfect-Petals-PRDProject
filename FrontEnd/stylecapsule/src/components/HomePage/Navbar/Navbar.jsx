import React from 'react';
import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

import { NavbarStractureBox } from './01-NavbarStractureBox.Navbar';
import { SliderContentBox } from './02-SliderContentBox.Navbar';

export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"gray.100"}>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>

          {/* slider Box when user gose in small device route become at in form of modal */}
          <SliderContentBox onClose={onClose} />
        </DrawerContent>
      </Drawer>

       {/* Navbar stracture here it content all route text and login cart features */}
      <NavbarStractureBox onOpen={onOpen} />
    </Box>
  )
}


