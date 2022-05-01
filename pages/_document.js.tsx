import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import theme from '../src/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="zh-cn">
        <Head>
          <link rel="icon" href="/avatar.jpg" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}