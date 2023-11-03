import { ChakraProvider } from "@chakra-ui/react";
require('dotenv').config();

function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default App;
