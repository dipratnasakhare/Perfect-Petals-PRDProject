import { Box, Flex, Heading, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

export const DetailsBox = ({ count, name, Icons }) => {
    return (
        <Flex p="25px" border="1px solid red">
            <Box>
                <Heading>
                    {count}
                </Heading>
                <Text>{name}</Text>
            </Box>

            <Spacer />

            <Box>
                <Icons size="5rem" />
            </Box>
        </Flex>
    )
}
