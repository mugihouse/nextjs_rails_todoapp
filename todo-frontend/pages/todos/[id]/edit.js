import { useRouter } from "next/router";
import Link from "next/link";
import EditTodoForm from "@/components/EditTodoForm";

const EditTodoPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-3/4 max-w-lg">
        <EditTodoForm id={id} />
        <Link
          href="/"
          className="ml-auto font-medium text-blue-600 hover:bg-blue-300 focus:outline-none"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default EditTodoPage;
