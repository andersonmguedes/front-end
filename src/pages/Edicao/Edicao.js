import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Api from "../../api/api";
import moment from "moment";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;
  const [tarefa, setTarefa] = useState({});

  useEffect(() => {
    getTarefaById();
  }, []);

    const getTarefaById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();
    setTarefa(result);
  };

  const handleFieldsChange = (event) => {
    const campos = { ...tarefa };
    campos[event.target.name] = event.target.value;

    setTarefa(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const tarefaObj = { ...tarefa };
      const data= new Date(tarefaObj.prazo)
      tarefaObj.prazo = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
      try {
      const response = await Api.fetchPut(tarefaObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

    const transformDate = (prazo) => {
      return moment(prazo).utc().format('YYYY-MM-DD')};

    return (

//  <div className="container cadastro">
  
//   <h3>Edição das Tarefas</h3>
// <div className="card-body">
// <form onSubmit= {handleSubmit}>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label htmlFor="floatingInput">Tarefa</label>
// <input type="text" className="form-control" value={tarefa.titulo} name="titulo" id="floatingInput"onChange={handleFieldsChange} placeholder="Digite a Tarefa"/>
// </div>
// <div className="form-group col-md-6">
// <label htmlFor="floatingdescricao">Descrição</label>
// <input type="text" className="form-control" value={tarefa.descricao} name="descricao" id="floatingdescricao"onChange={handleFieldsChange} placeholder="Digite a Descrição"/>

// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-6">
// <label htmlFor="floatingprazo">Prazo</label>
// <input type="text" className="form-control" value={tarefa.prazo} name="prazo" id="floatingprazo"onChange={handleFieldsChange} placeholder="Digite o Prazo"/>

// </div>
// <div className="form-group col-md-6">
// <label htmlFor="floatingdatacriacao">Data de Criação</label>
// <input type="text" className="form-control" value={tarefa.datacriacao} name="datacriacao" id="floatingdatacriacao"onChange={handleFieldsChange} placeholder="Digite a Data de Criacao"/>

// </div>
// </div>
// <div className="form-row">
// <div className="form-group col-md-4">
//   <label htmlFor="floatingstatus">Status</label>
//   <select id="floatingstatus" className="form-control" value={tarefa.status} name="status" onChange={handleFieldsChange}>
//   <option value = "Fazer"selected>Fazer</option>
//   <option value = "Fazendo">Fazendo</option>
//   <option value = "Feito">Fazendo</option>
//   </select>
// </div>
// <div className="form-group col-md-4">
//   <label htmlFor="floatingprioridade">Prioridade</label>
//   <select id="floatingprioridade" className="form-control"value={tarefa.prioridade} name="prioridade" onChange={handleFieldsChange}>
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
        <h3>Edicao da Tarefa</h3>
      </div>
    </div>
  </div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={tarefa.titulo}
              className="form-control"
              name="titulo"
              id="floatingInput"
              placeholder="Digite a Tarefa"
              onChange={handleFieldsChange}
            />
            <label htmlFor="floatingInput">Tarefa</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              value={tarefa.descricao}
              className="form-control"
              name="descricao"
              id="floatingdescricao"
              placeholder="Digite um Descritivo"
              onChange={handleFieldsChange}
            />
            <label htmlFor="floatingdescricao">Descrição</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col -2">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={tarefa.datacriacao}
              className="form-control"
              name="datacriacao"
              id="floatingInput"
              placeholder="Data"
              onChange={handleFieldsChange}
            />
            <label htmlFor="floatingInput">Data de Criacao</label>
          </div>
        </div>
        <div className="col -2">
          <div className="form-floating">
            <input
              type="text"
              value={tarefa.prazo}
              className="form-control"
              name="prazo"
              id="floatingprazo"
              placeholder="Digite um Prazo"
              onChange={handleFieldsChange}
            />
            <label htmlFor="floatingprazo">Prazo</label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-floating">
            <select value={tarefa.prioridade}
              className="form-control"
              name="prioridade"
              id="floatingprioridade"
              onChange={handleFieldsChange}
              >
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </select>
            <label htmlFor="floatingprioridade">Prioridade</label>
          </div>
          <div className="col">
          <div className="form-floating">
            <select value={tarefa.status}
              className="form-control"
              name="status"
              id="floatingstatus"
              onChange={handleFieldsChange}
              >
              <option value="Fazer">Por Fazer</option>
              <option value="Fazendo">Em Andamento</option>
              <option value="concluida">Concluida</option>
            </select>
            <label htmlFor="floatingstatus">Status</label>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          <button className="btn btn-success" type="submit">Enviar</button>
          <Link className="link" to="/"><button className="btn btn-outline-default">Voltar</button></Link>
        </div>
      </div>
      </div>
    </form>
  </div>
</div>
</div>
);
};

export default Edicao;