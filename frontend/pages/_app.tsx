import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Web3ReactProvider } from "@web3-react/core";
import { getProvider } from "../utils/web3";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="root_container" >
        <Web3ReactProvider getLibrary={getProvider}>
          <ChakraProvider>
            <Layout>
            <Component {...pageProps} />
            </Layout>
            </ChakraProvider>
        </Web3ReactProvider>
    </div>
  );
}

export default MyApp
