import axios from "axios";
import { useState } from "react";

const CreateTodoForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/todos", {
        todo: {
          title,
          content,
        },
      });

      // todoの作成に成功したらフォームの入力値をリセット
      setTitle("");
      setContent("");

      // 画面を更新してtodoを再取得
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="space-y-6 w-3/4 max-w-lg py-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-xl font-bold text-gray-700">
          New Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="タイトル"
          className="block w-full py-2 pl-3 pr-4 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="本文"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        />
        <button
          type="submit"
          className="mt-3 ml-auto flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Create
        </button>
      </form>
    </div>
  );
};
export default CreateTodoForm;
