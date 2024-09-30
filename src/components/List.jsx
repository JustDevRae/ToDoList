import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const getFilteredData = () => {
    if (search === "") {
      // 검색어가 비어있다면, 모든 todos를 반환한다. 
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()));
  }

  const filteredTodos = getFilteredData();

  return <div className="List">
    <h4>ToDoList 📝</h4>
    <input value={search} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
    <div className="todos_wrapper" >
      {
        filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
        })
      }
    </div>
  </div>
}

export default List;