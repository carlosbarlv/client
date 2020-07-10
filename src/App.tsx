import 'antd/dist/antd.css'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import Routes from './routes'
import { defaultTheme } from './themes'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
