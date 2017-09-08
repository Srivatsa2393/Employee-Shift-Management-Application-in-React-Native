import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAMoHLG6xpU1g4kC-IV0dN4_hsdexj1od8",
      authDomain: "manager-13c73.firebaseapp.com",
      databaseURL: "https://manager-13c73.firebaseio.com",
      projectId: "manager-13c73",
      storageBucket: "manager-13c73.appspot.com",
      messagingSenderId: "1021374195327"
    };
    firebase.initializeApp(config);
  }


  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
