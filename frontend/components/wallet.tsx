import { useWeb3React } from '@web3-react/core';
import { Button, Box, Flex, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { injected, formatAddress } from '../utils/web3'
import { UserRejectedRequestError } from '@web3-react/injected-connector'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: "8f05659663d54368ad0b74cc973eac60",
});

//  Wrap with Web3Provider from ethers.js
const web3Provider = new providers.Web3Provider(provider);

const Wallet = () => {
    const router = useRouter()
    const web3Connect = useWeb3React();

    const connect = () => {
        web3Connect.activate(injected, (error: any) => {
            // todo: present toast notifications
            console.error('connection error: ', error);
            if (error instanceof UserRejectedRequestError) {
                // ignore user rejected error
            } else {
                web3Connect.setError(error)
            }
        }, false)
    }
    const walletConnect = async () => {
      //  Enable session (triggers QR Code modal)
      await provider.enable();
    }

    return (
        <>
            {!web3Connect.active && 
                <Menu>
                    <MenuButton as={Button} bg="white" color="brand.400" rightIcon={<ChevronDownIcon />}>
                        Connect
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={connect}>Metamask</MenuItem>
                        <MenuItem onClick={walletConnect}>WalletConnect</MenuItem>
                    </MenuList>

                </Menu>
            }
            {web3Connect.active && typeof web3Connect.account === 'string' && typeof web3Connect.chainId === 'number' && 
                <>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Flex alignItems='center'>
                                <Box>{formatAddress(web3Connect.account)}</Box>
                            </Flex>
                        </MenuButton>
                    </Menu>
                </>
            }
        </>
    )
}

export default Wallet;