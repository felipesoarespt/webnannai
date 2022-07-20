import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components'

import ThemeConfig from '@theme/ThemeConfig'
import GlobalStyles from '@theme/GlobalStyles'

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={ThemeConfig}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ToastContainer />
      </ThemeProvider>
    </>
  )
}
