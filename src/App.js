import './App.css';
import {Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import TarefaView from './pages/TarefaView/TarefaView';
import Edicao from './pages/Edicao/Edicao';

function App() {
  return (
    <div className="container">
      <Header/> 
  <div className="app">     
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/view/:id" component={TarefaView}/>
          <Route path="/edit/:id" component={Edicao}/>
        </Switch>
      </div>
      <Footer/>
      </div>
  );
  }

export default App;
