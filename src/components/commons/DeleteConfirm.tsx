import { deleteIngredientList } from '@/services/ingredientList/slice';
import { useAppDispatch } from '@/store';
import { Delete } from '@/types';
import { showToastMessage } from '@/utils/toastMsg';

function DeleteConfirm({ deleteName, setEditModeState, setIsDialogOpen }: Delete) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteIngredientList(deleteName));
    setEditModeState(false);
    showToastMessage({
      message: `[${deleteName}] 재료가 삭제되었습니다.`,
      type: 'error',
    });
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 z-20">
          <p className="mb-1 text-center font-bold">[{deleteName}] </p>
          <p className="mb-4">재료를 삭제하시겠습니까? </p>
          <div className="flex justify-end">
            <button className="px-4 py-2 bg-gray-500 text-white mr-4 rounded-md" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;
