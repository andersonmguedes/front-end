import React, {useState, useEffect} from 'react';
import Card from '../card/card';
import Api from '../../../api/api';

const List = () => {
  const [tarefas, setTarefas] = useState([]);

useEffect(() => {
  getTarefas();
}, []);

const getTarefas = async () => {
const response = await Api.fetchGetAll();
const data = await response.json();
setTarefas(data);
}

  return (
<div className="container">      
      <div className="card-group">
        {
          tarefas.map((tarefa, index) => (
            <Card data = {tarefa} key = {index}/>
          ))
}
      </div>
</div>)
}
export default List