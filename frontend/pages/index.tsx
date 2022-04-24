import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Select, Flex, Box, Center, Text, Button, Image } from '@chakra-ui/react'

const Home: NextPage = () => {

  const onApprove = () => {
    console.log("on approve");
  }
  const onSwap = () => {
    console.log("on swap");
  }
  return (
    <Box my="4" >
          {/* <Text color={"white"} fontSize="xl" align="center" >UFO COW Swap</Text> */}
          <Center>
            <Image width="200px" src="/images/logo.png"></Image>
          </Center>
          <Flex align="center" justify="center">
            <Box m="4" border="solid" borderColor="black.600" borderRadius="8px" p="4" width="700px" >
              <Flex direction="column" justify="center">
                <Box my="2">
                  <Center>
                    <Select
                      width="190px" 
                      bg='gray.700'
                      borderColor='white'
                      color='white'
                      placeholder='Select Coin' 
                      mr="8"
                      >
                      <option value='option1'>ETH</option>
                      <option value='option2'>WETH</option>
                      <option value='option3'>MATIC</option>
                    </Select>
                    <Select
                      width="190px" 
                      bg='gray.700'
                      borderColor='white'
                      color='white'
                      placeholder='Select Chain'>
                      <option value='option1'>Mainnet</option>
                      <option value='option2'>Polygon</option>
                      <option value='option3'>Optimism</option>
                    </Select>
                  </Center>
                </Box>
                <Box my="2">
                  <Center>
                    <Select
                      width="190px" 
                      bg='gray.700'
                      borderColor='white'
                      color='white'
                      placeholder='Select Coin' 
                      mr="8"
                      >
                      <option value='option1'>ETH</option>
                      <option value='option2'>WETH</option>
                      <option value='option3'>MATIC</option>
                    </Select>
                    <Select
                      width="190px" 
                      bg='gray.700'
                      borderColor='white'
                      color='white'
                      placeholder='Select Chain'>
                      <option value='option1'>Mainnet</option>
                      <option value='option2'>Polygon</option>
                      <option value='option3'>Optimism</option>
                    </Select>
                  </Center>
                </Box>
                <Flex justify="center" direction="column" align="center">
                  <Button my="2" width="80px" onClick={onApprove}>Approve</Button>
                  <Button my="2" width="80px" onClick={onSwap}>Swap</Button>

                </Flex>
              </Flex>
            </Box>
          </Flex>
      </Box>
  )
}

export default Home
