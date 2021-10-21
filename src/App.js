import './app.css';
import {Switch, Route } from 'react-router-dom';
import Header from './components/shared/header/header';
import Footer from './components/shared/footer/footer';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import TarefaView from './pages/tarefaview/tarefaview';
import Edicao from './pages/edicao/edicao';

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
