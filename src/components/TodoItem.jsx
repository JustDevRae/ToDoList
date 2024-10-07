import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const onChangeCheckbox = () => {
    onUpdate(id); // id 담아서 전달
  }

  const onClickDeleteButton = () => {
    onDelete(id);
  }

  return <div className="TodoItem">
    <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
    <div className="content">{content}</div>
    <div className="date">{new Date(date).toLocaleDateString()}</div>
    <button onClick={onClickDeleteButton}>삭제</button>
  </div>
}

export default memo(TodoItem);