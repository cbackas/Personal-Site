import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'
import { AppProps } from 'next/app'
import Head from 'next/head'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        bg: mode('white', 'gray.700')(props),
        color: mode('gray.700', 'white')(props)
      }
    })
  }
})

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <style>
          @import url(https://fonts.googleapis.com/css2?family=Secular+One&display=swap);
        </style>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}