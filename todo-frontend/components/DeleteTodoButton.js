import { useRouter } from "next/router";
import axios from "axios";

const DeleteTodoButton = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    // 確認のダイアログを表示
    if (!confirm("本当に削除しますか？")) {
      // いいえなら処理を終了
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/todos/${id}`);
      // 削除に成功したらトップページへ移動
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={handleDelete}
      className="mt-3 ml-auto flex justify-center py-2 px-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      Delete
    </button>
  );
};

export default DeleteTodoButton;
