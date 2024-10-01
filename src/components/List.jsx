import { useState, useMemo } from "react";
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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzed 호출");
    
    const totalCount = todos.length;
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos]);

  return <div className="List">
    <h4>ToDoList 📝</h4>
    <div>
      <div>total: {totalCount}</div>
      <div>done: {doneCount}</div>
      <div>notDone: {notDoneCount}</div>
    </div>
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