import { deleteIngredientList } from "@/services/ingredientList/slice";
import { useAppDispatch } from "@/store";
import { Delete } from "@/types";
import { showToastMessage } from "@/utils/toastMsg";
import { Dispatch, useState } from "react";

function DeleteConfirm({ deleteName, setEditModeState }: Delete) {
  const [_, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteIngredientList(deleteName));
    setIsDialogOpen(false);
    setEditModeState(false);
    showToastMessage({
      message: `[${deleteName}] 재료가 삭제되었습니다.`,
      type: "error",
    });
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="bg-white rounded-lg p-8 z-20">
        <p className="mb-1 text-center font-bold">[감자] </p>
        <p className="mb-4">재료를 삭제하시겠습니까? </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 bg-gray-500 text-white mr-4"
            onClick={() => setIsDialogOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
