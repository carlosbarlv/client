import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import 'antd/dist/antd.css'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
