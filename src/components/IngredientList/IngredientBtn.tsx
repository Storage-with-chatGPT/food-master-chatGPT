import React, { useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';

import { addIngredients, removeIngredients, updateIngredientList } from '@/services/ingredientList/slice';
import { useAppDispatch, useAppSelector } from '@/store';
import { IngredientType } from '@/types';
import { showToastMessage } from '@/utils/toastMsg';
import { longValueReplace, validateInput } from '@/utils/validation';

import DeleteConfirm from '../commons/DeleteConfirm';

const IngredientBtn = ({ name, state }: IngredientType) => {
  const [editModeState, setEditModeState] = useState(true);
  const [editModeInput, setEditModeInput] = useState(name);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const ingredientList = useAppSelector((state) => state.ingredientList.ingredientList);

  const handleOnClick = () => {
    if (!state) {
      dispatch(addIngredients(name));
    } else {
      dispatch(removeIngredients(name));
    }
  };

  const setIconOnClick = () => {
    setEditModeState(!editModeState);
    setEditModeInput(name);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditModeInput(event.currentTarget.value.split(' ').join(''));
  };
  // TODO: window.confirm 으로 확인하기 OR Toast Message 구현 해보기
  const updateIngredient = () => {
    // 중복 검사 Validation
    const duplicationCheck = ingredientList.filter((item) => item.name === editModeInput);

    if (editModeInput.length === 0) {
      showToastMessage({
        message: '빈값은 재료로 등록할 수 없습니다.',
        type: 'warn',
      });
      setEditModeInput(name);
      return;
    }

    if (!validateInput(editModeInput)) {
      showToastMessage({
        message: '다시한번 확인해주세요. (특수문자/자음/모음/숫자 금지)',
        type: 'warn',
      });
      setEditModeInput(name);
      return;
    }

    if (duplicationCheck.length > 0) {
      if (name === editModeInput) {
        showToastMessage({
          message: '현재 선택한 재료명과 동일 합니다.',
          type: 'warn',
        });
      } else {
        showToastMessage({
          message: '이미 등록되어있는 재료 입니다.',
          type: 'warn',
        });
        setEditModeInput(name);
      }
      return;
    }

    setEditModeState(!editModeState);
    dispatch(updateIngredientList({ name, editModeInput }));
  };

  return editModeState ? (
    <div>
      <div className="relative">
        {state ? (
          ''
        ) : (
          <CiSettings
            onClick={setIconOnClick}
            className="text-lg absolute top-1.5 right-1 hover:text-blue-200 cursor-pointer"
          />
        )}
      </div>
      <button
        onClick={handleOnClick}
        className={`w-20 h-20 border-2 m-1 ${
          state ? 'bg-blue-300' : 'bg-gray-100'
        } hover:bg-blue-200 ease-in duration-150 rounded-md`}
      >
        {longValueReplace(editModeInput)}
      </button>
    </div>
  ) : (
    <div className="relative">
      <div className="flex flex-row">
        <AiOutlineCheck
          onClick={updateIngredient}
          className="text-base absolute top-2 right-11 hover:text-green-300 cursor-pointer"
        />
        <BsTrash
          onClick={() => setIsDialogOpen(true)}
          className="text-base absolute top-2 right-6 hover:text-red-300 cursor-pointer"
        />
        <AiOutlineClose
          onClick={setIconOnClick}
          className="text-base absolute top-2 right-1 hover:text-blue-200 cursor-pointer"
        />
      </div>

      <button className={`w-20 h-20 border-2 m-1 ${state ? 'bg-blue-300' : 'bg-gray-100'} rounded-md`}>
        <input className="w-14 pl-2" type="text" value={editModeInput} onChange={handleOnChange} />
      </button>
      <div className="absolute">
        {isDialogOpen ? (
          <DeleteConfirm deleteName={name} setEditModeState={setEditModeState} setIsDialogOpen={setIsDialogOpen} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default IngredientBtn;
