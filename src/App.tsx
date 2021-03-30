import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateBot from './components/createBot/CreateBot';
import Home from './components/home/Home';

const App: FC<any> = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/create-bot" component={CreateBot} />
  </Router>
);

export default App;
