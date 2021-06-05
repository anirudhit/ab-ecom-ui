import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { MainWrapper }from './components/Eab/MainWrapper';
import { TodoPage } from './pages/todo/TodoPage';

const App = () => {
  return (
    <Switch>
      <Route path="/todo">
        <TodoPage />
      </Route>
      <Route path="/">
        <MainWrapper />
      </Route>
    </Switch>

  );
}

export default App;
