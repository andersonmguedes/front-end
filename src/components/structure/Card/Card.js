import React from 'react'
import {Link} from 'react-router-dom';

const Card = (props) => {
  const tarefa = props.data;
  return (
    <Link to={`/view/${tarefa._id}`} className="col">
    <div className="card-body">
    <h5 className="card-title">{tarefa.titulo}</h5>
    <span className= "badge bg-primary">{tarefa.prioridade}e</span>
    <span className= "badge bg-light text-dark alingh-rigth">{tarefa.prazo}</span>
    <p className="card-text">{tarefa.descricao}</p>
    <p className="card-text">{tarefa.datacriacao}</p>
    <p className="card-text"><small className="text-muted">{tarefa.status}</small></p>
  </div>
  </Link>
  )
}
export default Card