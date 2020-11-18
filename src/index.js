import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import firebase from "./server/firebase";
import { Provider } from "react-redux";
import store  from "./store";

const Index = (props) => {
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                props.history.push('/');
            } else {
                props.history.push('/login');
            }
        });
    }, []);

    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={App} />
        </Switch>
    );
};

const IndexWithRouter = withRouter(Index);

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Provider store={store}>
            <IndexWithRouter />
          </Provider>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
