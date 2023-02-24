import {
    Box,
    CloseButton,
    Flex,
    Text,
    IconButton,
  } from '@chakra-ui/react';
  import {
    FiHome,
  } from "react-icons/fi";
  import { FaBirthdayCake, FaGift } from "react-icons/fa"
  import { GiRose, GiSpotedFlower } from "react-icons/gi"
import { useNavigate } from 'react-router-dom';

export const SliderContentBox = ({ onClose, ...rest }) => {

  const navigate = useNavigate()

  const LinkItems = [
    { name: "Home", icon: FiHome, route:"/" },
    { name: "Valentine", icon: GiRose , route:"/Valentine_Flowers"},
    { name: "Gift Baskets", icon: FaGift, route:"/Gift_Baskets_Food" },
    { name: "Lavender Gifts", icon: GiSpotedFlower, route:"/Lavender_Gifts" },
  ];

      
    return (
      <Box
        transition="3s ease"
        borderRight="1px"
        w={{ base: 'full', md: 60 }}
        pos="fixed"
        h="full"
        {...rest}>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
            Perfect Petals
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        {LinkItems.map((link) => (
           <Flex w="90%"  gap="25px" m="auto">
           <IconButton
             variant="outline"
             icon={<link.icon />}
           />
           <Text  onClick={()=>{
               navigate(link.route)
               onClose()
            }} display={"grid"} alignContent={"center"} fontFamily={"cursive"}>
             {link.name}
           </Text>{" "}
         </Flex>
        ))}
      </Box>
    );
  };