import { ChakraProvider } from '@chakra-ui/react'

function App({ Component, pageProps }) {
  return 
  (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
//wraps the chakra componenets in the app
  )
  
}

export default App;