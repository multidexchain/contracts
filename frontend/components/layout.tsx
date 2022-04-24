import Header from './header';
import { Box, Container } from '@chakra-ui/react';
import React from 'react';

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <Box>
            <Header />
            <Box mb={48}>
                {props.children}
            </Box>
        </Box>
    )
}

export default Layout;