import './App.css';
import MainNav from './components/MainNav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Affiliates from './components/Affiliates';
import NewsFull from './components/NewsFull';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Route exact path="/" component={ Home } />
        <Route path="/pokenews/" component={Home} />
        <Route path="/about" component={ About } />
        <Route path="/affiliates" component={ Affiliates } />
        <Route path="/news/:story_id"> <NewsFull/></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
