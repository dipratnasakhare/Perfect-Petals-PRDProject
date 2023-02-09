import { Box, Text,Image, Flex} from "@chakra-ui/react"
export const OrderCheckBox = () => {

    let data = [
        
        {
            name:'Visit our Support Center',
            img:'https://cdn-icons-png.flaticon.com/512/471/471664.png'
        },
        {
            name:'Cheak your Order Status',
            img:'https://cdn-icons-png.flaticon.com/512/2900/2900216.png'
        },
        {
            name:'Shipping,Deliver & Store Pickup',
            img:'https://cdn-icons-png.flaticon.com/512/1332/1332612.png'
        },
        {
            name:'Returns & Exchanges',
            img:'https://cdn-icons-png.flaticon.com/512/5469/5469919.png'
        },
        {
            name:'Price Match Guarantee',
            img:'https://cdn-icons-png.flaticon.com/512/2529/2529396.png'
        },
      
    ]
    return(
        <Flex display={["none","none","none", "flex"]} pt="30px" pb="25px" borderTop={"1px solid"} borderBottom={"1px solid"} w="90%" m="auto" justifyContent={"space-between"}>
         {data.map((ele)=>{
            return(
                <Box>
                    <Image m="auto" w="80px" src={ele.img} />
                    <Text>{ele.name}</Text>
                </Box>
            )
         })}
        </Flex>
    )
}