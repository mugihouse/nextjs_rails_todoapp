import Link from "next/link";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Todo一覧を取得する関数を呼び出す
    fetchTodos();
  }, []);

  return (
    <div className="space-y-6 w-3/4 max-w-lg pt-10">
      <label className="block text-xl font-bold text-gray-700">
        Todo Index
      </label>
      <div className="items-center justify-center">
        {todos.map((todo) => (
          <Link href={`todos/${todo.id}`} key={todo.id}>
            <Todo todo={todo} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Todos;
