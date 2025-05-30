import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import playerApp from './reducers'

const store = createStore(playerApp);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default Root;