import React from 'react';
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;
  
  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const titulo = evento.target.titulo.value;
    const descricao = evento.target.descricao.value;
    const prazo = evento.target.prazo.value;
    const datacriacao = evento.target.datacriacao.value;
    const status = evento.target.status.value;
    const prioridade = evento.target.prioridade.value;

    const  tarefa = {
      titulo,
      descricao,
      prazo,
      datacriacao,
      status,
      prioridade
    }

    try {
      const response = await Api.fetchPost(tarefa);
      const result = await response.json();
      alert(result.mesage);
      history.push('/');
    } catch(error) {
      console.log(error);
    }

  }
  return (

// <div className="container cadastro">
  
//           <h3>Cadastro de Tarefas</h3>

// <div className="card-body">
// <form onSubmit= {handleSubmit}>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label htmlFor="floatingInput">Tarefa</label>
// <input type="text" className="form-control"  name="titulo" id="floatingInput" placeholder="Digite a Tarefa"/>
// </div>
// <div className="form-group col-md-6">
// <label htmlFor="floatingdescricao">Descrição</label>
// <input type="text" className="form-control"  name="descricao" id="floatingdescricao" placeholder="Digite a Descrição"/>

// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label htmlFor="floatingprazo">Prazo</label>
// <input type="text" className="form-control" name="prazo" id="floatingprazo" placeholder="Digite o Prazo"/>

// </div>
// <div className="form-group col-md-6">
// <label htmlFor="floatingdatacriacao">Data de Criação</label>
// <input type="text" className="form-control" name="datacriacao" id="floatingdatacriacao" placeholder="Digite a Data de Criacao"/>

// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-4">
//   <label htmlFor="floatingstatus">Status</label>
//   <select id="floatingstatus" className="form-control" name="status">
//   <option value = "Fazer"selected>Fazer</option>
//   <option value = "Fazendo">Fazendo</option>
//   <option value = "Feito">Fazendo</option>
//   </select>
// </div>
// <div className="form-group col-md-4">
//   <label htmlFor="floatingprioridade">Prioridade</label>
//   <select id="floatingprioridade" className="form-control" name="prioridade">
//   <option value = "Alta"selected>Alta</option>
//   <option value = "Média">Média</option>
//   <option value = "Baixa">Baixa</option>
//   </select>
// </div>
// </div>
// <div className="form-group col-md-4">
// </div>
// <button type="submit" className="btn btn-primary">Enviar</button>
// </form>
// </div>
// </div>

<div className="container cadastro">
<div className="card mt-4">
  <div className="card-title">
    <div className="row">
      <div className="col">
        <h3>Cadastro das Tarefas</h3>
      </div>
    </div>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="titulo" id="floatingInput" placeholder="Digite a Tarefa"/>
            <label htmlFor="floatingInput">Titulo</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input type="text" className="form-control" name="descricao" id="floatingdescricao" placeholder="Digite um Descritivo"/>
            <label htmlFor="floatingdescricao">Descrição</label>
          </div>
        </div>
        <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input type="Date:Now" className="form-control" name="datacriacao" id="floatingInput" placeholder="Date:Now"/>
            <label htmlFor="floatingInput">Date:Now</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input type="text" className="form-control" name="prazo" id="floatingprazo" placeholder="Digite um Prazo"/>
            <label htmlFor="floatingdescricao">Prazo</label>
          </div>
        </div>
        <div className="row">
        <div className="col">
          <div className="form-floating">
            <select className="form-control" name="prioridade" id="floatingprioridade" placeholder="Selecione a Prioridade">
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
            </select>
            <label htmlFor="floatingprioridade">Prioridade</label>
          </div>
          </div>
          <div className="col">
          <div className="form-floating">
            <select className="form-control" name="status" id="floatingstatus" placeholder="Selecione o Status">
              <option value="por fazer">Por Fazer</option>
              <option value="em andamento">Em Andamento</option>
              <option value="concluida">Concluida</option>
            </select>
            <label htmlFor="floatingstatus">Status</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-success" type="submit">Enviar</button>
          <button className="btn btn-outline-default">Voltar</button>
        </div>
        </div>
        </div>
        </div>
        </form>
    </div>
    </div>
</div>
);
};

export default Cadastro