// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';
// import selectedChannelReducer from './reducers/selected_channel_reducer';
import currentUserReducer from './reducers/current_user_reducer';

const initialState = {
  messages: [],
  channels: ['general', 'react', 'paris'],
  // selectedChannel: 'general',
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}` //|| prompt("What is your username?")
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  // selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer
});

// Middlewares
const middlewares = applyMiddleware(logger, reduxPromise);
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
