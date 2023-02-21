import { Box } from '@chakra-ui/react'
import React from 'react'
import { Dashboard } from './01-Dashboard/01-Dashboard'
import { Users } from './02-Users'
import { Orders } from './03-Orders'
import { Products } from './04-Products/04-Products'
import { Accounts } from './05-Accounts'
import { Tasks } from './06-Tasks/06-Tasks'

export const AdminRoutes = ({routesText}) => {
    return (
        <Box>
           {routesText === "Dashboard" ? <Dashboard /> : ""} 
           {routesText === "Users" ? <Users /> : ""} 
           {routesText === "Orders" ?  <Orders /> : ""} 
           {routesText === "Products" ? <Products /> : ""} 
           {routesText === "Accounts" ? <Accounts />: ""} 
           {routesText === "Tasks" ?   <Tasks /> : ""} 
        </Box>
    )
}
