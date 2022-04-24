import {
    Text,
    Image,
    Button,
    Flex,
    LinkBox,
    Spacer,
    Box,
    useMediaQuery,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import Wallet from "./wallet";

  const Header = () => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");
  
    return (
      <Flex as="header" p={4} alignItems="center" className="header-container">
        <LinkBox cursor="pointer">
          <NextLink href="/" passHref={true}>
            <Flex align="center">
              {/* <Image
                borderRadius="12px"
                mr="4"
                src="/images/logos/logo.png"
                width="40px"
                height="40px"
              /> */}
              {isMobile ? (
                ""
              ) : (
                <Text color={"white"} fontWeight="bold" fontSize="2xl" >
                  Heard of Cows
                </Text>
              )}
            </Flex>
          </NextLink>
        </LinkBox>
        <Spacer />
        <Box>
          <Wallet />
        </Box>
      </Flex>
    );
  };
  
  export default Header;
  